import express from "express"

const app = express()

app.listen(8081, () => {
    console.log("Server started")
})

app.get("/", (req, res) => {
    // res.send("Hello World")
    const users = [{
        name: "John",
        email: "john@gmail.com",
        role: "student"
    },
    {
        name: "Amy",
        email: "amy@gmail.com",
        role: "student"
    },
    {
        name: "Admin",
        email: "admin@gmail.com",
        role: "admin"
    }
    ]
    res.json(users)
})