import express from "express"

const app = express()

app.listen(8081, () => console.log("Server started"))



app.get("/api/products", (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    res.send("Hello World")
})

app.get("/api/users", (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    res.send("Hello World")
})

