// add to list
export { addToList }

function addToList() {
        let task = document.querySelector('#task')
        let taskList = document.querySelector('#taskList')
        let date = document.querySelector("#date")
        let impo = document.querySelector("#imp")

        let p = document.createElement("p")
        taskList.appendChild(p)

        let label = document.createElement("label")
        label.innerText = date.value + " - " + impo.value + " - " + task.value 

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = "check"
        
        p.appendChild(checkbox)
        p.appendChild(label)
}