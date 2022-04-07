let $ =(Selector)=>{
    return document.querySelector(Selector)
}

let nameFiled = $('#nameField');
let ul = $('#nameList');


nameFiled.addEventListener('keypress',function(event){
    if(event.keyCode === 13){
        let name = event.target.value;
        ul.appendChild(creatLi(name));
       event.target.value = '';
    }
})

function creatLi(name){
    let li = document.createElement('li');
    li.className = 'list-group-item my-1';
    li.innerHTML = name;
    return li;
}