import { deleteTask } from "./display";
import { addToList } from "./function";

let todoAdd = document.querySelector("#todoAdd")
todoAdd.addEventListener("click", e => { 
    addToList();
})

    let delButton = document.querySelector("#del")
    delButton.addEventListener("click", e => {
        deleteTask();
    })