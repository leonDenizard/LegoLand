const divHashtag = document.getElementById('div-hashtag')
const labelText = document.querySelectorAll('label')
const span = document.querySelectorAll('.hashtag > span')
const itemCheckBox = document.querySelectorAll('.itens')


// for (const iterator of itemCheckBox) {
//     var labelArray = []
//     labelArray.push(iterator.attributes.name.nodeValue)
//     console.log(labelArray[0].attributes)
    
// }


function checkedBox(){
    for (const iterator of itemCheckBox) {
        let labelArray = []
        labelArray.push(iterator.attributes.name.nodeValue)
        

        iterator.addEventListener('click', ()=>{
            
            if(iterator.checked === true){
                criaSpan(labelArray[0])
                
            }else if(iterator.checked === false){
                removeSpan()
            }
            
            
        })
    
    }
}

checkedBox()

// function retornaTexto(){
//     for(let label of labelText){
//         let texto = label.innerText.replace('(44)', '').trim()
//         label.addEventListener('click', function(){
//             criaSpan(texto) 
//         })
//     }
// }

// retornaTexto()

function criaSpan(texto){
    const span = document.createElement('span')
    span.innerText= `# ${texto}`
    span.style.marginRight = '5px'
    span.setAttribute('name', 'value')
    divHashtag.appendChild(span)
}

function removeSpan(){
    console.log(divHashtag)

    const span = document.querySelector('span[name=value]')

    
    divHashtag.removeChild(span)
    
}
