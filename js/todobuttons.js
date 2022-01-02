//save entered info for TO-DO
document.getElementById("todosave").addEventListener("click", function () {
    var todo = document.getElementById("todo").value;
    localStorage.setItem("todo", todo);
    console.log("Saved To-Do List")
}, false);

//reload last session for TO-DO
document.getElementById("todoreload").addEventListener("click", function () {
    document.getElementById("todo").value = localStorage.getItem("todo");
    console.log("Reloaded To-Do List")
}, false);

//save entered info for COMPLETED
document.getElementById("completedsave").addEventListener("click", function () {
    var completed = document.getElementById("completed").value;
    localStorage.setItem("completed", completed);
    console.log("Saved Completed List")
}, false);

//reload last session for COMPLETED
document.getElementById("completedreload").addEventListener("click", function () {
    document.getElementById("completed").value = localStorage.getItem("completed");
    console.log("Reloaded Completed List")
}, false);