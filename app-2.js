function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get text
    let title = newToDoText.value;

    // create new li
    let newLi = document.createElement('li');

    // create new input
    let checkbox = document.createElement('input');

    // set input's type to checkbox
    checkbox.type = "checkbox";

    // set title
    newLi.textContent = title;

    // attach checkbox to li
    newLi.appendChild(checkbox);

    // attach li to ul
    toDoList.appendChild(newLi);

    // empty input
    newToDoText.value = '';

    // create dekete button
    let deleteBtn = document.createElement('button');

    // set button text
    deleteBtn.textContent = "Delete";

    // attach delete button to li
    newLi.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function(event){
    toDoList.removeChild(this.parentElement);
    });
  });
 }

window.onload = function() {
  onReady();
 };
