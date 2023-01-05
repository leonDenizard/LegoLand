const slider = document.querySelector('.range');
const price = document.getElementById('price');

price.innerText = slider.value;
slider.oninput = function(){
    price.innerText = this.value;
}

slider.addEventListener('mousemove', function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, #ef233c ${x*0.1}%, #e5e5e5 ${x*0.1}%)`
                
    slider.style.background = color;
    
})