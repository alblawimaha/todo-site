// Display today's date
const options = { weekday: 'long', month: 'long', day: 'numeric' };
document.getElementById('date-display').innerHTML = new Date().toLocaleDateString(undefined, options);

function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (input.value.trim() === "") return;

    const li = document.createElement('li');
    li.textContent = input.value;
    
    li.onclick = function() {
        this.classList.toggle('checked');
    };

    // Add to top of list
    taskList.insertBefore(li, taskList.firstChild);
    input.value = "";
}

// Allow pressing "Enter" key to add
document.getElementById('taskInput').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});