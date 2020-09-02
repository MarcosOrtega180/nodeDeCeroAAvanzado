// const fs = require('fs');

// let base = 4;
//comentado para la parte (2), este código fue al archivo ./multiplicar/multiplicar.js
// let data = '';
//
// for (let i = 0; i <= 10; i++) {
//     data += (`${base} * ${i} = ${base * i}\n`);
// }
// fs.writeFile(`tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base} ha sido creado.`);
// });

// ahora importamos el archivo
//forma normal
const multiplicar = require('./multiplicar/multiplicar');
//forma destructurada
const {crearArchivo} = require('./multiplicar/multiplicar');
// base = 8;

//recibimos el parámetro base desde la consola, en la terminal hay que poner node app-node.js --base12
let argv = process.argv;
let base = argv[2].split('=')[1];

console.log(crearArchivo(base).then(archivo => console.log(`Archivo talba-${base}.txt creado`)).catch(err => console.log(err)));