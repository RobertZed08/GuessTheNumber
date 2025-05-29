const minNum = 1;
const maxNum =100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true;
let guess;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("You entered an invalid number !");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("You entered an invalid number !");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too low , try again`);
        }
        else if(guess > answer){
            window.alert(`too high, try again`);
        }
        else{
            window.alert(`You got it ,the answer was ${answer}, it took you ${attempts} attempts but you got it :))`);
            running = false;
        }
    }
}