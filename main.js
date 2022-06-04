let tasks = []
const textField = document.getElementById("textField")
const list = document.getElementById("list")
let counter = 0

function addToList() {
    const text = textField.value
    textField.value = ""
    const task = {text:text, id:counter, beingEdited:false}
    counter++
    tasks.push(task)
    setList()
}

function onAddToList() {
    if (event.key=="Enter") {
        addToList()
    }

}

function getTaskIndexById(id) {
    for (let i=0;i<tasks.length;i++){
        const task = tasks[i]
        if (task.id == id) {
            return i
        }
    }    
}

function deleteFromList(id) { 
    let indexToDelete = getTaskIndexById(id)
    tasks.splice(indexToDelete,1)
    setList()
}

//update list - have a button for each item in the list that says update

function toggleEdit(id) {
    let indexToUpdate = getTaskIndexById(id)
    let task = tasks[indexToUpdate]
    task.beingEdited = !task.beingEdited
    setList()
}

function submitEdit(id) {
    let indexToUpdate = getTaskIndexById(id)
    let textField = document.getElementById('input' + id)
    let task = tasks[indexToUpdate]
    task.text = textField.value
    task.beingEdited = false
    setList()
}

function setList() {
    let innerHTML = ""
    for (let i=0;i<tasks.length;i++) {
        const task = tasks[i]
        innerHTML += "<li id=" + task.id + ">" + task.text + "  <button onclick='deleteFromList("+task.id+")' class='delete-button'> x </button> <button onclick='toggleEdit("+task.id+")' class='edit-button'> edit </button> "    
        if (task.beingEdited){
            innerHTML += "<input type='text' id=" + 'input' + task.id+"> <button onclick='submitEdit("+task.id+")'> change </button>" 
        }
        innerHTML += "</li>"
    }
    list.innerHTML=innerHTML
    localStorage.setItem("save",JSON.stringify(tasks))
}

console.log(localStorage.getItem("save"))
if (localStorage.getItem("save")) {
    tasks=JSON.parse(localStorage.getItem("save"))
    setList()
}



