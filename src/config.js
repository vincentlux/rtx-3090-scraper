require('dotenv').config()

module.exports = {
    uri: 'https://www.newegg.com/p/pl?N=100007709%20601357248',
    email: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    userMail: process.env.USER_EMAIL,
    interval: (Math.floor(Math.random() * 56) + 5) * 1000
}
