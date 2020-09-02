/* las promesas nos permiten ejecutar un trabajo sincrono o asincroto y desués de esa tarea,
* realizar un trabajo en particular*/

/* Encadenado de promesas, encadenar promeasas: esto sirve par ano tener que andar anidandolas una
* dentro de otra*/

let empleados = [{id: 1, nombre: 'Marcos'}, {id: 2, nombre: 'Cori'}, {id: 3, nombre: 'Alderete'}]
let salarios = [{id: 1, salario: 1000}, {id: 2, salario: 2000}];

let getEmpleado = (id) => {
    //resolve para éxito y reject cuando hay error
    return new Promise((resolve,reject)=>{
        let empleadoDb = empleados.find(empleado => empleado.id === id);
        if(!empleadoDb){
            reject(`No existe un empleado con el id ${id}`);
        }else{
            resolve(empleadoDb);
        }
    });
}

let getSalario=(empleados)=>{
    return new Promise((resolve, reject)=>{
        let salarios2 = salarios.find(salario=>salario.id===empleados.id);
        if(salarios2){
            let empleSal=({nombre:empleados.nombre, salario:salarios2.salario});
            resolve( `Salario del empleado ${empleSal.nombre} es ${empleSal.salario}`);
        }else{
            reject(`El empleado con el id ${empleados.id} no tiene salario`);
        }
    });

}

//aquí se encadenan las promesas,
getEmpleado(10).then(empleado=>{
    return getSalario(empleado);
})
    .then(emleadoSal=>console.log(emleadoSal))
    .catch(err=>console.log(err));

