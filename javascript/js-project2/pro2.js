let colorselect= document.getElementById("color-select");
let body= document.body;
let btntext=document.getElementById('btn');
/*colorselect.addEventListener('change', function() {
  const selectedColor = this.value;
  body.style.backgroundColor = selectedColor;
});*/


function change(){

  const selectedcolor=colorselect.value;
  document.body.style.backgroundColor= selectedcolor;

}
function changemode()
{
  document.body.classList.toggle('dark')
   
  if(btntext.textContent == "light")
  {
    btn.textContent= "dark";
  }
  else{
    btn.textcontent= "light"
  }

}


