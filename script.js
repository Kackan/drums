
window.addEventListener('keydown',(e)=>{
    let keyValue=e.key;
    const audio=document.querySelector(`audio[data-key=${keyValue}]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();

    const key=document.querySelector(`div[data-key=${keyValue}]`)
    key.classList.add('playing');
    
})


const keyList =Array.from(document.getElementsByClassName('key'));
keyList.forEach(key=>{key.addEventListener('transitionend',removeClass)});

function removeClass(e)
{
    if(e.propertyName !=='transform') return;
    this.classList.remove('playing');
}