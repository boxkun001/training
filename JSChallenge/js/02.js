let index = 0;
let q = '';
let counter = 0;
let ct = {
    header: {
        element: document.getElementById('header'),
        questionLength: document.getElementById('questionLength'),
        level: document.getElementById('level')
    },
    element: document.getElementById('content'),
    body: {
        element: document.getElementById('body'),
        top: document.getElementById('top'),
        middle: document.getElementById('middle'),
        bottom: document.getElementById('bottom'),
    },
    target: {
        element: document.getElementById('target'),
        typed: document.getElementById('t1'),
        yet: document.getElementById('t2')
    },
    start: document.getElementById('start')
}

let questions = ['fushigidane', 'hitokage', 'zenigame', 'pikachu', 'Rokon', 'Nyarth', 'Casey',
    'Yadon', 'Dogars', 'metamon', 'Eevee', 'Porygon', 'Mew', 'Mewtwo', 'Celebi', 'Lugia', 'Ho-Oh'
];

ct.start.addEventListener('click', () => {
    ct.body.element.focus();
    gameStart();
});

function gameStart() {
    ct.body.top.textContent = "1問目";
    ct.header = {
        element: document.getElementById('header'),
        questionLength: document.getElementById('questionLength'),
        level: document.getElementById('level')
    };
    document.addEventListener('keydown', keyInput);
    ct.start.setAttribute("disabled", "true");
    gameRunning();
}

function gameRunning() {
    ct.target.element.addEventListener("animationend", gameOver);
    q = questions[Math.floor(Math.random() * questions.length)];
    ct.target.yet.textContent = q;
    ct.target.element.classList.add(ct.header.level.value);
}

function keyInput(e) {
    if (e.key === q.substr(index, 1)) {
        ct.target.typed.textContent = q.substr(0, ++index);
        ct.target.yet.textContent = q.substring(index);
    }
    if (ct.target.typed.textContent === q) {
        counter++;
        index = 0;
        ct.target.element.classList.remove(ct.header.level.value);
        void ct.target.element.offsetWidth;

        if (counter < ct.header.questionLength.value) {
            ct.body.top.textContent = (counter + 1) + "問目";
            ct.target.element.classList.add(ct.header.level.value);
            q = questions[Math.floor(Math.random() * questions.length)];
            ct.target.yet.textContent = q;
            ct.target.typed.textContent = "";
        } else {
            counter = 0;
            ct.target.yet.textContent = "";
            ct.target.typed.textContent = "";
            ct.body.top.textContent = "Clear";
            ct.start.removeAttribute("disabled");
        }
    }
}

function gameOver() {
    ct.body.top.textContent = "Game Over...";
    ct.target.element.classList.remove(ct.header.level.value);
    ct.target.typed.textContent = "";
    ct.target.yet.textContent = "";
    ct.target.element.removeEventListener("animationend", gameOver);
    counter = 0;
    ct.start.removeAttribute("disabled");
}