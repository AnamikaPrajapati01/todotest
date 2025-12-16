

let task = []
function getDataFromHtml(event) {
    event.preventDefault()
    let task = event.target.task.value
    task.push(task)
    displayTasks()
}

function displayTasks() {
    let ul = document.getElementById("task-list")
    let string = ""
    task.forEach((el) => {
        string += `<li>${el}</li>`
    })
    ul.innerHTML = string
}