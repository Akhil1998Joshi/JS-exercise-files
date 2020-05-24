// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)

var removeAllButton =  document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllItem)

function addItem()
{
    var input = document.getElementById('input');
    var item = input.value ;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);


    if(item === ' '){
        // add a p tag and assign a value of "Enter your todo"
        var p = document.createElement('p');
        p.textContent = "Enter your todo";
        document.getElementById("input").after(p.textContent);
        return false;
    }
    else{
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        //create label

        var label = document.createElement('label');
        label.setAttribute('for','item') //optional

        // add these elements on webpage

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);

        ul.insertBefore(li,ul.childNodes[0]);
        

        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.value = '';
    }
}

function removeItem()
{
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        
        while (li[index] && li[index].children[0].checked) {

            ul.removeChild(li[index]);
            
        }
        
    }
}

function removeAllItem()
{
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        
        ul.remove(li[index]);
        
    }
}