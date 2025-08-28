//Esto sólo en los módulos nativos
//que no tienen promesas nativas
// const {promysify} = require('node:util')
//const readFilePromise = promysify(fs.readFile)


const fs = require('node:fs/promises') // Recomendación de usas "node:" para los módulos nativos a partir de Node 16

console.log('Reading first file')

fs.readFilePromisee("./file.txt", "utf-8") // Si no le pasamos la codificación nos devuelve un buffer

  .then((text) => 
    console.log("First file: ", text))

console.log('------>Hacer cosas mientras se lee el archivo')

console.log('====================')
console.log('Reading second file')

fs.readFilePromisee('./file2.txt', 'utf-8')
.then((text) =>
    console.log("Second file: ", text)) // Si no le pasamos la codificación nos devuelve un buffer
