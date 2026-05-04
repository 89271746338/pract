let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
let minNew = parseInt(prompt('Введите минимум', 0));
let maxNew = parseInt(prompt('Введите максимум', 100));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');


const questionStarts = [
    `Вы загадали число`,
    `Попробую предположить:`,
    `Думаю, это число`,
    `А может быть, это`,
    `Проверим:`
];


const errorPhrases = [
    `Вы загадали неправильное число!\n\u{1F914}`,
    `Я сдаюсь..\n\u{1F92F}`,
    `Принимаю поражение\n\u{1F61E}`,
    `Как так то?\n\u{1F928}`,
    `Вот это неудача\n\u{1F614}`
];


const winPhrases = [
    `Я всегда угадываю\n\u{1F60E}`,
    `Ура! Я победил!\n\u{1F973}`,
    `Ещё один раз -- и я экстрасенс!\n\u{1F52E}`,
    `Лёгкая победа!\n\u{1F60E}`,
    `Я тебя раскусил!\n\u{1F92E}`
];


function getRandomPhrase(phrasesArray) {
    return phrasesArray[Math.floor(Math.random() * phrasesArray.length)];
}

function getRandomQuestion(number) {
    const start = getRandomPhrase(questionStarts);
    return `${start} ${number}?`;
}


orderNumberField.innerText = orderNumber;
answerField.innerText = getRandomQuestion(answerNumber);


document.getElementById('btnRetry').addEventListener('click', function () {
    minNew = minNew || 0;
    maxNew = maxNew || 100;

    minNew = minNew < -999 ? -999 : (minNew > 999 ? 999 : minNew);
    maxNew = maxNew < -999 ? -999 : (maxNew > 999 ? 999 : maxNew);
    
    if (minNew >= maxNew) {
        minValue = 0;
        maxValue = 100;
    } else {
        minValue = minNew;
        maxValue = maxNew;
    }

    orderNumber = 0;
    orderNumberField.innerText = orderNumber;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    answerField.innerText = getRandomQuestion(answerNumber);
});


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = getRandomPhrase(errorPhrases);
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getRandomQuestion(answerNumber);
        }
    }
});


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = getRandomPhrase(errorPhrases);
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getRandomQuestion(answerNumber);
        }
    }
});


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = getRandomPhrase(winPhrases);
        gameRun = false;
    }
});


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

