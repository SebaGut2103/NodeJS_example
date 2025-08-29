# NodeJS_example  

Este repositorio contiene ejemplos prácticos para aprender los **primeros pasos con Node.js**, inspirados en el curso **"CURSO DE NODE.JS DESDE CERO: Introducción y primeros pasos"**  
Disponible en: https://www.youtube.com/watch?v=yB4n_K7dZV8&t=7575s


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
│ ├── 9.http.js # Servidor HTTP básico
│ ├── 9.http_copy.js # Servidor HTTP con puerto dinámico
│ ├── 10.free-port.js # Función para buscar puertos libres
├── file.txt
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

### 🌐 Servidor HTTP básico con Node.js

Archivo: 9.http.js
Este script levanta un servidor HTTP que responde con un mensaje al recibir una petición:

```js
const http = require("node:http")

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end("Hello World 😎")
})

server.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})

```
### ▶️ Ejecución
```
node js/9.http.js

```
### 📌 Salida esperada
```
Server listening on port http://localhost:54321

```

(el puerto puede variar porque se asigna automáticamente)

Luego abre en el navegador:
👉 http://localhost:54321

Y verás:

```
Hello World 😎

```

### 🔄 Servidor HTTP con búsqueda de puerto libre

Archivo: 9.http_copy.js

Este servidor intenta usar el puerto 3000 (o el definido en la variable de entorno PORT).
Si ese puerto está ocupado, buscará automáticamente uno libre usando la función findAvailablePort.

``` js
const http = require("node:http")
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end("Hello World 😎")
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`)
    })
})


```

### 🛠️ Función auxiliar: búsqueda de puertos libres

Archivo: 10.free-port.js

Define una función que intenta abrir un puerto y, si ya está en uso, busca uno disponible automáticamente.

```js
const net = require("node:net");

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        findAvailablePort(0).then(resolve);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { findAvailablePort };

```

### ▶️ Ejecución
```
node js/9.http_copy.js

```

### 📌 Salida esperada

```
Server listening on port http://localhost:3000

```

### Si el puerto 3000 está ocupado, se asignará uno dinámico:
```
Server listening on port http://localhost:54322

```

