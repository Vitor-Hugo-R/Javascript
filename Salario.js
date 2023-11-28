////

function aliquota(salario){ 

let percentual;
if (salario >= 0.00 && salario<= 1100.00) {
    return percentual = 0.05;
} else if (salario >= 1100.01 && salario < 2500.00) {
   return percentual = 0.1;
} else {
   return percentual = 0.15;
}
}
const salariobruto = 3000.00;
const beneficio = 400.00;

const imposto = (salariobruto * aliquota(salariobruto));
const valortotal = (salariobruto - imposto) + beneficio;

console.log(valortotal);

