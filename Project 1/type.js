const typingSpan = document.querySelector('.typed-text');
const textArray =[
  'RONALDO FREDICK',
  'A DEVELOPER',
  'A FREELANCER',
  'A BLOGGER'
];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 0;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
  if(charIndex < textArray[textArrayIndex].length){
    typingSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }else{
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = textArray[textArrayIndex].slice(0,charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }else{
    textArrayIndex++;
    if(textArrayIndex >= textArray.length)textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}
document.addEventListener(
  'DOMContentLoaded', function(){
    setTimeout(type, newTextDelay + 100);
  }
)