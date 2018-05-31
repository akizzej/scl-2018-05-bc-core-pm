window.cipher = {

  encode: (textoUsuario , offsetUsuario) => {
   let textoCifrado= "";
   let offset = 0;


//se hace un for para recorrer el texto ingresado x el user


for (i = 0; i < textoUsuario.length; i++){
let codigoAscci = textoUsuario.toUpperCase().charCodeAt(i);
let codigoAscciCipher = (codigoAscci- 65 + offset) %26 + 65;
let caracterCipher = String.fromCharCode(codigoAscciCipher);

textoCifrado = textoCifrado + caracterCipher; 

}
return textoCifrado
//funcion concatena los caracteres cifrados y forma el nuevo mensaje
  },

  decode: (textoUsuario , offsetUsuario) => {
    let textoCifrado= "";
    let offset = 0;

    for ( i = 0; i < textoUsuario.length; i++) {
      let codigoAscci= textoUsuario.charCodeAt(i);
      let codigoAscciDecipher = (codigoAscci + 65 - offset) % 26 + 65;
      let caracterDecipher = String.fromCharCode (codigoAscciDecipher);
      textoCifrado = textoCifrado + caracterDecipher;
    }
    return textoCifrado
  }
}






 
