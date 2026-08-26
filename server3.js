import http from "http"

const server = http.createServer((req, res) => {
    const url = req.url
    if (url==="/api/products"){
        res.end("Product List")
    }
    console.log(req.url)
    res.end("Hello World")
})

server.listen(8081, () => console.log("Server started"))