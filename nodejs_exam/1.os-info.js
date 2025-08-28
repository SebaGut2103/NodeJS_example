const os = require('node:os')
console.log('Info about Operation System')
console.log('=========================')

console.log('Operation System Name', os.platform())
console.log('Operation System Version', os.release())
console.log('Arqhitecture', os.arch())
console.log('CPU Info', os.cpus()) // <--- Podemos escalar procesos en Node
console.log('Free Memory', os.freemem() /1024 /1024) // <--- En GB
console.log('Total Memory', os.totalmem() /1024 /1024) // <--- En GB
console.log('Uptime', os.uptime() / 60 / 60 ) // <--- En GB

