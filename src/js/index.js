import { deleteTask } from "./display";
import { addToList } from "./function";

let todoAdd = document.querySelector("#todoAdd")
todoAdd.addEventListener("click", e => { 
    addToList();
})

    let delButton = document.querySelector("#del")
    // add console log to see why it's not working
    delButton.addEventListener("click", e => {
        console.log(deleteTask());
        deleteTask();
    })