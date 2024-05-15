const maindiv=document.getElementById('main')



function fetchdata ()
{
   fetch('https://fakestoreapi.com/products')
   .then(function(res) {return res.json()})
   .then(function(data){displaydata(data)})
   .catch(function(err){console.log(err)})
}

fetchdata();
function displaydata(data)
{
    data.forEach(function (pro){
        const mydiv=document.createElement('div')
        mydiv.classList.add("product")
        const image =document.createElement('img')
        image.src= pro.image
        image.alt=pro.title
        const h2 =document.createElement('h3');
        h2.textContent=pro.title;  

        const btn=document.createElement('button')
        btn.textContent="🛒" +"❤️"
        btn.addEventListener('click' ,incr);

        const btn1=document.createElement('button')
        btn1.textContent="Remove"
        btn1.addEventListener('click',decr);
    
       const div =document.createElement('div')
       div.classList.add('div')
       div.append(btn,btn1)

        const price=document.createElement('p')
        price.textContent="$"+pro.price
        mydiv.append(image,h2,price,div)
        maindiv.appendChild(mydiv)
    })

}

const count=document.getElementById('count');
let c = 0;

function incr ()
{ 
    c++;
    document.getElementById("count").textContent=c;
   
    if(c>=0)
    {
    count.textContent=c;
 
}
  else{
    count.textContent=0;
 
}

}

function decr()
{ if (c>0)
    {
      c--;
      count.textContent=c;
      }
      else{
         alert("No items selected")
     }
}

