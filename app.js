//variables

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Inserte texto aqui';

let textoDeUsuario = document.getElementById(inputText);
textoDeUsuario = mostrarTexto



// texto encriptado aparece en una caja
function mostrarTexto() {
    // Obtener el valor del textarea de entrada
    let inputText = document.getElementById('inputText').value;

    // Asignar el valor al textarea de salida
    document.getElementById('outputText').value = inputText;
}

function encriptarTexto(texto) {
    // Convertir cada carácter en su código Unicode
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        encriptado += texto.charCodeAt(i) + ' ';
    }
    return encriptado.trim();
}

function mostrarTexto() {
    // Obtener el valor del textarea de entrada
    let inputText = document.getElementById('inputText').value;

    // Encriptar el texto
    let textoEncriptado = encriptarTexto(inputText);

    // Asignar el valor encriptado al textarea de salida
    document.getElementById('outputText').value = textoEncriptado;
}
function copiarTexto() {
    // Obtener el valor del textarea de salida
    var outputText = document.getElementById('outputText').value;

    // Asignar el valor del outputText al inputText
    document.getElementById('inputText').value = outputText;
}