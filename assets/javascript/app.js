$(document).ready(function () {

})

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
var countdownTimer = {
    time: 30,
}
}
var triviaQuestions = [{

        question: "What is the registry of the main starship in the show?",
        answer: ["1701 E USS Enterprize", "1701 D USS Enterprize", "1701 c USS Enterprize"],
        correct: "1701 D USS Enterprize",
        gif: ""
    },
    {
        question: "What is the name of Worf's son?",
        answer: ["Alexander", "Justin", "Casey"],
        correct: "Alexander",
        gif: ""
    },
    {
        question: "What is Captain Picard's favorite drink?",
        answer: ["Whiskey", "Klingon Blood Wine", "Earl Gray tea, hot"],
        correct: "Earl Gray tea, hot",
        gif: ""
    },
    {
        question: "What does the 't' stand for in William T Riker?",
        answer: ["Terrel", "Thomas", "Terry"],
        correct: "Thomas",
        gif: ""
    },
    {
        question: "Who was the only main character to die?",
        answer: ["Tasha Yar", "Data", "Captain Picard"],
        correct: "Tasha Yar",
        gif: ""
    },
    {
        question: "Who only served for a year as Chief Medical?",
        answer: ["Dianna Troi", "Katherine Palaski", "Beverly Crusher"],
        correct: "Katherine Palaski",
        gif: ""
    },
    {
        question: "Who became an \"Acting Ensign\"",
        answer: ["William Riker", "Jordi La Forge", "Wesley Crusher"],
        correct: "Wesley Crusher",
        gif: ""
    },
    {
        question: "What character from The Original Star Trek played in a two-part episode with Captain Picard?",
        answer: ["James T Kirk", "Spock", "Scotty"],
        correct: "Spock",
        gif: ""
    },
    {
        question: "What is the name of Data's Daughter?",
        answer: ["Lal", "Lea", "Lisa"],
        correct: "Lal",
        gif: ""
    },
    {
        question: "What is the name of Data's animal and what kind of animal is it?",
        answer: ["Spot,the dog", "Spot, the fish", "Spot, the cat"],
        correct: "Spot, the cat",
        gif: ""
    }
]
$(window).ready(function() {
    $('#loading').hide();
});

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

