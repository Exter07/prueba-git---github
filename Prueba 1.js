function saludar (nombre){
    return `Hola ${nombre}`;
}

function sumar(a, b) {
    console.log( a + b);
}
module.exports.saludar = saludar;
module.exports.sumar = sumar;

