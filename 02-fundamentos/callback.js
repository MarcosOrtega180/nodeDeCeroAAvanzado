// este es un callback básico
// setTimeout(()=>{
//     console.log('Hola mundo2')
// },3000)

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Marcos',
        id//supuestamente llamará por ese nombre de variable, no hace falta definir el nombre
    }

    if (id === 20) {
        callback(`El usuario  con id ${id} no existe en la base de datos`);
    } else {
        callback(usuario);
    }
    callback(null, usuario);
};

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log('Error ', err);
    }
    console.log('usuario de base de datos', usuario);
})

/*En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es
una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A".
Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".*/