const generateContactForm = (userId) => {
    document.querySelector("#formContainer").innerHTML = `
        <h1>New Contact</h1>
        <input type="hidden" id="userId" value="${userId}">
        <input type="hidden" id="contactId">
        <label for="name">Name: </label>
        <input id="name" type="text">
        <label for="name">Phone: </label>
        <input id="phone" type="text" placeholder="555-1234">
        <label for="name">Email: </label>
        <input id="email" type="text">
        <button id="button">Store it!</button>
    `
}

export default generateContactForm