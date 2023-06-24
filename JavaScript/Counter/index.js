let countEl= document.getElementById("counter")   //here we get the element that only finds the count   

let count = 0;

function increment(){    //here the increment count is from the onclick attribute of the button tag 
      
    count = count + 1 ;
    countEl.innerText = count ;      
}


function save(){        //here the save functions logsout and shows us the count.

     console.log(count);
     alert(count);
 
}