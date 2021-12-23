const title = document.getElementById('title');
const img = document.getElementById('img');

let seizoenen = [
    { 
        "title":"spring",
        "img":"img/spring.jpg",
        "background":"green"
    },
    { 
        "title":"autumn",
        "img":"img/autumn.jpg",
        "background":"orange"
    },
    { 
        "title":"summer",
        "img":"img/summer.jpg",
        "background":"yellow"
    },
    { 
        "title":"winter",
        "img":"img/winter.jpg",
        "background":"grey"
    }
];

function func(x){
    title.innerHTML = seizoenen[x].title;
    img.src = seizoenen[x].img;
    document.body.style.backgroundColor = seizoenen[x].background;
}