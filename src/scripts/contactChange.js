import contactCollection from "./contactCollection"
import contactList from "./contactList"

//adds an event listener to the entire contactList container
let contactChange = () => {
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
        else if (event.target.id.startsWith("editButton--"))
        //create a refrence to the actual id of the contact you want to delte
        {let contactId = event.target.id.split("--")[1]
        contactCollection.getContact(contactId)
        .then((response) => {
            document.getElementById("phone").value = response.phone
            document.getElementById("email").value = response.email
            document.getElementById("name").value = response.name
        })
    }
})}
export default contactChange