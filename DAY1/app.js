window.addEventListener('keydown', (e)=> {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)// initialises audio to audi key code
    if(!audio) return;  // wont play if the key-code is missing.
    audio.play(); 
});