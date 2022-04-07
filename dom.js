let $ =(Selector)=>{
    return document.querySelector(Selector)
}

let nameFiled = $('#nameField');
let ul = $('#nameList');


nameFiled.addEventListener('keypress',(event)=>{
    if(event.keyCode === 13){
        let name = event.target.value;
        creatLi(ul,name);
       event.target.value = '';
    }
})

function creatLi(ul,name){
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex';
    li.innerHTML = name;



    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.className = 'ml-auto';
    span.style.color = 'red';
    span.style.cursor = 'pointer';
    span.addEventListener('click',()=>{
        ul.removeChild(li);
        
    })

    li.appendChild(span);
    ul.appendChild(li);
    // console.log(li);
   
    // return li
}