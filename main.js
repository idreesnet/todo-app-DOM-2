function addTodo(){
    var todo = document.getElementById("todo");
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var text = document.createTextNode(todo.value);
    li.appendChild(text);
    var delButton = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delButton.appendChild(delText);
    delButton.setAttribute("onclick", "delTodo()");
    var editButton = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editButton.setAttribute("onclick", "editTodo()");

    editButton.appendChild(editText);
    li.appendChild(delButton);
    li.appendChild(editButton);
    // list.appendChild(li);
    list.prepend(li);
    console.log(li);
    todo.value = ""; 
    
}

function delTodo(){
    event.target.parentNode.remove();
}

function editTodo(){
    var oldValue = event.target.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter updated value", oldValue);
    event.target.parentNode.firstChild.nodeValue = editValue;

    console.log(editValue);  
}

function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";

}