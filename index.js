

function changeColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return 'rgb(' + red + ',' + green + ',' + blue + ')';

}
function changeSpan() {
    let rand = document.getElementById('rand')
    rand.style.color = changeColor();
}

function changeParagraph() {
    let lol= document.getElementById("lol")
    lol.textContent=new Date()
    lol.style.fontSize="8pt"
    lol.style.width="fit-content"
    lol.style.padding="10px"
    lol.style.backgroundColor= changeColor()
    
    
}

setInterval(changeSpan, 1000)
setInterval(changeParagraph, 1000)

let li= document.querySelectorAll('li')

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor="red"
    li[i].style.margin="5px"
    li[0].style.backgroundColor="green"
    li[1].style.backgroundColor="yellow"
    
}