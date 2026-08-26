import fs from "fs"

// fs.writeFile("hello.txt", "Hello World", (err) => {
//     if (err) throw err
// })

// fs.appendFile("hello.txt", "\nNew Line", (err) => {
//     if (err) throw err
// })

// fs.readFile("hello.txt",'utf8',(err,data)=>{
//     if (err) throw err 
//     console.log(data)
// })

// fs.rename("hello.txt","newfile.txt",(err)=>{
//     if (err) throw err
// })

fs.unlink("newfile.txt", (err) => {
    if (err) throw err
})

