const slider = document.querySelector('.range');

slider.addEventListener('mousemove', function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, #ef233c ${x}%, #e5e5e5 ${x}%)`
                
    slider.style.background = color;
    
})