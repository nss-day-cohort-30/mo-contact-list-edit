//imports function form contact
import contact from "./contact"
//imports contactCollection object from contact collection
import contactCollection from "./contactCollection"



const contactList = () => {
    //invokes the .get method on the imported object
    const userId = document.getElementById("userId").value
    contactCollection.getForUser(userId)
        .then(
            (parsedInfo) => {
                 //refrence to the contact list element
                 let contactListEl = document.getElementById("contactList")
                contactListEl.innerHTML = ""
                //loops over the array
                parsedInfo.forEach((currentObject) => {

                    //pased each object to the contact function (builds the HTML)
                    let contactHTML = contact(currentObject)
                    //injected the HTML into the DOM
                    contactListEl.innerHTML += contactHTML
                })
            }
        )

}

//exports the contactList function
export default contactList