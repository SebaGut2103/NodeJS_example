import { readFile } from 'node:fs/promises' 

Promise.all([
  readFile('./file.txt', 'utf-8'),
  readFile('./file2.txt', 'utf-8')
]) .then(([text1, text2]) => {
  console.log('First file: ', text1)
  console.log('====================')
  console.log('Second file: ', text2)
}) 