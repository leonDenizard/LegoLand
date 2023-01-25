const divHashtag = document.getElementById('div-hashtag')
const labelText = document.querySelectorAll('label')
const span = document.querySelectorAll('.hashtag > span')


function retornaTexto(){
    for(let label of labelText){
        let texto = label.innerText.replace('(44)', '').trim()
        label.addEventListener('click', function(){
           criaSpan(texto) 
           console.log(span)
        })
    }
}

retornaTexto()

function criaSpan(texto){
    const span = document.createElement('span')
    span.innerText= `# ${texto}`
    span.style.marginRight = '5px'
    divHashtag.appendChild(span)
}

