let nombre = 'Deadpool';
let real = 'Wade Winston';


console.log(nombre+' '+real);

//los template literales son los battics o como se escriba
console.log(`${nombre} ${real}`);

let nombreCompleto = nombre+' '+real;
let nombreTemplate = `${nombre} ${real}`;
console.log(nombreCompleto===nombreTemplate);