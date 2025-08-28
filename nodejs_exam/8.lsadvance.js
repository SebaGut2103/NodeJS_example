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
      fileStat = await fs.stat(filePath); // quitar el segundo "const"
    } catch (error) {
      console.log(`Could not read file ${filePath}`);
      process.exit(1);
    }

    const isDirectory = fileStat.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = fileStat.size;
    const fileModified = fileStat.mtime.toLocaleString(); // ojo: era toLocalString (mal escrito)

    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`;
  });

  const filesInfo = await Promise.all(filePromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
