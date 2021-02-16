/*===========================
<|-Variables              -|>
===========================*/
let text = document.getElementById('text');
let button = document.getElementById('button');

// Event To Catch The Click And Execute The Function.
button.addEventListener('click', () => {
    read(text.value);
});

// Function To Reproduce The Text.
const read =  (text) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}