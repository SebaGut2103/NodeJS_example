const http = require("node:http")
const {findAvailablePort} = require('./10.free-port.js')

const desiredPort =process.env.port ?? 3000

const server = http.createServer((req, res)=>{
    console.log('Request received')
    res.end("Hello to the Fuckin World 😎")
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`)
    })
})

