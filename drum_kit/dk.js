alert("This application is currently functional for " + 
"desktop and laptop use only");

window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop function from running
    audio.currentTime = 0; //rewind to start
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e){
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function clickPlay(){
    const key = this.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    audio.currentTime = 0;
    audio.play();
    this.classList.add('playing');
}

keys.forEach(key => key.addEventListener('click', clickPlay));

