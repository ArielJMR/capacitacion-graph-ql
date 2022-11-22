// 1.Instalar NodeJS/npm
// 2.Crear un paquete
// 3.Crear una función que reciba un callback y lo ejecute al finalizar la ejecución. 
// Puede ser cualquier cosa, hasta una cuenta matemática
const funcionSuma = () => {
    return 2 + 2;
}

const funcionCallback = callback => {
    return callback();
}

funcionCallback(funcionSuma);

// 4.Crear otra función diferente, que transforme la función anterior en una promesa
const funcionPromesa = () => new Promise(resolve => {
    resolve(funcionCallback(funcionSuma));
})

// 5.Crear una última función llamando a las dos anteriores y combinando su respuesta
const funcionFusionadora = async () => {
    const resultadoDeCallback = funcionCallback(funcionSuma);
    const resultadoDePromesa = await funcionPromesa();
    console.log(resultadoDeCallback + resultadoDePromesa);
}

funcionFusionadora().then(() => console.log('Resuelto')).catch(error => console.error(error));