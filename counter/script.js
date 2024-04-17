let dec = document.querySelector(".neg");
// console.log(dec);
let reset = document.querySelector(".reset");
let inc = document.querySelector('.pos');
let show = document.querySelector('#counter');
// console.log(show);
let count = show.innerHTML;
console.log(count)

dec.addEventListener("click",()=>{
count--;
show.innerHTML=count;
if(count<0){
    show.style.color="red";
}
});

reset.addEventListener("click",()=>{
    count=0;
    show.innerHTML=count;
    if(count===0){
        show.style.color="black"
    }
});

inc.addEventListener("click",()=>{
count++;
show.innerHTML=count;
if(count>0){
    show.style.color="green"
}
});