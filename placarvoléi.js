const placarb = document.getElementById("placarmaisb");
let pontotimeB = 0;
let pontotimeI = 0;

placarb.addEventListener("click", function (){
const pontob = document.getElementById("pontotime1");
pontotimeB++;
pontob.innerHTML = pontotimeB;
})
placarb.addEventListener("click", function (){
    const pontob = document.getElementById("pontotime1");
    pontotimeB--;
    pontob.innerHTML = pontotimeB;
    if (pontotimeB < 0) {
        pontotimeB = 0;
    }
    pontob.innerHTML = pontotimeB;
    
})