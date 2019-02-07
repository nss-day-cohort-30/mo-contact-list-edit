//creates an object with TWO keys, each is a method
const contactCollection = {
    //gets the contact array and parses the json
    get: function() {return fetch("http://localhost:8088/contacts").then(response => response.json())},
    //posts to the database - the function accepts an object as the argument
    Post: function(entryToPost) { fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryToPost)
    })}
}
//exports the contactCollection object
export default contactCollection