$(document).ready(function () {

})

var countdownTimer = {
    time: 30,
}

var triviaQuestions = [{

        question: "What color is the sky?",
        answer: ["Red", "Blue", "Yellow"],
        correct: "Blue"
    },
    {
        question: "What color is the grass?",
        answer: ["Orange", "Yellow", "Green"],
        correct: "Green"
    }
]

function renderQuestions() {
    for(var z = 0; z < triviaQuestions.length; z++){
    //     var question = '<p class="question">'+triviaQuestions[z].question+'</p>'
    //    for(var x = 0; x < triviaQuestions[z].answer; x++) {
    //     var answer = '<ul class="answers">'
    //     <input type="radio"  name="trivia" value="a" id="q1a"> <br />
        $("<input>").attr({type: "radio", name: "trivia", Value: "a", id: "q1a"});
        // <input type="radio"  name="trivia" value="b" id="q1b"> <br />
        // <input type="radio"  name="trivia" value="c" id="q1c"> <br />
    // </ul>'
       }
    $('#root').append(question);
    }
}
renderQuestions();

var startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
}

function answerWrong() {
    wrong++;
    alert("Incorrect!");
    console.log("wrong");
}

$('input[name="trivia"]').on("change", function(){
    const value = $(this).val();
    const radio = $(this);
    console.log($("input[name='quiz']:checked").val());
    setTimeout(function(){
        radio.prop('checked', false);
    }, 2000);
});

$('.answerchoice').on('click', function () {
    console.log($(this));
    if (this.id == 'buttonA') {
        var correctAnswer = 'A';
    } else if (this.id == 'buttonB') {
        correctAnswer = 'B';
    } else if (this.id == 'buttonC') {
        correctAnswer = 'C';
    } else if (this.id == 'buttonD') {
        correctAnswer = 'D';
    }
    if ((chosenAnswer === 'A') && (triviaQuestions.flags[0] === true)) {
        correctAnswer();
    } else if (chosenAnswer === 'A') {
        wrongAnswer();
    }
    if ((chosenAnswer === 'B') && (triviaQuestions.flags[1] === true)) {
        correctAnswer();
    } else if (chosenAnswer === 'B') {
        wrongAnswer();
    }
    if ((chosenAnswer === 'C') && (triviaQuestions.flags[2] === true)) {
        correctAnswer();
    } else if (chosenAnswer === 'C') {
        wrongAnswer();
    }
    if ((chosenAnswer === 'D') && (triviaQuestions.flags[3] === true)) {
        correctAnswer();
    } else if (chosenAnswer === 'D') {
        wrongAnswer();
    }

});