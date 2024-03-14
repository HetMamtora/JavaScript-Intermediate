const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

//SET VALUES
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph(){
    const paragraph = [
    "The only place where success comes before work is in the dictionary",
    "Strive not to be a success, but rather to be of value",
    "Try not to become a man of success, Rather become a man of value",
    "Success is stumbling from failure to failure with no loss of enthusiasm",
    "Don't spend time beating on a wall, hoping to transform it into a door.",
    "It is hard to fail, but it is worse never to have tried to succeed.",
    "If you want to live a happy life, tie it to a goal, not to people or things"
    ];

    const randomIndex = Math.floor(Math.random()*paragraph.length);
    typingText.innerHTML='';
    for(const char of paragraph[randomIndex]){
        console.log(char)
        typingText.innerHTML+=`<span>${char}</span>`;
    }

    typingText.querySelectorAll('span')[0].classList.add('active')

    document.addEventListener('keydown',()=>input.focus());

    typingText.addEventListener("click",()=>{input.focus()});
};

//HANDLE USER INPUT
function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);

    if(charIndex < char.length && timeLeft > 0){

        if(!isTyping){
            timer = setInterval(initTime,1000);
            isTyping = true;
        }

        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
            console.log("correct");
        }
        else{
            mistake++;
            char[charIndex].classList.add('in-correct');
            console.log("in-correct");
        }
        charIndex++;

        char[charIndex].classList.add('active');
        mistakes.innerText = mistake;
        cpm.innerText = charIndex - mistake;
    }
    else{
        clearInterval(timer);
        input.value='';
    }
}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerText = timeLeft;

        let wpmVal = Math.round(((charIndex - mistake)/5)/(maxTime - timeLeft)*60);
        wpm.innerText = wpmVal;
    }
    else{
        clearInterval(timer);
    }
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText = timeLeft;
    input.value='';
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    wpm.innerText=0;
    cpm.innerText=0;
    mistake.innerText=0;
}

input.addEventListener("input",initTyping);
btn.addEventListener("click", reset);
loadParagraph();