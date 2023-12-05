// add adicona e não tira - Toggle ele coloca e tira se já tiver a class
let btn = document.getElementById("botao");
let btn1 = document.getElementById("botao2");

btn.addEventListener("click", function(){
    let div = document.getElementById("titulo");
    div.classList.toggle("verde");
})

btn1.addEventListener("click", function(){
    let div1 = document.getElementById("titulo1");
    if(div1.classList.contains("azul")){
        div1.classList.remove("azul");
    } else {
        div1.classList.add("azul");
    }
})