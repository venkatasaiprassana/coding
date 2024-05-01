
let c = 0;

  function incr ()
{ 
    c++;
    document.getElementById("count").textContent=c;
  if(c%2==0 &&c>=0){
    document.getElementById("eveodd").textContent="Even";

  }
  else{
    document.getElementById("eveodd").textContent="Odd";
  }
   
}
function decr()
{ if (c>0)
    {
        c--;
        document.getElementById("count").textContent=c;
        if(c%2==0)
        document.getElementById("eveodd").innerHTML="Even";
    else
    document.getElementById("eveodd").innerHTML="Odd";
    
    }
        else{
            alert("negative values are not allowed")
        }
    
}
function reset()
{
    c=0;
    document.getElementById("count").textContent=0
   document.getElementById("eveodd").innerHTML="Even"
}
