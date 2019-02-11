//function returns the html to represent the contact, as well as delete button, accepts a function as an argument
const contact = (contactObject) => {
    return `
        <section>
            <h3>${contactObject.name}</h3>
            <div>${contactObject.phone}</div>
            <div>${contactObject.email}</div>
            <button id="deleteButton--${contactObject.id}">Delete ${contactObject.name}</button>
        </section>`
}
//exports the contact function
export default contact