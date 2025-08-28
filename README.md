# NodeJS_example  

Este repositorio contiene ejemplos prácticos para aprender los **primeros pasos con Node.js**, inspirados en el curso ["Curso de Node.js: introducción y primeros pasos"](https://www.youtube.com/@midulive).  

---

## 🚀 ¿Qué es Node.js?  
Node.js es un entorno de ejecución de JavaScript en el servidor.  
Permite ejecutar código JS fuera del navegador y trabajar con:  

- Módulos nativos (`fs`, `path`, `os`, `process`)  
- Manejo de archivos  
- Promesas y `async/await`  
- Servidores y procesos  

---

## 📂 Estructura del proyecto  

```
NodeJS_example/
├── cjs/
│ ├── index.js # Ejemplo con CommonJS
│ ├── sum.js # Función simple para sumar
├── js/
│ ├── 1.os-info.js # Obtener información del sistema operativo
│ ├── 2.fs.js # Lectura y escritura de archivos
│ ├── 3.fs-readfile.js # Ejemplo con readFile
│ ├── 4.promise.js # Uso de promesas
│ ├── 5.async-await.js # Manejo async/await
│ ├── 6.path.js # Ejemplo con el módulo path
│ ├── 7.process.js # Información del proceso en ejecución
│ ├── 8.lsadvance.js # Script tipo 'ls' para listar archivos
├── file.txt
├── file2.txt
└── README.md

```



---

## 📌 Ejemplo destacado: listar archivos con Node.js  

Archivo: `8.lsadvance.js`  

Este script lista los archivos de un directorio mostrando:  

- Tipo (📁 directorio / 📄 archivo)  
- Nombre del archivo  
- Tamaño en bytes  
- Fecha de última modificación  

### 📄 Código  

```js
const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.log(`Could not read directory ${folder}`);
    process.exit(1);
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let fileStat;
    try {
      fileStat = await fs.stat(filePath);
    } catch (error) {
      console.log(`Could not read file ${filePath}`);
      process.exit(1);
    }

    const isDirectory = fileStat.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = fileStat.size;
    const fileModified = fileStat.mtime.toLocaleString();

    return `${fileType} ${file.padEnd(20)} ${fileSize
      .toString()
      .padStart(10)} ${fileModified}`;
  });

  const filesInfo = await Promise.all(filePromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
```
### Ejemplo de ▶️ Ejecución
```
node js/8.lsadvance.js .

```

### 📌 Salida esperada:

```
f index.js             345  28/08/2025, 15:30:10
d cjs                  4096 28/08/2025, 14:50:00
f file.txt             120  28/08/2025, 13:40:15

```