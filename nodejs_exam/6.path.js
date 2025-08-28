const path = require('node:path')


// Barra separadora de carpetas segun SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);

const filename = path.basename('/tap/midu-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)

