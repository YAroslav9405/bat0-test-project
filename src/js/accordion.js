const questionClickOne = document.getElementById('question1');
const questionClickTwo = document.getElementById('question2');
const questionClickThree = document.getElementById('question3');
const answerOne = document.getElementById('answer1');
const answerTwo = document.getElementById('answer2');
const answerThree = document.getElementById('answer3');
console.log(questionClickThree)

questionClickTwo.addEventListener('click', () => {
    if (answerTwo.classList.contains('active')) {
        answerTwo.classList.remove('active');
    } else {
        answerTwo.classList.add('active');
    }
});

questionClickThree.addEventListener('click', () => {
    if (answerThree.classList.contains('active')) {
        answerThree.classList.remove('active');
    } else {
        answerThree.classList.add('active');
    }
});


questionClickOne.addEventListener('click', () => {
    if (answerOne.classList.contains('active')) {
        answerOne.classList.remove('active');
    } else {
        answerOne.classList.add('active');
    }
});

