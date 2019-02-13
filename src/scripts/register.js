import generateContactForm from "./contactForm"
import contactForm from "./contactSave"

const $ = document.querySelector.bind(document)
const RegistrationManager = {
    listenForRegister: () => {
        document.querySelector("#registerButton").addEventListener("click", () => {
            // Collect all user input
            // Create a user object
            const newUser = {
                username: $("#username").value,
                password: $("#password").value,
                firstName: $("#firstName").value,
                lastName: $("#lastName").value
            }

            // POST to API
            fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(r => r.json())
            // Because json-server sends us the new thing in response
            .then((newUserObject) => {
                // Show contact entry form
                generateContactForm(newUserObject.id)
                contactForm()
            })

        })
    },
    generateRegistrationForm : () => {
        document.querySelector("#formContainer").innerHTML = `

            <label for="username">Username: </label>
            <input id="username" name="username" type="text">

            <label for="password">Password: </label>
            <input id="password" name="password" type="password">

            <label for="firstName">First Name: </label>
            <input id="firstName" name="firstName" type="text">

            <label for="lastName">Last Name: </label>
            <input id="lastName" name="lastName" type="text">

            <button id="registerButton">Register!</button>
        `
    }

}





export default RegistrationManager