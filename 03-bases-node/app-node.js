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
// const multiplicar = require('./multiplicar/multiplicar');
//forma destructurada
const {crearArchivo, listar} = require('./multiplicar/multiplicar');
// base = 8;


//recibimos el parámetro base desde la consola, en la terminal hay que poner node app-node.js --base12

/* ahora capturamos el argv utilizando yargs para poder configurar de mejor manera lo que el argv retorna
* además de, ahora está en el archivo ./config/yargs.js y ahora exportamos  de la siguiente manera en (3)*/
// const argv = require('yargs')
//     .command('listar', 'Imprime la tabla multiplicar', {//esto especifica los argumentos que el argv puede recibir
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     }).command('crear', 'Genera un archivo con la tabla de multiplicar', {//esto especifica los argumentos que el argv puede recibir
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;


// let argv2 = process.argv;
// console.log(argv.base);
// console.log('límite', argv.limite);
// console.log(argv2);

// let base = argv2[2].split('=')[1];
// console.log(crearArchivo(base).then(archivo => console.log(`Archivo talba-${base}.txt creado`)).catch(err => console.log(err)));

/*capturamos comando específicios especificados en la líniea de comandos por ejemplo en node app-node crear --base 10
* el comando es la palabra crear, dichos comandos siempre están en un array en la posición cero del argv que a su vez es
* un array padre para el array de comandos*/
let argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        console.log(listar(argv.base, argv.limite));
        break;
    case 'crear':
        console.log(crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo tabla-del-${argv.base}-al-${argv.limite} ha sido creado.`)).catch(err => console.log(err)));
        break;
    default:
        console.log('Comando no reconocido');
}