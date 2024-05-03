let ftext= document.getElementById('ft');
let stext=document.getElementById('st');
let fpo= document.getElementById('fp');
let spo=document.getElementById('sp');
let img=document.getElementById('imginp');
let maindiv=document.getElementById('main');
function generate(){
    const img=document.createElement('img');
    img.src=img.value;
    img.alt="meme";
    img.style.height="50vh";
    img.style.width="50vw";
    maindiv.appendChild(img)
}
