let inp=document.getElementById('input')
let ftext= document.getElementById('ft');
let stext=document.getElementById('st');
let fpo= document.getElementById('fp');
let spo=document.getElementById('sp');
let imag=document.getElementById('imginp');
let maindiv=document.getElementById('main');
function generate(){
  /* const mydiv=document.createElement('div')
    const img=document.createElement('img');
    img.src=imag.value;
    img.alt="meme";
    img.style.height="20vh";
    img.style.width="10vw";
    const para1=document.createElement('p');
    para1.textContent=ftext.value;
    const para2=document.createElement('p2');
    para2.textContent=stext.value;
    maindiv.appendChild(mydiv);
        mydiv.append(img,para2);*/

maindiv.style.backgroundImage=`url(${imag.value})`;
maindiv.style.backgroundSize="cover";
const para1=document.createElement('h2');
para1.textContent=ftext.value;
para1.style.textAlign=fpo.value;
para1.style.fontsize="larger";
para1.style.fontWeight="900";
para1.style.color="black";

const para2=document.createElement('h2');
para2.textContent=stext.value;
para2.style.textAlign=spo.value;
para2.style.fontsize="larger";
para2.style.fontWeight="900";
para2.style.color="black";

maindiv.append(para1,para2);
 
 imag.value="";
 ftext.value="";
 stext.value="";
 fpo.value="";
 spo.value="";
 generate.value="";
  
}
//function onChangeHandler(val){
  //console.log(val)
//}





