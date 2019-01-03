function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push ({
      title: newToDoText.value,
      complete: false
    });
    id++;
    newToDoText.value = '';

    renderTheUI();
  }


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const deleteBtn = document.createElement('btn');
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item) {
        return item.id !== toDo.id;
        renderTheUI();

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
    });
  });
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
});
};
};


window.onload = function() {
  onReady();
};