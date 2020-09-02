const fs = require('fs');
let data = '';
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor enviado ${base} no es un número.`);
            return;
        }
        for (let i = 0; i <= 10; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`El archivo tabla-${base} ha sido creado.`);
        });
    });
}

module.exports = {
    crearArchivo
};
