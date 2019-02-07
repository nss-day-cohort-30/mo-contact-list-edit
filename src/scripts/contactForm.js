import contactCollection from "./contactCollection"

const contactForm = () => {
    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const contactObject = {
            name: name,
            phone: phone,
            email: email
    }
    contactCollection.Post(contactObject)
}

export default contactForm