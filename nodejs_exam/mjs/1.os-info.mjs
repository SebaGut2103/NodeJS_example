import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'
console.log('Info about Operation System')
console.log('=========================')

console.log('Operation System Name', platform())
console.log('Operation System Version', release())
console.log('Arqhitecture', arch())
console.log('CPU Info', cpus()) // <--- Podemos escalar procesos en Node
console.log('Free Memory', freemem() /1024 /1024) // <--- En GB
console.log('Total Memory', totalmem() /1024 /1024) // <--- En GB
console.log('Uptime', uptime() / 60 / 60 ) // <--- En GB

