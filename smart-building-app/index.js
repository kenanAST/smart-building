const nextLevel1Button = document.getElementById("next-btn");
const game = document.getElementById("game");
const mechanics = document.getElementById("mechanics");
const next2_btn = document.getElementById("next2-btn");
const trivia = document.getElementById("trivia");
const next3_btn = document.getElementById("next3-btn");
const back_btn = document.getElementById("back-btn");
const back_btn_mechanics = document.getElementById("back-btn-to-mechanics");
const feud = document.getElementById("feud");


const answer_button = document.getElementById("answer_button");
var userAnswer=[
    {
        answer:"radius",
        point:"13"
    },
    {
        answer:"diameter",
        point:"12"
    },
    {
        answer:"chord",
        point:"11"
    },
    {
        answer:"circumference",
        point:"10"
    },
    {
        answer:"arc",
        point:"9"
    },
    {
        answer:"minor arc",
        point:"8"
    },
    {
        answer:"major arc",
        point:"7"
    },
    {
        answer:"semicircle",
        point:"7"
    },
    {
        answer:"chord",
        point:"6"
    },
    {
        answer:"inscribed angle",
        point:"5"
    },
    {
        answer:"sector",
        point:"4"
    },
    {
        answer:"segment",
        point:"3"
    },
    {
        answer:"arc length",
        point:"2"
    },
    {
        answer:"tangent",
        point:"2"
    },
    {
        answer:"intercepted arc",
        point:"1"
    },

]

nextLevel1Button.addEventListener("click", function(e){
    game.style.display = "block";
    mechanics.style.display = "block";
    nextLevel1Button.style.display = "none";
    next2_btn.style.display = "block";
    back_btn.style.display = "block"
});

next2_btn.addEventListener("click", function(e){
    trivia.style.display = "block";
    game.style.display = "none";
    mechanics.style.display = "none";
    nextLevel1Button.style.display = "none";
    next2_btn.style.display = "none";
    next3_btn.style.display = "block";
    back_btn.style.display = "none"
    back_btn_mechanics.style.display = "none"
});

next3_btn.addEventListener("click", function(e){
    trivia.style.display = "none";
    game.style.display = "none";
    mechanics.style.display = "none";
    nextLevel1Button.style.display = "none";
    next2_btn.style.display = "none";
    feud.style.display = "block";
    // back_btn.style.display = "none"
    // next2_btn.style.display = "none";
});

back_btn.addEventListener("click", function(e){
    game.style.display = "none";
    mechanics.style.display = "none";
    nextLevel1Button.style.display = "block";
    next2_btn.style.display = "none";
    back_btn.style.display = "none"
});

back_btn_mechanics.addEventListener("click", function(e){
    trivia.style.display = "none";
    game.style.display = "block";
    mechanics.style.display = "block";
    nextLevel1Button.style.display = "none";
    next2_btn.style.display = "block";
    next3_btn.style.display = "none";
    back_btn.style.display = "block"
});


// function getAnswer(){
//     var answer = document.getElementById('answer').value;
    
//     for(i=0; i<userAnswer.length; i++){
//         if(answer.toLowerCase() == userAnswer[i].answer){
//             var term = answer.toLowerCase();
//             console.log(term);
//             term.style.display = "block"
//             // arc_point.style.display = "block"
//             return
//         }
//     }
//     console.log("Incorrect");
// }

const formEl = document.querySelector('form');
const tbodyEl = document.querySelector('tbody');
guessLeft = document.querySelector(".guess-left");

let guesses = 1;

function getAnswer(){

    var answer = document.getElementById('answer').value;

    guessLeft.innerHTML = ${4 - guesses};

        for(i=0; i<userAnswer.length; i++){
            if(answer.toLowerCase() == userAnswer[i].answer){
                tbodyEl.innerHTML += `
                    <tr>
                        <td>${userAnswer[i].answer.toUpperCase()}</td>
                        <td>${userAnswer[i].point}</td>
                    </tr>
                `;
                
                return
            }
            else{
                guesses++;
                console.log("Wrong");
                console.log(guesses);
            }
        }
    console.log("Incorrect");
}