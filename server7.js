import express from "express"

const app = express()

app.use(express.json())

app.listen(8081, () => {
    console.log("Server started")
})

app.get("/api/products", (req, res) => {
    res.json({ message: "Product List" })
})

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id
    res.json({ message: "Product " + id })
})

app.post("/api/products", (req, res) => {
    const body = req.body
    console.log(body)
    res.json({ message: "Product Created" })
})

app.patch("/api/products/:id", (req, res) => {
    const body = req.body
    const id = req.params.id
    res.json({ message: "Product " + id + " updated successfully" })
})

app.delete("/api/products/:id", (req, res) => {
    const id = req.params.id
    res.json({ message: "Product " + id + " deleted successfully" })
})