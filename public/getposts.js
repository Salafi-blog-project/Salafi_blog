const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/content")
let postlistn = []

const grtPosts = async () => {
    await fs.readdir(dirpath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        console.log(files)
        files.forEach((file, i) => {
            let obj = {}
            let post 
            fs.readFile('${dirPath}/${file}', "utf8", (err, contents) => {

            })
        })
    })
}

getPosts()