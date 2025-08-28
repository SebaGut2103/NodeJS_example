//File System

const fs = require('node:fs') // Recomendación de usas "node:" para los módulos nativos a partir de Node 16

const stats = fs.statSync('./file.txt')
console.log(
    stats.isFile(), //Si es un archivo
    stats.isDirectory(),// Si es un directorio
    stats.isSymbolicLink(),// Si es un enlace simbólico
    stats.size, // Tamaño en bytes
)
