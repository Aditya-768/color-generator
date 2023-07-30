const generate = document.getElementById("generate")
const body = document.querySelector("body")
const colorcode = document.getElementById("color")
const copy = document.getElementById("copy")
const code = '0123456789abcdef'
let hexCode

function generateColor(){
    let fullCode = '#'
    for(i=0; i<6; i++){
        fullCode += code[Math.floor(Math.random() * 16)]
    }
    hexCode  = fullCode
    body.style.backgroundColor = hexCode;
    colorcode.textContent = hexCode
   
}
generateColor()
generate.addEventListener("click", generateColor)
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(hexCode)
})