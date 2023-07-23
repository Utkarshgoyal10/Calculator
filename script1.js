let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>
{
  button.addEventListener('click', (e)=>
  {
    try{
    if(e.target.innerHTML == '='){
        if(string=="")
        string=0;
      else
      string = eval(string);
      
      document.querySelector('input').value = string;
      
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'Del'){
        console.log(e.target)
        string = string.slice(0,-1);
        document.querySelector('input').value = string;
      }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
            }
        }catch(err){
            alert("invalid");
            string=0;
            document.querySelector('input').value = string;

        }
    })
})