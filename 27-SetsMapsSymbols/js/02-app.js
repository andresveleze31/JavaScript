//WEAKSET -->Solo permite objetos

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

//Añadir al weakSet
weakset.add(cliente);
console.log(weakset);

//Eliminar 
weakset.delete(cliente);
console.log(weakset);
