function random(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
}

function groupBy(array, keyPath) {
    return array.reduce((a, v) => {
        const key = v[keyPath];
        (a[key] = a[key] || []).push(v);
        return a;
    }, {})
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

class Storage {
    static save(level, name, email, score) {
        const data = Storage.select();
        const levelData = data[level] ? data[level] : {};
        levelData[name] = {
            name,
            email,
            score
        }

        data[level] = levelData;

        localStorage.setItem("konturface", JSON.stringify(data));
    }

    static get(name) {
        const data = Storage.select();
        return data[name] || null;
    }

    static select() {
        const data = localStorage.getItem("konturface")
        return data ? JSON.parse(data) : {};
    }
}

class Game {
    constructor(config, levels) {
        this.config = config;
        this.level = levels[config.level];
    }

    async run() {
        while (true) {
            const register = await new RegistrationPage(this.config.levels).run();
            const selectedLevel = levels[register.level];
            const result = await new GamePage(register.user, this.config, this.shuffleAnswers([...selectedLevel])).run();
            Storage.save(register.level, result.name, result.email, result.score);
            await new ResultPage(result).run();
        }
    }


    shuffleAnswers(array) {
        const groups = groupBy(array, "factor");
        return Object.keys(groups).sort((a, b) => parseFloat(a) - parseFloat(b)).reduce((a, v) => [...a, ...shuffle(groups[v])], []);
    }
}

class RegistrationPage {
    constructor(availableLevels) {
        this.resolver = null;
        this.page = document.querySelector(".registration");
        this.submit = document.querySelector(".submit");
        this.form = document.querySelector(".form");
        this.availableLevels = availableLevels;
        this.register = this.register.bind(this);
    }

    initialize() {
        this.form.reset();
        this.page.classList.remove("invisible");
        this.submit.addEventListener("click", this.register);
    }

    run() {
        this.initialize();
        return new Promise(resolve => this.resolver = resolve);
    }

    dispose() {
        this.page.classList.add("invisible");
        this.submit.removeEventListener("click", this.register)
    }

    end(user) {
        this.dispose();
        this.resolver(user);
    }

    register() {
        const data = new FormData(this.form);
        const user = {};
        for (let [key, value] of data.entries()) {
            user[key] = value;
        }

        if (user.name && user.email) {
            this.end({user, level: config.level});
        }
    }
}

class Timer {
    constructor(time, lostCallback) {
        this.spiner = document.querySelector(".spiner");
        this.inner = document.querySelector(".spinner-inner");
        this.mask = document.querySelector(".spinner-mask");
        this.maskTwo = document.querySelector(".spinner-mask-two");
        this.timer = document.querySelector(".timer");

        this.time = time;
        this.callback = lostCallback;
        this.interval = 0;
    }

    start() {
        clearInterval(this.interval);
        this.state = this.time;
        this.timer.textContent = this.time / 1000;
        this.interval = setInterval(this.tick.bind(this), 1000);
        this.startAnimation();
    }

    startAnimation() {
        this.inner.style.animation = `inner ${this.time / 1000}s linear`;
        this.mask.style.animation = `mask ${this.time / 1000}s linear`;
        this.maskTwo.style.animation = `mask-two ${this.time / 1000}s linear`;
    }

    stop() {
        this.stopAnimation();
        clearInterval(this.interval);
    }

    stopAnimation() {
        this.inner.style.animationPlayState = "paused";
        this.mask.style.animationPlayState = "paused";
        this.maskTwo.style.animationPlayState = "paused";
        setTimeout(() => {
            this.inner.style.animation = undefined;
            this.mask.style.animation = undefined;
            this.maskTwo.style.animation = undefined;
        }, 750)
    }

    tick() {
        this.state -= 1000;
        this.timer.textContent = this.state / 1000;
        if (this.state <= 0) {
            this.stop();
            this.callback();
        }
    }
}

class AnswerButton {
    constructor(dom, callback) {
        this.dom = dom;
        this.root = dom.getElementsByClassName("button-inner")[0];
        this.callback = callback;
        this.reset();
        this.handleClick = this.handleClick.bind(this);
    }

    disable() {
        this.isDisabled = true;
        this.dom.removeEventListener("click", this.handleClick);
        this.dom.classList.add("disabled");
    }

    wrongAnswer() {
        this.isDisabled = true;
        this.dom.removeEventListener("click", this.handleClick);
        this.dom.classList.add("hidden");
    }

    setAnswer(index, src, isRight) {
        this.isDisabled = false;
        this.dom.classList.remove("disabled");
        this.dom.classList.remove("hidden");
        this.index = index;
        this.isRight = isRight;
        this.clearAnswer();
        const img = document.createElement("div");
        img.style.backgroundImage = `url(${src})`;
        img.classList.add("answer-img");

        this.root.appendChild(img);
        this.dom.addEventListener("click", this.handleClick);
    }

    clearAnswer() {
        if (this.root.firstChild) {
            this.root.removeChild(this.root.firstChild);
        }
    }

    handleClick() {
        if (!this.isDisabled) {
            this.callback(this.index);
        }
    }

    good() {
        this.setState("good");
    }

    bad() {
        this.setState("bad");
    }

    setState(state) {
        this.reset();
        this.dom.classList.add(state);
    }

    reset() {
        this.dom.classList.remove("good");
        this.dom.classList.remove("bad");
    }
}

class GamePage {
    constructor(user, config, tasks) {
        this.resolver = null;
        this.result = {
            name: user.name,
            email: user.email,
            score: 0
        };
        this.rounds = [...tasks];
        this.currentRoundIndex = 0;
        this.lives = config.lives;

        this.page = document.querySelector(".game");
        this.taskContainer = document.querySelector(".task");
        this.descriptionContainer = document.querySelector(".description");
        this.livesContainer = document.querySelector(".lives");
        this.answer = this.answer.bind(this);
        this.answers = [1, 2, 3, 4].map(x => new AnswerButton(document.querySelector(`.answer-${x}`), this.answer));
        this.help5050Button = document.querySelector(".help5050");
        this.timer = new Timer(config.time, () => this.badAnswer(this.rounds[this.currentRoundIndex].right, null));

        this.help5050 = this.help5050.bind(this);
    }

    initialize() {
        this.help5050Button.classList.remove("invisible");
        this.help5050Button.addEventListener("click", this.help5050);
        this.page.classList.remove("invisible");
        this.livesContainer.textContent = this.lives;
    }

    run() {
        this.initialize();
        this.renderRound(0);
        return new Promise(resolve => this.resolver = resolve);
    }

    dispose() {
        this.help5050Button.removeEventListener("click", this.help5050);
        this.timer.stop();
        this.clearTask();
        this.clearDescription();
        this.page.classList.add("invisible");
    }

    end() {
        this.dispose();
        this.resolver(this.result)
    }

    answer(number) {
        this.timer.stop();
        this.answers.map(x => x.disable());
        const round = this.rounds[this.currentRoundIndex];
        round.right === number ? this.rightAnswer(number, round.factor) : this.badAnswer(round.right, number);
    }

    nextRound() {
        this.currentRoundIndex++;
        if (this.currentRoundIndex === this.rounds.length) {
            return this.end();
        }
        this.renderRound(this.currentRoundIndex);
    }

    rightAnswer(number, factor) {
        this.answers[number].good();
        this.result.score += this.lives * factor * this.timer.state / 100;
        setTimeout(() => {
            this.answers[number].reset();
            this.nextRound();
        }, 1000)
    }

    badAnswer(rightAnswer, number) {
        number !== null && this.answers[number].bad();
        this.answers[rightAnswer].good();
        setTimeout(() => {
            number !== null && this.answers[number].reset();
            this.answers[rightAnswer].reset();
            this.decrementLives();
            if (this.lives > 0) {
                this.nextRound()
            } else {
                this.end()
            }
        }, 2000);
    }

    decrementLives() {
        this.lives = this.lives - 1;
        this.livesContainer.textContent = this.lives;
    }

    renderRound(number) {
        this.clearTask();
        this.clearDescription();
        this.taskContainer.appendChild(this.createTaskTag(this.rounds[number]));
        this.descriptionContainer.appendChild(this.createDescriptionTag(this.rounds[number]));
        this.rounds[number].answers.map((x, i) => this.answers[i].setAnswer(i, x, i === this.rounds[number].right));
        this.timer.start();
    }

    clearTask() {
        if (this.taskContainer.firstChild) {
            this.taskContainer.removeChild(this.taskContainer.firstChild);
        }
    }

    clearDescription() {
        if (this.descriptionContainer.firstChild) {
            this.descriptionContainer.removeChild(this.descriptionContainer.firstChild);
        }
    }

    createTaskTag(task) {
        const p = document.createElement("div");
        p.textContent = task.name;
        return p;
    }

    createDescriptionTag(task) {
        const p = document.createElement("div");
        p.textContent = task.description;
        return p;
    }

    help5050() {
        this.help5050Button.classList.add("invisible");
        const firstWrongAnswer = this.answers.filter(x => !x.isRight)[random(0, 3)];
        const secondWrongAnswer = this.answers.filter(x => !x.isRight && x.index !== firstWrongAnswer.index)[random(0, 2)];
        firstWrongAnswer.wrongAnswer();
        firstWrongAnswer.clearAnswer();
        secondWrongAnswer.wrongAnswer();
        secondWrongAnswer.clearAnswer();
    }
}

class ResultPage {
    constructor(result) {
        this.resolver = null;
        this.result = result;
        this.page = document.querySelector(".gameover");
        this.resultContainer = document.querySelector(".result");
        this.button = document.querySelector(".end");
        this.end = this.end.bind(this);
    }

    initialize() {
        this.button.addEventListener("click", this.end);
        this.page.classList.remove("invisible");
        this.resultContainer.textContent = this.result.score;
    }

    run() {
        this.initialize();
        return new Promise(resolve => this.resolver = resolve);
    }

    dispose() {
        this.button.removeEventListener("click", this.end);
        this.page.classList.add("invisible");
    }

    end() {
        this.dispose();
        this.resolver();
    }
}

const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault())
});

const game = new Game(config, levels);
game.run();
