const contact = (contactObject) => { return `
<section>
    <h3>${contactObject.name}</h3>
    <div>${contactObject.phone}</div>
    <div>${contactObject.email}</div>
    </section>`
}
export default contact