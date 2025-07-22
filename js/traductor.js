const morse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/",
  ".": ".-.-.-",
  ",": "--..--",
};

function enviarTexto() {
  const palabra = document.getElementById("palabra").value.trim();
  const resultado = textoAmorse(palabra);
  document.getElementById("traduccionTexto").innerText = resultado;
}

function textoAmorse(palabra) {
  let resultado = "";
  palabra = palabra.toUpperCase();
  for (let x = 0; x < palabra.length; x++) {
    let letra = palabra[x];
    if (morse[letra]) {
      resultado += morse[letra] + " ";
    }
  }
  return resultado.trim().toLowerCase();
}

function mostrarTraduccionMorse() {
  const codigo = document.getElementById("codigo").value.trim();
  const resultado = enviarMorse(codigo);
  document.getElementById("traduccionMorse").innerText = resultado;
}

//* diccionario inverso
const morseInverso = {};
for (let clave in morse) {
  morseInverso[morse[clave]] = clave;
}
function enviarMorse(codigo) {
  let resultado = "";
  const palabras = codigo.trim().split(" / ");
  for (let i = 0; i < palabras.length; i++) {
    const letras = palabras[i].split(" ");
    for (let j = 0; j < letras.length; j++) {
      if (morseInverso[letras[j]]) {
        resultado += morseInverso[letras[j]];
      }
    }
    resultado += " ";
  }
  return resultado.trim().toLowerCase();
}
//console.log(morseATexto(".... --- .-.. .-"));

// ! Logica para probar en consola
//* Logica de texto a morse */
// function textoAmorse(palabra) {
//   let resultado = "";
//   palabra = palabra.toUpperCase();
//   for (let x = 0; x < palabra.length; x++) {
//     let letra = palabra[x];
//     if (morse[letra]) {
//       resultado += morse[letra] + " ";
//     }
//   }
//   return resultado.trim().toLowerCase();
// }
//console.log(textoAmorse("marlon"));

// invertir diccionario

//* Logica de Morse a texto
// function morseATexto(codigo) {
//   let resultado = "";
//   const palabras = codigo.trim().split(" / ");
//   for (let i = 0; i < palabras.length; i++) {
//     const letras = palabras[i].split(" ");
//     for (let j = 0; j < letras.length; j++) {
//       if (morseInverso[letras[j]]) {
//         resultado += morseInverso[letras[j]];
//       }
//     }
//     resultado += " ";
//   }
//   return resultado.trim().toLowerCase();
// }
//console.log(morseATexto(".... --- .-.. .-"));
