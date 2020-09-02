const fs = require('fs');
//imprimimos en colores
const colors = require('colors');
let data = '';
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor enviado `,colors.green(base), `no es un número.`);
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`tabla-del-${base}-hasta-el${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`El archivo`,colors.green(`tabla-del-${base}-al-${limite}`),`ha sido creado.`);
        });
    });
}

let listar = (base, limite) => {
    console.log(limite, base)
    console.log('============================'.green);
    console.log(`======== talba de ${base} ========`.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
    console.log('============================'.green)
}

module.exports = {
    crearArchivo,
    listar
};
