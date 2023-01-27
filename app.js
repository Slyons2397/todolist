const addItemBtn = document.getElementById("addItem");
const task = document.getElementById("task");
const name = document.getElementById("name");
const taskList = document.getElementById("taskList");
const pageContainer = document.getElementById("pageContainer");

addItemBtn.addEventListener("click", () => {
  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger ml-5";
  delBtn.innerText = "Delete";
  if (task.value === "" || name.value === "") {
    const noValue = document.createElement("div");
    noValue.className = "alert alert-danger";
    noValue.textContent = "You must enter values!";
    pageContainer.appendChild(noValue);
    setTimeout(() => {
      pageContainer.removeChild(noValue);
    }, 5000);
  } else {
    const newItem = document.createElement("li");
    newItem.className = "mt-3 list-group-item";
    newItem.textContent = `Task: ${task.value} - Assigned to: ${name.value}`;
    newItem.appendChild(delBtn);

    taskList.appendChild(newItem);
    delBtn.addEventListener("click", () => {
      taskList.removeChild(newItem);
    });
    task.value = "";
    name.value = "";
  }
});
