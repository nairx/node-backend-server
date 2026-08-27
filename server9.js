import express from "express"

const app = express()

app.use(express.json())

let users = [
    { id: 1, name: "John", email: "john@gmail.com", password: "1234", role: "user" },
    { id: 2, name: "Amy", email: "amy@gmail.com", password: "1234", role: "user" },
    { id: 3, name: "Mike", email: "mike@gmail.com", password: "1234", role: "admin" },
]

app.listen(8081, () => {
    console.log("Server started")
})

