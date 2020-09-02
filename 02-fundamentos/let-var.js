//let y var declaran una variable, pero la forma en la que esa variable vive es diferente.

// var nombre = 'Wolverine';

// if (true){
// //cuando hago esto no se genera ningún problema, porque reemplazo el valor actual de la variable
//     var nombre = 'Magneto';
// }
//
// console.log(nombre);

// let nombre = 'Wolverine';
//  //si es que creo un let en el mismo contexto, tendré un error
// if (true) {
//     //aquí podemos ver que las dos variables hechas con let no se afectan porque hacen referencias a puntos de memoria diferentes
//     //a diferencia del caso anterior, nose sobreescribe el valor actual de la variable
//     let nombre = 'Magneto';
// }
//
// console.log(nombre);

// //(3)
// for(var i =0;i<=5;i++){
//     //aquí imprime solo hasta el número 5
//     console.log(`i: ${i}`);
// }
// /*debido a que esto sale fuera dle control del el valor actual de i es 6, si bien no se ha ejecutado el
// * contenido del for, i ya incrementado a 6, por lo cual no se ejecuta el interior*/
// console.log(`i: ${i}`);


// (4)
let i = 'una variable';
for(let i =0;i<=5;i++){
    //en este caso la i externa no se ve afectada por la i del for, ya que esta trabaja en su ambito
    console.log(`i: ${i}`);
}
// /*en este caso */
console.log(`i: ${i}`);