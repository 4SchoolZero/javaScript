let imges = [
    "source/painting0.jpg", 
    "source/painting1.jpg", 
    "source/painting2.jpg", 
    "source/painting3.jpg", 
    "source/painting4.jpg", 
    "source/painting5.jpg"
];
let texts = [
    "", 
    "De rode wijngaard november 1888 Pesjkinmuseum Moskouw", 
    "De sterrennacht juni 1889 Museum of Modern Art New York", 
    "Sterrennacht boven de Rh�ne september 1888 Mus�e d'Orsay Parijs", 
    "Zonnebloemen januari 1889 Neue Pinakothek Munchen", 
    "Boerderij in de Provence september 1888 National Gallery of Art Washington D.C."
];
x = 0;

function changeIMG(){
    if(x >= 5){
        x = 0;
    }
    x++;
    document.getElementById("textImg").innerHTML = texts[x];
    document.getElementById("pic").src = imges[x];
    console.log(x);
}
function changeIMGd(){
    if(x == 0){
        x = 6;
    }
    x--;
    document.getElementById("textImg").innerHTML = texts[x];
    document.getElementById("pic").src = imges[x];
    console.log(x);
}
