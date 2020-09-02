//primera parte

// hacemos de esto una función asincrona
// let getNombre = async()=>{
//     throw new Error('No existe un nombre para ese usuario');
//     return 'Marcos';
// }
//lo anterior es lo mismo que
// let getNombre2=()=>{
//     return new Promise((resolve,reject)=>{
//             resolve('ferando');
//     });
// }
// console.log(getNombre());
//
// getNombre().then(nombre=>console.log(`nombre con then ${nombre}`)).catch(e=>{console.log(`Error de sintaxis ${e}`)});

//segunda parte

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ferando');
        }, 3000);


    });
}
let getSaludo = async () => {
    //el await hace que esperes a que se compla la promesa antes de continuar con la siguiente ejecución
    let nombre = await getNombre();
    //gracias a lo anterior el return se ejecuta recién que se haya recibido la respuesta en nombre;
    return `Hola ${nombre}`;
}
getNombre().then(nombre => console.log(`nombre con then ${nombre}`)).catch(e => {
    console.log(`Error de sintaxis ${e}`)
});

getSaludo().then(mensaje=>console.log(mensaje))
