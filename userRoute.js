import express from "express"

const Router = express.Router()

Router.get("/", (req, res) => {
    res.send("User list")
})

Router.post("/", (req, res) => {
    res.send("User Added")
})

export default Router