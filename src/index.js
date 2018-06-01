function cifrar() {
    const textoUsuario = document.getElementById("text").value;
    const offset = document.getElementById("OffSet").value; 
    const resultado = document.getElementById("textoCifrado").innerHTML = window.cipher.encode(textoUsuario, offset);
    


}



function descifrar() {
  const textoCifrado = document.getElementById("text").value;
  const offset = document.getElementById("OffSet").value; 
  document.getElementsById("textoCifrado").innerHTML  = window.cipher.decode(textoCifrado, offset);


}
          

 
     
    
    
    