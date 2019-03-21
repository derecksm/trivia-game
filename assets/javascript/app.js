let gameOver = false
let timeLeft = 15

let timer = setInterval(myTimer,1000);

function myTimer() {
    document.getElementById('showTime').innerHTML = timeLeft + " seconds remaining"
  timeLeft -= 1
  
  if(timeLeft < 0){
    clearInterval(timer)
    let styler = document.querySelector('#showTime')
    styler.innerHTML = 'OH NO!'
    
    gameOver = true
    if (gameOver === true) {
        // document.querySelector('.trivia-form').innerHTML = ''
        document.getElementById('times-up-container').classList.add('show')
    }
  }
}

function stopTimer() {
    clearInterval(timer);
}

let answers = []

document.addEventListener('change', function (e) {
    let radio = document.getElementsByName('choice')
    let answer = e.target.value
    let question = parseInt(e.target.getAttribute('name').replace('choice-', ''))
    let arrayQuestionIndex = question - 1

    answers[arrayQuestionIndex] = answer

    console.log(answers)
})
let checkAnswers = () => {
    let formComplete = false

    function showErrorMsg(){
        document.getElementById('error-msg').style.display = 'block'
    
        // Shows Error Message
        setTimeout(function() {
            document.getElementById('error-msg').style.display = 'none'
        }, 3000)

    }

    if (answers.length === 5) {
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === undefined) {

                showErrorMsg()
                formComplete = false
                break
            }
            else {
                formComplete = true
                stopTimer()
            }
        }
    }

    if (formComplete === true) {
        document.getElementById('error-msg').style.display = 'none'

        calcNumCorrectAnswers()
    }
    else {
        showErrorMsg()
    }
}

function calcNumCorrectAnswers() {
    let numCorrect = 0

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === 'true') {
            numCorrect += 1
        }
    }

    document.querySelector('#answerCounter').textContent = `${numCorrect}` + ' out of 5 correct' 
}

let submitBtn = document.getElementById('form-btn')

submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    checkAnswers()
})

document.getElementById('error-msg').style.display = 'none'










