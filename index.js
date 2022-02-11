
var btn = document.getElementById('insert-text-btn');

btn.onclick = function() {
  var text_input = document.getElementById('insert-text-input')
  var text_value = text_input.value
  var paragraph = document.createElement('p')
  paragraph.style.marginLeft = "2%";
  paragraph.textContent = text_value;
  var list_container = document.getElementById("list-container")

   // creates item list element
   var new_list_item = document.createElement('li')
   new_list_item.id = 'item'
   new_list_item.className = 'list-group-item list-group-item-actio'
   new_list_item.style.display = "flex"
   

    // creates checkbox  
  var delete_item_input = document.createElement('input')
  delete_item_input.type = 'checkbox'
  delete_item_input.className = 'form-check-input me-1' 
  new_list_item.appendChild(delete_item_input)
  
  new_list_item.appendChild(paragraph);
   
  //TODO: fix list-items-elements //
   

 // creates button delete
 var btn_delete = document.createElement("button");
 btn_delete.style.marginLeft = "14px"; 
 btn_delete.className = "btn btn-outline-light bi ";
 btn_delete.style.width = "20px";
 btn_delete.style.height = "22px";
 btn_delete.style.borderColor = "pink";
 btn_delete.innerText = "X";
 btn_delete.style.fontSize = "10px"; 

 var ul_component = document.querySelector("ul")

 var i_element = document.createElement("i");
 i_element.className = "glyphicon glyphicon-trash"
 btn_delete.appendChild(i_element)

 new_list_item.appendChild(btn_delete)


 btn_delete.onclick = function remove_child() {
  var list = document.getElementById('item');
  var item_item = ul_component.lastElementChild;
  list.remove(item_item);
  }


  list_container.appendChild(new_list_item)
}


 
    

    
