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

app.post("/login", (req, res) => {
    const { email, password } = req.body
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
        if (existingUser.password === password) {
            res.status(200).json({
                success: true,
                message: "Welcome"
            })
        }
        else {
            res.status(401).json({
                success: false,
                message: "Invalid Password"
            })
        }
    }
    else {
        res.status(401).json({
            success: false,
            message: "User not found"
        })
    }
})

app.post("/register", (req, res) => {
    const body = req.body
    users = [...users, body]
    res.status(201).json({
        success: true,
        message: "User registered successfully"
    })
})

app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        users
    })
})

app.put("/users/:id", (req, res) => {
    const body = req.body
    const id = Number(req.params.id)
    users = users.map(user => user.id === id ? body : user)
    res.status(200).json({
        success: true,
        message: "User updated successfully"
    })
})


app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id)
    users = users.filter(user => user.id !== id)
    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    })
})


//200 for Ok
//201 Created
//400 Bad Request
//401 Unauthorized
//404 Not found
//500 Internal Server Error