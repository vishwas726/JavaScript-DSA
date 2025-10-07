
// Custome Promise
const cart = ["shoes", "Kurti", "Watch"]

const validateCart = (cart) => {
    return true;
}

const createOrder = (cart) => {
    return new Promise((resolve, reject) => {

        if (validateCart(cart)) {
            const orderId = "353534"
            setTimeout(() => {
                resolve(orderId)
            }, 5000)
        } else {
            reject("Cart Validation Failed")
        }
    })
}

const paymentProcceed = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment Successfull")
        }, 2000)
    })
}

const promise = createOrder(cart);

promise.then((orderId) => {
    console.log(orderId)
    return orderId;

}).then((orderId) => {
    return paymentProcceed(orderId)

}).then((data) => {
    console.log("This is Data : ", data)
    

}).catch((err) => console.log(err))

console.log("Started")








