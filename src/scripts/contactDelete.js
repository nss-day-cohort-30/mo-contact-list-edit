import contactCollection from "./contactCollection"
import contactList from "./contactList";

let contactDelete = () => {
    let contactDisplayEl = document.getElementById("contactList")
    contactDisplayEl.addEventListener("click", () => {
        if (event.target.id.startsWith("deleteButton--"))
        {let contactId = event.target.id.split("--")[1]
        contactCollection.delete(contactId)
        .then(contactList)}
    })
}

export default contactDelete