function imc(peso, altura){
    let valorimc = (peso / (altura * altura));    
    if (valorimc < 18.5) 
        return 'Abaixo do peso';
    else if (valorimc >= 18.5 && valorimc < 25)
        return'Peso normal';
     else if (valorimc >= 25 && valorimc < 30) 
        return 'Acima do peso';
     else if (valorimc >= 30 && valorimc < 40)
        return 'Obeso';
     else
        return 'Obesidade grave';
}

console.log(imc(84, 1.71));