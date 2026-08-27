import express from "express"

const app = express()

app.listen(8081, () => {
    console.log("Server started")
})

const authenticate = (req, res, next) => {
    const token = req.headers.authorization
    if (token === "Bearer 12345") {
        next()
    }
    else {
        res.status(401).json({
            success: false,
            message: "Access Denied"
        })
    }

}


app.get("/home", (req, res) => {
    res.json("Home Page")
})

app.get("/products", authenticate, (req, res) => {
    res.json("Product Page")
})

