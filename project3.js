const clock = document.getElementById('clock')
let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
    
    // console.log(date.toLocaleTimeString());
    clock.textContent = date.toLocaleTimeString();
} ,1000);