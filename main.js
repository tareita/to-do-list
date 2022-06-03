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

function deleteFromList(id) { 
    let indexToDelete 
    for (let i=0;i<tasks.length;i++){
        const task = tasks[i]
        if (task.id == id) {
            indexToDelete = i  
            break   
        }      
    }
    tasks.splice(indexToDelete,1)
    setList()
}

//update list - have a button for each item in the list that says update

function toggleEdit(id) {
    let indexToUpdate
    for (let i=0;i<tasks.length;i++){
        const task = tasks[i]
        if (task.id == id) {
            indexToUpdate = i  
            break   
        }      
    }
    beingEdited = true
    setList()
    const newText = editTextField.value
    tasks[indexToUpdate] = newText
    //beingEdited = false
}

function setList() {
    let innerHTML = ""
    for (let i=0;i<tasks.length;i++) {
        const task = tasks[i]
        innerHTML += "<li id=" + task.id + ">" + task.text + "  <button onclick='deleteFromList("+task.id+")' class='delete-button'> x </button> <button onclick='toggleEdit("+task.id+")'> edit </button> "    
        if (task.beingEdited){
            innerHTML += "<input type='text' id='editTextField'> <button> change </button>" 
        }
        innerHTML += "</li>"
    }
    
    list.innerHTML=innerHTML
}



