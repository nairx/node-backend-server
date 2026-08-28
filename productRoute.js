import express from "express"

const Router = express.Router()

Router.get("/", (req, res) => {
    res.send("Product list")
})

Router.post("/", (req, res) => {
    res.send("Product Added")
})

export default Router