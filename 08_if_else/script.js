let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
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

function startGame() {
    const minInput = prompt('Введите минимальное число для игры','0');
    const maxInput = prompt('Введите максимальное число для игры','100');
    let min = parseInt(minInput);
    let max = parseInt(maxInput);
    if (isNaN(min)) min = 0;
    if (isNaN(max)) max = 100;
    if (min >=max) {
        alert('Минимум должен быть меньше максимума! Будет использовано 0 и 100');
        min = 0;
        max = 100;
    }
    min = min < -999 ? -999 : (min > 999 ? 999 : min);
    max = max < -999 ? -999 : (max > 999 ? 999: max);
    minValue = min;
    maxValue = max;
    orderNumber = 0;
    gameRun = true;
    answerNumber = Math.floor((minValue + maxValue)/2);
    orderNumber++;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = getRandomQuestion(answerNumber);
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue},а я его угадаю`);
}
startGame();
document.getElementById('btnRetry').addEventListener('click', function(){
    startGame();
});


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue === minValue) {
            answerField.innerText = getRandomPhrase(errorPhrases);
            gameRun = false;
            return;
        } 
        minValue = answerNumber + 1;
        if (minValue > maxValue) {
            answerField.innerText = getRandomPhrase(errorPhrases);
            gameRun = false;
            return;
        }
        answerNumber = Math.floor((minValue + maxValue)/2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        answerField.innerText = getRandomQuestion(answerNumber);
    }
});


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue === minValue) {
            answerField.innerText = getRandomPhrase(errorPhrases);
            gameRun = false;
            return;
        } 
        maxValue = answerNumber -1;
        if (maxValue < minValue) {
            answerField.innerText = getRandomPhrase(errorPhrases);
            gameRun = false;
            return;
        }
        answerNumber = Math.floor((minValue + maxValue)/2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        answerField.innerText = getRandomQuestion(answerNumber);   
    }
});


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = getRandomPhrase(winPhrases);
        gameRun = false;
    }
});


