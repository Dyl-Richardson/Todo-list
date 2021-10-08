import { addToList } from "./function"
export { deleteTask }


function deleteTask() {
    let check = document.querySelectorAll("#check:checked")
    
        for (let i = 0; check.length > i; i++){
        document.querySelector("#check:checked").parentElement.remove()
        }
}