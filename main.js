let tasks = []
const textField = document.getElementById("textField")
const list = document.getElementById("list")
let counter = 0

function addToList() {
    const text = textField.value
    textField.value = ""
    const task = {text:text, id:counter}
    counter++
    tasks.push(task)
    setList()
}

function deleteFromList(id) { 
    let indexToDelete 
    for (let i=0;i<tasks.length;i++){
        const task = tasks[i]
        if (task.id == id) {
            indexToDelete = i  
            break   
        }      
    }
    tasks.splice(indexToDelete)
    setList()
}

function setList() {
    let innerHTML = ""
    for (let i=0;i<tasks.length;i++) {
        const task = tasks[i]
        innerHTML += "<li id=" + task.id + ">" + task.text + "  <button onclick='deleteFromList("+task.id+")'> x </button> </li>"    
    }
    
    list.innerHTML=innerHTML
}



