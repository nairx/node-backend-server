import express from "express"

const app = express()

app.listen(8081, () => console.log("Server Started"))

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/services", (req, res) => {
    res.send("Services Page")
})

app.get("/products", (req, res) => {
    res.send("Product List")
})

app.get("/products/:id", (req, res) => {
    const id = req.params.id
    const token = req.headers.authorization
    res.json({ id, token })
})

app.get("/products/id/:id", (req, res) => {
    const id = req.params.id
    res.send("Product " + id)
})


app.get("/products/category/:category/price/:price", (req, res) => {
    const category = req.params.category
    const price = req.params.price
    res.json({ category, price })
})