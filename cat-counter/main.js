const catBtn = document.getElementsByClassName('btn-cat-counter')[0]
const saveBtn = document.getElementsByClassName('btn-save-count')[0]
const catContainer = document.getElementsByClassName('cat-box')[0]
const meow = new Audio('./audio/meow.wav')
const cnt = document.getElementById('count')
const result = document.createElement('h2')


saveBtn.addEventListener('click', ()=>{
    const saved = cnt.textContent
    result.id = 'result'
    result.textContent = `You have counted ${saved} kittens!`
    document.body.appendChild(result)
    cnt.textContent = 0

})

catBtn.addEventListener("click", ()=>{
    result.remove()
    const cat = document.createElement("img")
    cat.src = "img/catHopping.gif"
    cat.className = "kitten"
    catContainer.prepend(cat)
    meow.currentTime = 0.1
    meow.play()
    cnt.textContent++
})


