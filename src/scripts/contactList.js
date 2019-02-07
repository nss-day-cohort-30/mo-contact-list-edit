import contact from "./contact"

import contactCollection from "./contactCollection"


const contactList = () => {
    contactCollection.get()
    .then(
        (parsedInfo) => {
            parsedInfo.map((currentObject) => {
                let contactListEl = document.getElementById("contactList")
               let contactHTML = contact(currentObject)
                contactListEl.innerHTML += contactHTML
            })
        }
    )
}

export default contactList