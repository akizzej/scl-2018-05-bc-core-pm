window.cipher={
    encode: (textoUsuario, offsetUser) => {
        let offset = parseInt(offsetUser );
        let textoCifrado ="";



        //se hace un for para recorrer el texto ingresado x el user

        for (i = 0; i <= textoUsuario.length; i++){
            let mensaje = textoUsuario.toUpperCase().charCodeAt(i);
            let codigoCesarCipher = (mensaje- 65+ offset ) %26 + 65;
            let caracterCipher = String.fromCharCode(codigoCesarCipher);

            textoCifrado += caracterCipher
        }
        return textoCifrado;
    },

    decode:(offsetUser, originalText) => {
        
        let offset = parseInt(offsetUser );
        let textoCifrado ="";

        for (i = 0; i < textoUsuario.length; i++){
            let mensaje = textoUsuario.toUpperCase().charCodeAt(i);
            let codigoCesarCipher = (mensaje+65 - offset) %26 - 65;
            let caracterCipher = String.fromCharCode(codigoAscciCipher);
            
            textoCifrado += caracterCipher; 
        }
        return textoCifrado
    }
        
        //funcion concatena los caracteres cifrados y forma el nuevo mensaje
}   
    
    


