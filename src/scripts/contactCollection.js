//creates an object with TWO keys, each is a method
const contactCollection = {
    //deletes a contact from the database
    delete: (contactId) => {
        return fetch(`http://127.0.0.1:8088/contacts/${contactId}`, {
                method: "DELETE"
        })
  },
    getContact: (contactId) => {
        return fetch (`http://127.0.0.1:8088/contacts/${contactId}`)
            .then(response => response.json()
            )
    },

    //gets the contact array and parses the json
    get: function () {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json()
            )
    },
    //posts to the database - the function accepts an object as the argument
    Post: function (entryToPost) {
        fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryToPost)
        })
    }
}
//exports the contactCollection object
export default contactCollection