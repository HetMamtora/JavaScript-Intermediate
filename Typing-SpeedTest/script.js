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
};

//HANDLE USER INPUT
function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);

    if(charIndex < char.length && timeLeft > 0){
        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
            console.log("correct");
        }
        else{
            char[charIndex].classList.add('in-correct');
            console.log("in-correct");
        }
        charIndex++;
    }
    else{

    }
}

input.addEventListener("input",initTyping);
loadParagraph();