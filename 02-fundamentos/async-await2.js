let empleados = [{id: 1, nombre: 'Marcos'}, {id: 2, nombre: 'Cori'}, {id: 3, nombre: 'Alderete'}];
let salarios = [{id: 1, salario: 1000}, {id: 2, salario: 2000}];
let getEmpleado = async (id) => {
    //resolve para éxito y reject cuando hay error
        let empleadoDb = await empleados.find(empleado => empleado.id === id);
        if (!empleadoDb) {
            throw new Error(`No existe un empleado con el id ${id}`);
        } else {
            return (empleadoDb);
        }
}

let getSalario = async (empleados) => {
        let salarios2 = await salarios.find(salario => salario.id === empleados.id);
        if (salarios2) {
            let empleSal = ({nombre: empleados.nombre, salario: salarios2.salario});
            return(`Salario del empleado ${empleSal.nombre} es ${empleSal.salario}`);
        } else {
            throw new Error(`El empleado con el id ${empleados.id} no tiene salario`);
        }
}

//optimizando con away
let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${empleado.nombre} tiene un salario de ${resp}`
}
// comparar con promesas

getInformacion(10).then(mensaje => console.log(mensaje)).catch(err => console.log(err));