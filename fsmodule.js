const fs = require("fs")



fs.readFile("file.txt", "utf8", (error, data) => {

    console.log(error, data)
})

const a = fs.readFileSync("file.txt")
console.log(a)
console.log("finishh");
