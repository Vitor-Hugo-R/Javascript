let div = document.getElementById("novatag");
function creatUl(){
  
    return `	
    <ul>
    <li>Arroz</li>
    <li>Feijão</li>
    <li>Batata</li>
    <li>Picanha</li>
    <li>Refrigerante</li>
    <li>Salada</li>
   </ul>
   `

}
div.innerHTML = creatUl()