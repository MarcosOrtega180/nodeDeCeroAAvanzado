const fs = require('fs');
let data = '';
let crearArchivo = (base, limite) => {
    console.log(base, limite)
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor enviado ${base} no es un número.`);
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`tabla-del-${base}-hasta-el${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`El archivo tabla-del-${base}-al-${limite} ha sido creado.`);
        });
    });
}

let listar = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

module.exports = {
    crearArchivo,
    listar
};
