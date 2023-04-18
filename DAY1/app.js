window.addEventListener('keydown', (e)=> {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)// initialises audio to audi key code
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)// initialises audio to audi key code
    
    
    if(!audio) return;  // wont play if the key-code is missing.
    audio.currentTime = 0;
    audio.play(); 
    key.classList.add("playing"); 


});
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition
));