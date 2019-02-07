import contactCollection from "./contactCollection"
import contactForm from "./contactForm"
import contactList from "./contactList"

document.getElementById("button").addEventListener("click", contactForm)
console.log(contactCollection.get())

contactList()
