// console.log('\'Allo \'Allo!');
document.getElementById('add-input').addEventListener('keyup',(e)=>{
    if(e.code == 'Enter'){
        addTodo();
    }
});
document.getElementById('completed-btn').addEventListener('click',showCompleted);
document.getElementById('active-btn').addEventListener('click',showActive);
document.getElementById('all-btn').addEventListener('click',showAll);
document.getElementById('btn-clear').addEventListener('click',clearAll);
document.getElementById('selectAll-btn').addEventListener('click',(e)=>{
    selectAll(e);
});

function removeClass(className){
    let ele = document.querySelectorAll('.'+className);
    ele.forEach(function(e){
        e.classList.remove('selected')
    });
}

function addClass(id,className){
    let ele = document.querySelector('#'+id);
    ele.classList.add(className);
}

function addTodo(){
   let input = document.getElementById('add-input').value;
    if(input.length > 0){
        // then add task 
        let li = document.createElement('li');
        let text = document.createTextNode(input);
        let field = document.createElement('input');
        let btn = document.createElement('button');
        let div = document.createElement('div');

        field.type = 'checkbox';
        btn.innerHTML = 'X';
        btn.setAttribute('onclick','removeTodo(this)');
        let date = new Date; 
        div.appendChild(text);
        let UID = date.getFullYear()+''+date.getMonth()+''+date.getDay()+''+date.getHours()+''+date.getMilliseconds();
        li.setAttribute('data-id',UID);
        li.classList.add('list-item')
        field.setAttribute('onchange','updateTodo(this)');
        li.appendChild(field);
        li.appendChild(div);
        li.appendChild(btn);
        document.getElementById('menu').appendChild(li);
    }else{
        // display an error msg
    }

    getNoItems();
}

function updateTodo(e){
    if(e.checked){
        e.parentNode.classList.add('completed');
    }else{
        e.parentNode.classList.remove('completed');
    }
}
function showAll(){
    removeClass('selected');
    addClass('all-btn','selected');

    let li = document.getElementsByTagName('li');
    for (var i=0;i<li.length;i+=1){
        li[i].style.display = 'flex';
      }
    getNoItems();
}
function showActive(){
    removeClass('selected');
    addClass('active-btn','selected');
    let li = document.getElementsByTagName('li');
    let elems = document.getElementsByClassName('completed');
    for (var i=0;i<li.length;i+=1){
        li[i].style.display = 'flex';
      }
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
      }
      getNoItems();
}
function showCompleted(){
    removeClass('selected');
    addClass('completed-btn','selected');
    // let menu = document.getElementById('menu').childNodes;
    // // console.log(menu);
    // for (let x of menu) {
    //     // if(x.className != 'completed'){
    //     //     x.style.display = "";
    //     // }
    //     console.log(x);
    // }
    let li = document.getElementsByTagName('li');
    let elems = document.getElementsByClassName('completed');
    for (var i=0;i<li.length;i+=1){
        li[i].style.display = 'none';
      }
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'flex';
      }
      getNoItems();
}
function removeTodo(e){
    e.parentNode.remove();
    getNoItems();
}
function getNoItems(){
    let x =0;
    let menu = document.getElementById('menu').childNodes;
    let li = document.getElementsByTagName('li');
    for (var i=0;i<li.length;i+=1){
      if(li[i].style.display == 'none'){
          x++;
      }
    }
    x = menu.length - x;
    if(x>1){
        document.getElementById('no-itm').innerText = x + ' Items';
    }else{
        document.getElementById('no-itm').innerText = x + ' Item';
    }
   
}
function clearAll(){
    removeClass('selected');
    addClass('btn-clear','selected');
    let li = document.getElementsByClassName('completed');
    for (var i=li.length-1;i>=0;i--){
        console.log(li[i]);
        li[i].remove();
       
    }
   
      getNoItems();
}
function selectAll(e){

    const menu = document.querySelectorAll('.list-item');
    const checkbox = e.target.checked ? true : false;

    if(e.target.checked){
        menu.forEach((a)=>{
            a.classList.add('completed');
            const box = a.getElementsByTagName('input')[0];
            box.checked = checkbox;
        })
    }else{
        menu.forEach((a)=>{
            a.classList.remove('completed');
            const box = a.getElementsByTagName('input')[0];
            box.checked = checkbox;
        })
    }
    // let a = e.target.checked ? 'c':'b';
    // console.log(a);
}





