import http from "http"

const server = http.createServer((req, res) => {
    res.end("Hello World")
})

server.listen(8081, () => console.log("Server started"))

//create the folder node-backend-server
//open the folder in vscode
//in terminal type npm init -y
//in package.json change the type to module
//create server.js file
//node server.js