const fs = require('node:fs') // Recomendación de usas "node:" para los módulos nativos a partir de Node 16

console.log('Reading first file')

fs.readFile('./file.txt', 'utf-8', (err, text) =>{// Callback

    console.log('First file: ',text)
}) // Si no le pasamos la codificación nos devuelve un buffer

console.log('------>Hacer cosas mientras se lee el archivo')

console.log('====================')
console.log('Reading second file')

fs.readFile('./file2.txt', 'utf-8', (err, text) =>{
    console.log("Second file: ", text);
}) // Si no le pasamos la codificación nos devuelve un buffer
