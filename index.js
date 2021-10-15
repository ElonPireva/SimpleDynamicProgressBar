const child = document.querySelector(".child");
const h1 = document.getElementById("h1");

let putWidth = 0; // starts from 0
function setWidth(){
    putWidth++; //increases for 1 when calling function from interval
    if(putWidth <= 100){ // comparing if putWidth is less or equal to 100
        h1.style.width = putWidth + "%"; // if condition is true then width will increase for 1 everytime function is called and we are appending %
        h1.innerHTML = "Loading..." + putWidth + "%"; // Showing an text including current number of putWidth var just to make it more interesting
    }
    if(putWidth > 100){ // checking if putWidth has reached 100 , so if yes then comparing 100 > 100 false and it will show some text, it means has finished
        h1.innerHTML = 'Succesful'; // showing succesful text
        h1.style.textAlign = 'center'; // aligning text on center
    } 
}

setInterval(() => { // this is Interval which is called every 200 milliSeconds. It never stops but we put a condition there so it does..
    setWidth(); // calling the setWidth function inside setInterval every 200 milliSeconds...
},200); // time to call the function...

// Is important to know for this thing to work we have to put a 0px Width on the element , in this case at heading1.