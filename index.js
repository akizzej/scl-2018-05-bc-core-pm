function cifrar() {
    const textoUsuario = document.getElementById("text").value;
    const offset = document.getElementById("OffSet").value; 
    document.getElementById("textoCifrado").innerHTML = window.cipher.encode(textoUsuario, offset);


}
      
    
 
     
    
    
    