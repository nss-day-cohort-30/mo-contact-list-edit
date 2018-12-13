export default {
    placeOrder(breadType, meat, cheese) {
        console.log(`Here's your ${meat} sandwich with ${cheese} on ${breadType}`)
        console.table({
            title: `${meat} sandwich`,
            meat: meat,
            cheese: cheese,
            bread: breadType
        })
    }
};
