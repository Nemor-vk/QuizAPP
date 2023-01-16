import { questionDB } from "./questions.js";


const arrayOfQues = []; 

let Num = randomNum();
let totalQuesMinus_1 = 9;

    arrayOfQues.push(Num);
    console.log("First rando num" + Num);

// getSuffledQuesList();


////////////////////////////////////////////////// MAIN LOGIC ///////////////////////////////////////////////////////////////

//get random num using Math func
function randomNum() {

    return Math.floor( Math.random() * (questionDB.length) );
}


// generate a unique random that doesn't exist in arry
function getNoRepeat() {

    Num = randomNum();
    console.log(`checking if new NUM ${Num} Matches`);

        for(let i = 0; i < arrayOfQues.length; i++) {

            console.log("For loop = " + i + " & length : " + arrayOfQues.length);
            if(arrayOfQues[i] == Num){
                console.log(`${Num} is equal to array @ ${i}`);
                Num = getNoRepeat();
                console.log(`Exits loop`);
                break;
            }
        }

        // arrayOfQues.push(Num);
        // console.log("Unique random number pushed = " + arrayOfQues);
        return Num;
}

// arrayOfQues.push(getNoRepeat());
        // console.log("Unique random number pushed = " + arrayOfQues);


// get a Suffled queue of question numbers - call suffle function 5 times total = 5 + (default)
function getSuffledArray() {
    
    for(let i=0; i<totalQuesMinus_1; i++) {
        arrayOfQues.push(getNoRepeat());
        console.log("Unique random number pushed = " + arrayOfQues);

    }

}

export function getSuffledQuesList() {

    getSuffledArray();
    return arrayOfQues;
};
