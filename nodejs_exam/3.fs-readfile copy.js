const fs = require('node:fs') // Recomendación de usas "node:" para los módulos nativos a partir de Node 16

// const {promysify} = require('node:util')
//const readFilePromise = promysify(fs.readFile)

console.log('Reading first file')

fs.readFilePromise('./file.txt', 'utf-8')
.then(text =>{
    console.log('First file: ',text)
})

console.log('------>Hacer cosas mientras se lee el archivo')

console.log('====================')

console.log('Reading second file')
fs.readFilePromise('./file2.txt', 'utf-8')
.then(text =>{
    console.log("Second file: ", text);
})
