
let count = 0;
let num = 0 ;
const optionNum = document.querySelectorAll("label");


export function checkedAns(optionSelected) {

    count = 0;

    let ans;

    optionSelected.forEach((option) => {

        if (option.checked) {

            ans = option.id;

            num = count;// for animation - local variable
            // console.log("count is " + count + " num is " + num);
        }

        count++;
    });


    return ans;// for main logic - exports to check quiz ans

}


export function correctAnswer() {


    optionNum[num].classList.add("rightc");

    setTimeout(() => {

        optionNum[num].classList.remove("rightc");
    }, 1400);

}

export function wrongAnswer() {

    optionNum[num].classList.add("wrongc");

    setTimeout(() => {
        optionNum[num].classList.remove("wrongc");
    }, 1400);

}




