var divEl = document.querySelector(".container");
var buttonEl = document.querySelector(".start");
var h1El = document.querySelector("h1");
var pEl = document.querySelector("p");

var questions = [
    {
        question: 'What is the correct way to call the random method on the Math global object?',
        answers: [
            { 
                answer: 'math.random()', 
                correct: false 
            }, 
            {
                answer: 'Math.random()',
                correct: true
            }, 
            {
                answer: 'math.Random()',
                correct: false
            }, 
            {
                answer: 'Math.Random()',
                correct: false
            }
        ]
    },
    {
        question: 'What is the correct way to call a string\'s built-in method?',
        answers: [
            {
                answer: '\'helloWorld\'.toUpperCase();',
                correct: true
            }, 
            {
                answer: 'toUpperCase(\'helloWorld\');',
                correct: false
            }, 
            {
                answer: '.toUpperCase(\'helloWorld\');',
                correct: false
            }, 
            {
                answer: '\helloWorld\'.toUpperCase;',
                correct: false
            }
        ]
    },
    {
        question: 'Arrays are _________ indexed',
        answers: [
            {
                answer: 'not',
                correct: false
            }, 
            {
                answer: 'falsely',
                correct: false
            }, 
            {
                answer: 'zero',
                correct: true
            }, 
            {
                answer: 'even',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the follow is NOT a type of loop?',
        answers: [
            {
                answer: 'for',
                correct: false
            }, 
            {
                answer: 'while',
                correct: false
            }, 
            {
                answer: 'do while',
                correct: false
            }, 
            {
                answer: 'console.log()',
                correct: true
            }
        ]
    },
    {
        question: 'true and false are a ___________ data type?',
        answers: [
            {
                answer: 'string',
                correct: false
            }, 
            {
                answer: 'boolean',
                correct: true
            }, 
            {
                answer: 'integer',
                correct: false
            }, 
            {
                answer: 'complicated',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following statements is the correct way to declare a variable in javaScript: ',
        answers: [
            {
                answer: 'var x = 5;',
                correct: false
            }, 
            {
                answer: 'let x = 5;',
                correct: false
            }, 
            {
                answer: 'const x = 5;',
                correct: false
            }, 
            {
                answer: 'All the statements above are correct.',
                correct: true
            }
        ]
    },
    {
        question: 'True or False: Length is an example of a JavaScript property.',
        answers: [
            {
                answer: true,
                correct: true
            }, 
            {
                answer: false,
                correct: false
            }, 

        ]
    },
    {
        question: 'JSON stands for ____________.',
        answers: [
            {
                answer: 'JavaScript Operational Notation',
                correct: false
            }, 
            {
                answer: 'Java Situational Objects Notation',
                correct: false
            }, 
            {
                answer: 'JavaScript Object Notation',
                correct: true
            }, 
            {
                answer: 'JavaScript Order Namespace',
                correct: false
            }
        ]
    },
    {
        question: 'If isConfused equals true, which of the following expressions evaluates to true?',
        answers: [
            {
                answer: 'isConfused !== false',
                correct: true
            }, 
            {
                answer: '!isConfused',
                correct: false
            }, 
            {
                answer: 'isConfused === false',
                correct: false
            }, 
            {
                answer: '!isConfused === true',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following variables contains a truthy value?',
        answers: [
            {
                answer: 'let dataEntry = \'\'',
                correct: false
            }, 
            {
                answer: 'let dataEntry = \'false\'',
                correct: true
            }, 
            {
                answer: 'let dataEntry = 0',
                correct: false
            }, 
            {
                answer: 'let dataEntry = false',
                correct: false
            }
        ]
    },
    {
        question: 'Which best defines a variable with block scope?',
        answers: [
            {
                answer: 'A variable that is available outside of a block.',
                correct: false
            }, 
            {
                answer: 'A variable that is available within a function.',
                correct: false
            }, 
            {
                answer: 'A variable that is defined within a block and only available inside a block.',
                correct: true
            }, 
            {
                answer: 'A variable that is available throughout a program.',
                correct: false
            }
        ]
    }
]


const displayQuestionAndAnswer = function() {
    for (var i = 0; i < questions.length; i++) {
        var questionAndAnswers = questions[i];
        debugger;
        h1El.innerText = questionAndAnswers.question;
        questionAndAnswers.answers.forEach(answer => {
            var button = document.createElement('button')
            divEl.appendChild(button);
            button.innerText = answer.answer
            button.addEventListener('click', function(event){
                console.log(event.target);
            });
        });
        
    }
}

const startQuiz = function() {
    pEl.remove();
    buttonEl.remove();
    displayQuestionAndAnswer();
}

buttonEl.addEventListener('click', startQuiz);
