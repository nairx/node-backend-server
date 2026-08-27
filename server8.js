import express from "express"

const app = express()

app.use(express.json())

let products = [
    { id: 1, name: "Product 1", price: 100, category: "electronics" },
    { id: 2, name: "Product 2", price: 120, category: "electronics" },
    { id: 3, name: "Product 3", price: 140, category: "clothes" }
]

app.listen(8081, () => {
    console.log("Server started")
})

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    const id = Number(req.params.id)
    const product = products.find(product => product.id === id)
    res.json(product)
})

app.get("/api/products/category/:category", (req, res) => {
    const category = req.params.category
    const filteredProducts = products.filter(product => product.category === category)
    res.json(filteredProducts)
})

app.post("/api/products", (req, res) => {
    const body = req.body
    products = [...products, body]
    res.json(products)
})


app.put("/api/products/:id", (req, res) => {
    const body = req.body
    const id = Number(req.params.id)
    products = products.map(product => product.id === id ? body : product)
    res.json(products)
})

app.delete("/api/products/:id", (req, res) => {
    const id = Number(req.params.id)
    products = products.filter(product => product.id !== id)
    res.json(products)
})