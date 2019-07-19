const config = {
    level: "general",
    time: 20000,
    lives: 3
};

const levels = {
    "general": [{
        "name": "Nokia 3310",
        "answers": [
            "img/content/3310.png",
            "img/content/N70.png",
            "img/content/3250.webp",
            "img/content/8800.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Siemens ME45",
        "answers": [
            "img/content/SX1.jpg",
            "img/content/me45.png",
            "img/content/c65.jpg",
            "img/content/m65.png",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Samsung C100",
        "answers": [
            "img/content/i710.webp",
            "img/content/D600.jpg",
            "img/content/c100.jpg",
            "img/content/X600.webp",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Sony Ericsson T68i",
        "answers": [
            "img/content/K500i.webp",
            "img/content/K790i.webp",
            "img/content/M600i.jpg",
            "img/content/T68i.webp",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Motorola MPx200",
        "answers": [
            "img/content/MPx200.webp",
            "img/content/razr_v3_3.jpg",
            "img/content/SLVRL7.png",
            "img/content/E398.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Sony Ericsson K500i",
        "answers": [
            "img/content/M600i.jpg",
            "img/content/K790i.webp",
            "img/content/K500i.webp",
            "img/content/T68i.webp",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Motorola RAZR V3",
        "answers": [
            "img/content/E398.jpg",
            "img/content/razr_v3_3.jpg",
            "img/content/MPx200.webp",
            "img/content/SLVRL7.png",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Siemens SX1",
        "answers": [
            "img/content/me45.png",
            "img/content/m65.png",
            "img/content/SL45.png",
            "img/content/SX1.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Motorola E398",
        "answers": [
            "img/content/MPx200.webp",
            "img/content/E398.jpg",
            "img/content/SLVRL7.png",
            "img/content/razr_v3_3.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Siemens M65",
        "answers": [
            "img/content/m65.png",
            "img/content/me45.png",
            "img/content/SL45.png",
            "img/content/SX1.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Sony Ericsson M600i",
        "answers": [
            "img/content/K500i.webp",
            "img/content/T68i.webp",
            "img/content/M600i.jpg",
            "img/content/K750i.webp",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Nokia N70",
        "answers": [
            "img/content/N73.png",
            "img/content/8800.jpg",
            "img/content/3310.png",
            "img/content/N70.png",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Nokia 8800",
        "answers": [
            "img/content/8800.jpg",
            "img/content/N70.png",
            "img/content/3310.png",
            "img/content/3250.webp",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Apple iPhone",
        "answers": [
            "img/content/iphone.png",
            "img/content/4.webp",
            "img/content/x.jpeg",
            "img/content/xs.webp",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Sony Ericsson K790i",
        "answers": [
        "img/content/K790i.webp",
            "img/content/K750i.webp",
            "img/content/M600i.jpg",
            "img/content/K500i.webp",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Motorola SLVR L7",
        "answers": [
            "img/content/E398.jpg",
            "img/content/MPx200.webp",
            "img/content/razr_v3_3.jpg",
            "img/content/SLVRL7.png",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Samsung D600",
        "answers": [
            "img/content/c100.jpg",
            "img/content/X600.webp",
            "img/content/D600.jpg",
            "img/content/i710.webp",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Sony Ericsson K750i",
        "answers": [
            "img/content/K500i.webp",
            "img/content/K750i.webp",
            "img/content/M600i.jpg",
            "img/content/K790i.webp",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Nokia 3250",
        "answers": [
            "img/content/8800.jpg",
            "img/content/9210.jpg",
            "img/content/N70.png",
            "img/content/3250.webp",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "LG Chocolate (KG800)",
        "answers": [
            "img/content/KG800.webp",
            "img/content/680.jpg",
            "img/content/5PP.jpg",
            "img/content/basic.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Nokia 9210 Communicator",
        "answers": [
            "img/content/8800.jpg",
            "img/content/9210.jpg",
            "img/content/9500.jpg",
            "img/content/3250.webp",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Nokia N73",
        "answers": [
            "img/content/3250.webp",
            "img/content/8800.jpg",
            "img/content/N73.png",
            "img/content/N70.png",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Nokia N90",
        "answers": [
            "img/content/N70.png",
            "img/content/N90.png",
            "img/content/N73.png",
            "img/content/3250.webp",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Nokia 5300 XpressMusic",
        "answers": [
            "img/content/9210.jpg",
            "img/content/5300.webp",
            "img/content/N95.png",
            "img/content/5800.webp",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Nokia N91",
        "answers": [
            "img/content/N91.png",
            "img/content/N90.png",
            "img/content/N73.png",
            "img/content/5300.webp",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Nokia 6131",
        "answers": [
            "img/content/8800.jpg",
            "img/content/6131.webp",
            "img/content/3250.webp",
            "img/content/9210.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Samsung i710",
        "answers": [
            "img/content/c100.jpg",
            "img/content/X600.webp",
            "img/content/i710.webp",
            "img/content/D600.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Nokia 6300",
        "answers": [
            "img/content/N70.png",
            "img/content/3310.png",
            "img/content/3250.webp",
            "img/content/6300.webp",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Nokia 6120 classic",
        "answers": [
            "img/content/N70.png",
            "img/content/6120.webp",
            "img/content/6300.webp",
            "img/content/3250.webp",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Nokia N95",
        "answers": [
            "img/content/8800.jpg",
            "img/content/N95.png",
            "img/content/6131.webp",
            "img/content/3250.webp",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Nokia 7900 Prism",
        "answers": [
            "img/content/N73.png",
            "img/content/7500.webp",
            "img/content/7900.webp",
            "img/content/9210.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Siemens SL45",
        "answers": [
            "img/content/SL45.png",
            "img/content/m65.png",
            "img/content/SX1.jpg",
            "img/content/me45.png",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Nokia N82",
        "answers": [
            "img/content/N70.png",
            "img/content/N95.png",
            "img/content/N73.png",
            "img/content/N82.png",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "HTC HD2",
        "answers": [
            "img/content/DesireS.jpg",
            "img/content/Desire300.webp",
            "img/content/EVO.jpg",
            "img/content/HD2.webp",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Nokia 7650",
        "answers": [
            "img/content/9210.jpg",
            "img/content/3250.webp",
            "img/content/7650.webp",
            "img/content/N90.png",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Samsung Galaxy Note",
        "answers": [
            "img/content/GalaxyNote2.jpeg",
            "img/content/GalaxyNote.png",
            "img/content/GalaxyNote8.webp",
            "img/content/GalaxyNote4.webp",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Nokia E71",
        "answers": [
            "img/content/E71.png",
            "img/content/E72.png",
            "img/content/E70.webp",
            "img/content/7650.webp",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Samsung Galaxy S II",
        "answers": [
            "img/content/GalaxySIII.png",
            "img/content/GalaxyS4.webp",
            "img/content/GalaxySII.png",
            "img/content/GalaxyS.webp",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Nokia 5800",
        "answers": [
            "img/content/E70.webp",
            "img/content/7650.webp",
            "img/content/5800.webp",
            "img/content/5300.webp",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Nokia 8110",
        "answers": [
            "img/content/6300.webp",
            "img/content/6131.webp",
            "img/content/8110.jpg",
            "img/content/banana.jpeg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Nokia 808",
        "answers": [
            "img/content/3250.webp",
            "img/content/7650.webp",
            "img/content/N95.png",
            "img/content/808.webp",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Nokia 5140",
        "answers": [
            "img/content/6120.webp",
            "img/content/7650.webp",
            "img/content/N82.png",
            "img/content/5140.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Nokia 6230",
        "answers": [
            "img/content/7650.webp",
            "img/content/6120.webp",
            "img/content/6230.webp",
            "img/content/5140.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Nokia 8310",
        "answers": [
            "img/content/8310.jpg",
            "img/content/6230.webp",
            "img/content/6120.webp",
            "img/content/5140.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Nokia 9500 Communicator",
        "answers": [
            "img/content/9210.jpg",
            "img/content/6230.webp",
            "img/content/9500.jpg",
            "img/content/5140.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Nokia N93",
        "answers": [
            "img/content/N90.png",
            "img/content/N95.png",
            "img/content/N93.jpg",
            "img/content/N82.png",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Siemens C65",
        "answers": [
            "img/content/c65.jpg",
            "img/content/me45.png",
            "img/content/m65.png",
            "img/content/SX1.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Samsung X600",
        "answers": [
            "img/content/c100.jpg",
            "img/content/i710.webp",
            "img/content/X600.webp",
            "img/content/D600.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "iPhone XS",
        "answers": [
            "img/content/xs.webp",
            "img/content/xsmax.jpg",
            "img/content/xr.jpg",
            "img/content/x.jpeg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "iPhone XS Max",
        "answers": [
            "img/content/xsmax.jpg",
            "img/content/xs.webp",
            "img/content/x.jpeg",
            "img/content/xr.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "iPhone XR",
        "answers": [
            "img/content/x.jpeg",
            "img/content/xr.jpg",
            "img/content/xsmax.jpg",
            "img/content/8.jpeg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "iPhone X",
        "answers": [
            "img/content/8.jpeg",
            "img/content/xr.jpg",
            "img/content/x.jpeg",
            "img/content/8Plus.png",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "iPhone SE",
        "answers": [
            "img/content/4.webp",
            "img/content/5.webp",
            "img/content/5s.jpg",
            "img/content/se.png",
        ],
        "right": 3,
        "factor": 1
    }]
};
