const body = document.querySelector('body');
const fullScreenButton = document.querySelector('#full-screen')

fullScreenButton.addEventListener('click',()=>{
    if(body.classList.toggle('full-screen')){
        fullScreenButton.innerHTML = '<span class="material-symbols-outlined">close_fullscreen</span>'
    }else{
        fullScreenButton.innerHTML = '<span class="material-symbols-outlined">open_in_full</span>'
    }
})