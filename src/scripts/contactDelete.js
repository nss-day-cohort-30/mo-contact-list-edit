import contactCollection from "./contactCollection"
import contactList from "./contactList";

//adds an event listener to the entire contactList container
let contactDelete = () => {
    let contactDisplayEl = document.getElementById("contactList")
    contactDisplayEl.addEventListener("click", () => {
        //if the id of the event target starts with "delte button"
        if (event.target.id.startsWith("deleteButton--"))
        //create a refrence to the actual id of the contact you want to delte
        {let contactId = event.target.id.split("--")[1]
        //calls the method of delete on contactCollection with the ID refrence as an argument
        contactCollection.delete(contactId)
        //re-populates the container with updated database information
        .then(contactList)}
    })
}

export default contactDelete