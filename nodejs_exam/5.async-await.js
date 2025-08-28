const {readFile} = require('node:fs/promises') 

// IIFE - Immediately Invoked Function Expression
;(
async ()=>{
  console.log('Reading First file... ')
  const text = await readFile('./file.txt', 'utf-8')
  console.log('First file: ', text)
  console.log('====================')
  console.log('------>Hacer cosas mientras se lee el archivo')
  console.log('Reading Second file... ')
  const text2 = await readFile('./file2.txt', 'utf-8')
  console.log('Second file: ', text2)
}
)()
