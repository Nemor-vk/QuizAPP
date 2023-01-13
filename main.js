import { getScore, getTotalQuestion, isAnsRight, loadquestion } from "./loadquestion.js";


const submit = document.querySelector(".btn");
let totalScore = 100;

let count = 0;
let TIMER_COUNT_DOWN = 15;
let setInterval_ID;

loadquestion(count);
startTimer();


submit.addEventListener('click', () => {

    resetTimer();
    submit.style.display = "none";
    // console.log(`Checking is ans is right for count : ${count}` );
    isAnsRight(count); // checks if the ans is right

    count++;

    if (count < getTotalQuestion()) {

        // count++;
        setTimeout(() => {
            loadquestion(count);
            submit.style.display = "block";
        }, 1400);
        deSelectAll();

        startTimer();

    }
    else {
        let score = getScore();

        const scoreCard = document.querySelector(".showScore");
        scoreCard.innerHTML = `You Scored : ${score}/${totalScore} 
            <button class="playagain" onclick="location.reload()"> Play Again</button>`

        scoreCard.style.display = "flex";
    } //Shows score when array ends
});


// deSelect all option - after previous submit

function deSelectAll() {

    const element = document.getElementsByName("options");

    element.forEach(element => {
        element.checked = false;
    });
}

///////////////// COUNTER RELATED CODE //////////////////////////////////////

const timerSelector = document.querySelector('.timer');

//timer function - countdown 15 secs

function startTimer() {
    setInterval_ID = setInterval(() => {
    
        TIMER_COUNT_DOWN--;
        timerSelector.textContent = `${TIMER_COUNT_DOWN}`;
    
        if (TIMER_COUNT_DOWN == 0) {
            submit.click();
            TIMER_COUNT_DOWN = 15;
        }
    
    }, 1000);
}

// Reset timer

function resetTimer () {

    clearInterval(setInterval_ID);
    TIMER_COUNT_DOWN = 15;
    timerSelector.textContent = `${TIMER_COUNT_DOWN}`;
}





