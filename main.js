let tasks = []
const textField = document.getElementById("textField")
const list = document.getElementById("list")


function addToList() {
    const textValue = textField.value
    textField.value = ""
    tasks.push(textValue)
    setList()
}

function setList() {
    let innerHTML = ""
    for (let i=0;i<tasks.length;i++) {
        const task = tasks[i]
        innerHTML += "<li>" + task + "</li>"    
    }
    
    list.innerHTML=innerHTML
}