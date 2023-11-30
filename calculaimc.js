const calcular = document.getElementById("calcular");

calcular.addEventListener("click", function somaimc(){
    const numero1 = Number(document.getElementById("num1").value);
    const numero2 = Number(document.getElementById("num2").value);
    const total = document.getElementById("total");
    let valorimc = (numero1/ (numero2 * numero2)).toFixed(2);  
    total.textContent = valorimc;  
}) 

        
       