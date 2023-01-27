const divHashtag = document.getElementById('div-hashtag')
const checkboxes = document.querySelectorAll('.itens')




let hashtags = ['transport', 'olderYears']

function renderRashtags(){
    let content = ''

    for (const hashtag of hashtags) {
        content += `<span style="margin-left: 5px" name="value"># ${hashtag}</span>`
    }
    divHashtag.innerHTML = content

    const spans = document.querySelectorAll('span[name=value]')
    for(const span of spans){
        span.addEventListener('click', spanClick)
    }
}

renderRashtags()

for (const checkbox of checkboxes) {
    checkbox.addEventListener('change', checkboxChange)
}

function checkboxChange(e){
    const checked = e.target.checked
    const name = e.target.name
    console.log(e)
    if(checked){
        hashtags.push(name)
    }else{
        hashtags = hashtags.filter(hashtag => hashtag !== name)
    
    }

    renderRashtags()

}

function spanClick(e){
    const name = e.target.innerText.substring(2)


    hashtags = hashtags.filter(hashtag => hashtag !== name)

    const checkboxesArray = Array.from(checkboxes)
    
    checkboxesArray.find(checkbox => checkbox.name === name).checked = false

    renderRashtags()
}

