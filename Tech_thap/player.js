let index = 4;

let heading = document.querySelector('h1').addEventListener('click',()=>{
    let heading1 = document.getElementById('hamza');
    heading1.innerHTML = arr[index];
//    for forward traversing
    // index = (index + 1) % arr.length;   
// for backward traversing 
    //  index = (index - 1 + arr.length) % arr.length;
});



let arr = ['apple', 'grapes' , 'Banana' , 'Oranges', 'Mango'];

