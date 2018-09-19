$(document).ready(function () {

})

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
$(window).ready(function () {
    $('#loading').hide();
});

function renderQuestions() {
    for (var z = 0; z < triviaQuestions.length; z++) {
        var questionName = $('<div>').text(triviaQuestions[z].question);
        $('#questionArea').append(questionName);
        var optionA = $("<button>").attr({
            type: "button",
            class: "btn btn-primary",
            value: "a",
            qNum: z
        }).text(triviaQuestions[z].answer[0]);
        $('#questionArea').append(optionA);
        var optionB = $("<button>").attr({
            type: "button",
            class: "btn btn-primary",
            value: "b",
            id: "q" + z + "b"
        }).text(triviaQuestions[z].answer[1]);
        $('#questionArea').append(optionB);
        var optionC = $("<button>").attr({
            type: "button",
            class: "btn btn-primary",
            value: "c",
            id: "q" + z + "c"
        }).text(triviaQuestions[z].answer[2]);
        $('#questionArea').append(optionC);

    }

}

//listen for any button click
$("body").on("click",".btn-primary", function(){
    console.log(this);
    console.log($(this).text());

});

$("#start-btn").on('click', function () {
    renderQuestions();
    var initialTime = Date.now();
    // set timeout (function, 300000);
    // set interval (function, 1000);




    

    if (this.id == 'buttonA') {
        var correctAnswer = 'A';
    } else if (this.id == 'buttonB') {
        correctAnswer = 'B';
    } else if (this.id == 'buttonC') {
        correctAnswer = 'C';
        console.log("buttons?")
    }
    // if (chosenAnswer === triviaQuestions[qNum of this].correct) {
    //     correctAnswer();
    // } else if (chosenAnswer === 'A') {
    //     wrongAnswer();
    // }
    // if ((chosenAnswer === 'B') && (triviaQuestions.answer[1] === true)) {
    //     correctAnswer();
    // } else if (chosenAnswer === 'B') {
    //     wrongAnswer();
    // }
    // if ((chosenAnswer === 'C') && (triviaQuestions.answer[2] === true)) {
    //     correctAnswer();
    // } else if (chosenAnswer === 'C') {
    //     wrongAnswer();
    //     console.log("more buttons?")
    // }
    console.log(this)
});
