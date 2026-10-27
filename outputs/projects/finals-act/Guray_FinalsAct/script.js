console.log(document)

const var1= document.getElementById("aaa")
console.log(var1)

const div1 = document.getElementById("div1")
console.log(div1)

const Button = document.getElementById("btn1")
console.log(Button)

const image = document.getElementById("Image")
console.log(image)

const Input = document.getElementById("input")
console.log(Input)

const dbclick = document.getElementById("dbclick")
console.log(dbclick)

const year = document.getElementById("Year")
console.log(year)

Button.addEventListener(
    "click", function() {
        var1.innerhtml = "WOWW"
    }
)
Input.addEventListener(
    "change", function () {
        var1.innerHTML = 
        "Hello pu " + Input.value + "!" 
    }
)

Input.addEventListener(
    "focus", function () {
        Input.style.backgroundColor = "rgb(251, 255, 226)"
        div1.innerHTML = "Input is Active."
    }
)

Input.addEventListener(
    "blur", function () {
        Input.style.backgroundColor = "white"
        div1.innerHTML = "Input is noo longer active."
    }
)

dbclick.addEventListener(
    "dblclick", function () {
        haha.style.color = "#006dcc"
    }
)

image.addEventListener(
    "mouseover", function (){
        div1.innerHTML = "Your mouse reach the image"
        image.style.transform = "scale(1.1)"
    }
)

image.addEventListener(
    "mouseleave", function (){
        div1.innerHTML = "Your mouse left the image"
        image.style.transform = "scale(1)"
    }
)


Year.addEventListener(
    "change", function (){
        div1.innerHTML = "You Select"
    }
)