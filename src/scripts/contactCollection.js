const contactCollection = {
    get: function() {return fetch("http://localhost:8088/contacts").then(response => response.json())},
    Post: function(entryToPost) { fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryToPost)
    })}
}

export default contactCollection