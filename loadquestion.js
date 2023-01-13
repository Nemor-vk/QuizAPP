import { questionDB } from "./questions.js";
import { checkedAns, correctAnswer, wrongAnswer } from "./checkedans.js";


const ques = document.querySelector(".question");
const option1 = document.querySelector("#optionA");
const option2 = document.querySelector("#optionB");
const option3 = document.querySelector("#optionC");
const option4 = document.querySelector("#optionD");

const submit = document.querySelector(".btn");
const optionSelected = document.getElementsByName("options");


let score = 0;

// total score & no: of questions
let noOfQuestion = questionDB.length;
export function getTotalQuestion() { return noOfQuestion; };
let totalScore = 100;

//score increments by - score incrementor
const scoreIncrement = totalScore / noOfQuestion;

// load question definition
export function loadquestion(count) {

    ques.innerHTML = questionDB[count].question;
    option1.innerHTML = questionDB[count].a;
    option2.innerHTML = questionDB[count].b;
    option3.innerHTML = questionDB[count].c;
    option4.innerHTML = questionDB[count].d;

}


// on submit


export function isAnsRight(count) {

    let correctAns = questionDB[count].ans;
    const ans = checkedAns(optionSelected);

    // console.log(" Inside isAnsRight, ans value is " + ans + " & count is " + count);
    if ( ans != undefined) {
        if (correctAns == ans) {
            correctAnswer();
            score = score + scoreIncrement;
            console.log(`score is ${score} for question ${count}`);
    
        }
        else {
            wrongAnswer();
        }
    }
}

// get score

export function getScore() {

    return Math.trunc(score);
}









