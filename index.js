const input = document.getElementById('input');
const btn = document.getElementById("btn");
const wrng = document.getElementById('wrng');
const guess = document.getElementById('guess');


btn.addEventListener('click' , () => {
    guessNumber();
})

let number = Math.floor(Math.random()*100)+1;
let numberguess = 0;
 

function guessNumber(){
     if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML = "enter a valid number";
    }else{
        numberguess++;
        guess.innerHTML = 'No of guess:' +numberguess;
        if(input.value > number){
            wrng.innerHTML = 'you guessed too high';
            input.value ="";
        }else if(input.value < number){
            wrng.innerHTML = 'you guessed too low'
            input.value = "";
        }else{
           wrng.innerHTML = 'Congratulation !!! you guessed correct number';
           setTimeout(()=>{
            resetGame();
           }, 5000)
        }
    }
    function resetGame(){
        numberguess=0;
        number = Math.floor(Math.random()*100)+1;
        input.value = "";
        guess.innerHTML = 'No. of gusses : 0';
        wrng.innerHTML = "";
    }
}