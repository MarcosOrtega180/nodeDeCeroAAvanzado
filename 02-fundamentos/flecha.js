//función normal
// function sumar(a,b){
//    return a+b;
// }

// función de flecha
// let sumar = (a, b)=>{
//     return a+b;
// }

//versión de una sola línea
// let sumar =(a,b)=> a+b;
// console.log(sumar(10,20));
//
// let saludar =()=> 'hola mundo';
// console.log(saludar());
//
// let nombre =(entrada)=> `hola ${entrada}`;
// console.log(nombre('marcos'));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function (){
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }

}

console.log(deadpool.getNombre());