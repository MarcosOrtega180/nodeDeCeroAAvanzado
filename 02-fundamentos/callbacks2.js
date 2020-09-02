let empleados = [{id: 1, nombre: 'Marcos'}, {id: 2, nombre: 'Cori'}, {id: 3, nombre: 'Alderete'}]
let salarios = [{id: 1, salario: 1000}, {id: 2, salario: 2000}];
let getEmpleado = (id, callback) => {
    let empleadoDb = empleados.find(empleado => empleado.id === id);
    if(!empleadoDb){
        callback(`No existe un empleado con el id ${id}`);
    }else{
        return callback(null,empleadoDb);
    }

}

let getSalario=(empleados, calback)=>{
    let salarios2 = salarios.find(salario=>salario.id===empleados.id);
    if(salarios2){
        let empleSal=({nombre:empleados.nombre, salario:salarios2.salario});
        return calback( null,`Salario del empleado ${empleSal.nombre} es ${empleSal.salario}`);
    }else{
        calback(`El empleado con el id ${empleados.id} no tiene salario`);
    }
}

getEmpleado(2,(err,empleado)=>{
    if(err){
        return console.log(err);
    }else{
        // getSalario(empleado,(err,calback)=>{})
        getSalario(empleado,(err,userSalario)=>{
            if(err){
                return console.log(err);
            }
            console.log(userSalario.nombre, userSalario);
        });
    }
    console.log(empleado);

});