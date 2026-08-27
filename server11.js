import express from "express"

const app = express()

app.listen(8081, () => {
    console.log("Server started")
})

const logger = (req, res, next) => {
    req.msg = "Hello World"
    next()
}

// app.use(logger)

app.get("/", (req, res) => {
    res.json(req.msg)
})

app.get("/home", logger, (req, res) => {
    res.json(req.msg)
})
