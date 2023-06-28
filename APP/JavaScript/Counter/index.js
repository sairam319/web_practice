let countEl= document.getElementById("counter");  // we get the element that only finds the count   

let saveEl = document.getElementById("save-el");  // saving the content in paragraph tag with id save-el

let count = 0;

function increment(){    // the increment count is from the onclick attribute of the button tag 
      
    count += 1 ;         //on clicking the increment the count get incremented by 1
    countEl.textContent = count ;  // the count will be added to inner text so that it get displayed
}


function save(){        //here the save functions logsout and shows us the count.
    
     let countStr = count + " - ";   // count along with seperator is assigned to variable 
     saveEl.textContent += countStr; //rendering variable in saveEl using innertext 
     countEl.textContent = 0;  // setting up the count to 0
     count = 0;
}





