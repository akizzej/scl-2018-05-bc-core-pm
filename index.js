//se declara una variable "textoUsuario" para guardar el texto que ingrese el usuario
window.onload = function(){
    let textoUsuario = "";
    let offsetUsuario = "";
    
    
    document.getElementsById("cipher-button").onclick = function () {
      offset = document.getElementsById("OffSet").value;
      textoUsuario = document.getElementsById("text").value;
    document.getElementById("textoCifrado").innerHTML = (cipher.(offset,textoUsuario));
    };
    
    
      
    
    //se hace un for para recorrer el texto ingresado x el user
    function cipher() {
    
    for (i = 0; i < textoUsuario.length; i++){
    let codigoAscci = textoUsuario.toUpperCase().charCodeAt(i);
    let codigoAscciCipher = (codigoAscci- 65 + offset) %26 + 65;
    let caracterCipher = String.fromCharCode(codigoAscciCipher);
    
    textoCifrado = textoCifrado + caracterCipher; 
    
    }
    return textoCifrado
    //funcion concatena los caracteres cifrados y forma el nuevo mensaje
    }
     
    
    }
    