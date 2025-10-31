const element=document.querySelector('.element');
const add=document.querySelector('.add');
const sub=document.querySelector('.sub');
let counter=0;
add.addEventListener('click',()=>{
    counter++;
    element.innerHTML=`counter: ${counter}`;

})
sub.addEventListener('click',()=>{
    counter--;
    element.innerHTML=`counter: ${counter}`;

})



