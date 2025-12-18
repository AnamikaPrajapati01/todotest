let Tasks= JSON.parse(localStorage.getItem("tasks")) || []

function getDataFromHtml(event) {
    event.preventDefault()
let task=event.target.task.value
Tasks.push(task)
localStorage.setItem("tasks",JSON.stringify(Tasks))
displayTasks()
}


function displayTasks() {
    


let ul=document.getElementById("task-list")
ul.innerHTML=""
let string=""
let parent
if(Tasks.length>0){
 parent=document.createElement("div")
    parent.classList.add("task-list")
}
Tasks.forEach((el,index)=>{
string+=`<li>${el} <button onClick="deteleTask(${index})"><span class="material-symbols-outlined">
delete
</span></button></li>`
})
ul.innerHTML=string
parent.appendChild(ul)
document.body.appendChild(parent)
}



displayTasks()

function deteleTask(index) {
Tasks.splice(index,1)
localStorage.setItem("tasks",JSON.stringify(Tasks))
displayTasks()
}

