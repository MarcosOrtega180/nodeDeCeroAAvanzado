let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function (){
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }

}
console.log(deadpool.nombre);
console.log(deadpool.apellido);
console.log(deadpool.getNombre());

//destructuración, hacemos la inversa
let{nombre:primernombre,apellido,poder} = deadpool;

console.log(primernombre,apellido,poder);
