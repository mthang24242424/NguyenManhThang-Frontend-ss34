let input = document.getElementById("taskInput");
let addButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
window.onload = function () {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(task => {
        createTask(task);
    });
};
function addTask() {
    let task = input.value.trim();
    if (task) {
        createTask(task);
        save(task);
        input.value = "";
    }
}
function createTask(task) {
    let listItem = document.createElement("li");
    listItem.textContent = task;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.onclick = () => {
        taskList.removeChild(listItem);
        removeTask(task);
    };
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}
function save(task) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
}
function removeTask(task) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let updatedTasks = storedTasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
addButton.addEventListener("click", addTask);
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});