const incBtn = document.getElementById("inc-btn");
const decBtn = document.getElementById("dec-btn");
const val = document.getElementById("content-val");
decBtn.disabled = true;
incBtn.addEventListener("click", function(){
    console.log(parseInt(val.innerText)+1);    
    if(val.innerText < 10){
        val.innerText = parseInt(val.innerText)+1;
        incBtn.disabled = false; 
        decBtn.disabled = false; 
    }
    if(val.innerText == 10){
        incBtn.disabled = true;
    }
    
})
decBtn.addEventListener("click", function(){
    console.log(parseInt(val.innerText)-1);
    if(val.innerText >=2 ){
        val.innerText = parseInt(val.innerText)-1;
    }
    if(val.innerText == 1){
        decBtn.disabled = true;
    }
    if(val.innerText <10 ){
        incBtn.disabled = false; 
    }
    // else{
    //     decBtn.disabled = true;
    // }
    // if(val.innerText >=2){
    //     decBtn.disabled = false; 
    // }
})

const colorBtn = document.getElementById("change-clr");
colorBtn.addEventListener("click", function(){
    let random1 = parseInt(Math.random() * 255);
    let random2 = parseInt(Math.random() * 255);
    let random3 = parseInt(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
    // console.log(parseInt(Math.random() * 255));
})

