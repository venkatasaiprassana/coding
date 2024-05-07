const foods=[
    {
        "title": "Idly",
        "price":"50/-",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSz-mCzieZGvtrFvVcGlnlIOZE6QGPuqFjfw&usqp=CAU",
        "originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
    },
    {
        "title": "Dosa",
        "price":"40/-",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zAscgoUVR9LOctziUouS8ieX8UIlcwtu-PVVrluZ8C1GySBI_TIN9b0YSIBi325LvDU&usqp=CAU",
        "originalURL": "http://www.food.com/recipe/roasted-asparagus-50847"
    },
    {
        "title": "Poori",
        "price":"50/-",
        "imageURL": "https://www.cookingcurries.com/wp-content/uploads/2020/04/Aloo-Rasedar-No-Onion-No-Garlic-Potato-Curry-11-of-12.jpg",
    },
    {
        "title": "Onion Uttapam",
        "price":"80/-",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzr_CTLdeKOmmm9Y_X4EXvE4GgH1a-63S-T8xPRflclh0s6GEkI1EymmrTz8d_lN5y0P8&usqp=CAU"
    },
    {
        "title": "Oats Appe",
        "price":"60/-",
        "imageURL": "https://st2.depositphotos.com/5653638/11922/i/450/depositphotos_119221566-stock-photo-south-indian-popular-food-appe.jpg",
        
    },
    {
        "title": "Pongal",
        "price":"40/-",
        "imageURL": "https://www.indianveggiedelight.com/wp-content/uploads/2022/10/ven-pongal.jpg",
        "originalURL": "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg"
    },
    {
        "title": "Sambar Vada",
        "price":"60/-",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhSehhFOhl4f1XXvhb-7wE83baJtnTskdGhXym2IGuQHxAnmxSdvvIfcv2QMSK7KOWwk&usqp=CAU",
        "originalURL": "#"
    },
    {
        "title": "Masala Dosa",
        "price":"70/-",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZAyu-7mzRVr8J9rjPobQFRD6oOri2aYQLA&usqp=CAU",
        "originalURL": "http://www.canadianliving.com/food/blueberry_oatmeal_squares.php"
    },
    {
        "title":"Kichadi",
        "price":"100/-",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAnlC-EzwP35x3mtTfuTVmnN0smH_68d0_A&usqp=CAU",
        "originalURL": "http://www.chatelaine.com/recipe/stovetop-cooking-method/curried-chicken-salad/"
    }
]
//json data
console.log(foods)
console.log(foods.length)
const maindiv=document.getElementById('food')
function displaydata(){
    foods.forEach(
        function(food){
            
            const title=document.createElement('h2')
            title.textContent=food.title
            const pic=document.createElement('img');
            pic.src=food.imageURL;
            pic.alt=food.title;
            pic.style.height="30vh";
            pic.style.width="20vw";
            pic.style.paddingTop="10px";
            
           const price=document.createElement("p")
           price.textContent=food.price
           price.style.fontSize="xx-large"

           const btn=document.createElement('button')
           btn.textContent="❤️"
           btn.addEventListener('click',incr)

           const but=document.createElement('button')
           but.textContent="Remove"
           but.addEventListener('click',decr)

           const btn2=document.createElement('button')
            btn2.textContent="open"
            btn2,addEventListener('click',openmodel)

           const indiv = document.createElement("div")
           indiv.classList.add("indiv");
           indiv.append(price,btn,but,btn2)
       
           const fooddiv=document.createElement('div')
           fooddiv.append(pic,title,indiv)
            fooddiv.classList.add('class')
            maindiv.appendChild(fooddiv)
        }
    )
}
displaydata()
const count=document.getElementById('count');
let c = 0;

  function incr ()
{ 
    c++;
    document.getElementById("count").textContent=c;
  if(c>=0){
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

function openmodel(){
document.getElementsByClassName("modal")[0].classList.remove("hidden")
}

document.getElementById('cl').addEventListener('click',closemodal)

function closemodal()
{
   document.getElementsByClassName("modal")[0].classList.add("hidden")

}