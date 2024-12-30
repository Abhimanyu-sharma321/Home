var http = require('http');

const port = process.env.PORT || 3003


const server = http.createServer((req, res) => {


    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")


    console.log(req.url, "url")
    console.log(req, req);

    res.end("<h2>hello abhimanyu sharma </h2>")
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});