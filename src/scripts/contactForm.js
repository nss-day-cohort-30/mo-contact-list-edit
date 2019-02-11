//imports the contactCollection object
import contactCollection from "./contactCollection"
import contactList from "./contactList"

const contactForm = () => {
    //adds event listener to the button
    document.getElementById("button").addEventListener("click", () => {
        //captures the user input values
        const name = document.getElementById("name").value
        const phone = document.getElementById("phone").value
        const email = document.getElementById("email").value
        //creates an object with the user input as key values
        const contactObject = {
            name: name,
            phone: phone,
            email: email
        }

        // Get value of hidden input field
        const id = document.getElementById("contactId").value

        // If it has a non-blank value, we're editing
        if (id !== "") {
            // Edit the thing
            contactCollection.Put(id, contactObject).then(
                () => {
                    document.getElementById("contactId").value = ""
                    contactList()
                }
            )
        } else {
            //invokes the post method on the contactCollection object and passes it the newly created contact object
            contactCollection.Post(contactObject)
        }

    })
}
//exports the contactForm function
export default contactForm