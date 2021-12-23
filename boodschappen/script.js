const veg = document.getElementById('groente');
const fruit = document.getElementById('fruit');

function placeF(x){
    const newElementF = document.createElement('h2');
    newElementF.innerHTML = x;  
    fruit.appendChild(newElementF);  
}
function placeG(y){
    const newElementG = document.createElement('h2');
    newElementG.innerHTML = y;   
    groente.appendChild(newElementG);  
}