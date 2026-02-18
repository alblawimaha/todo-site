function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;

    if (taskText === '') return; // Don't add empty tasks

    const li = document.createElement('li');
    li.innerHTML = taskText;
    
    // Toggle the 'checked' class when clicked
    li.onclick = function() {
        this.classList.toggle('checked');
    };

    document.getElementById('taskList').appendChild(li);
    input.value = ''; // Clear input field
}