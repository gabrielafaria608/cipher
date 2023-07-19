const cipher = {
  "encode": (displacement, message) => cipherEncode(displacement,message),
  "decode": (displacement, message) => cipherDecode(displacement,message)
};
function cipherEncode(displacement, message){
  const messageA = String(message).length;
  let result = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetLenght = alphabet.length;
  if(typeof message === "undefined"|| Array.isArray(message) || typeof message === "number"){
    throw new TypeError("O texto para criptografar deve ser string");
  }else if(typeof displacement === "undefined"|| Array.isArray(displacement)){
    throw new TypeError("O deslocamento para criptografar deve ser um número");
  }else{
    if (displacement > 0){
      for(let i = 0; i < messageA; i++){
        const caracter = message[i].toUpperCase();
        if (alphabet.includes(caracter)){
          const index = alphabet.indexOf(caracter);
          const newIndex = (index + Number(displacement)) % alphabetLenght;
          const newCaracter = alphabet[newIndex];
          result += newCaracter;
        }
      }  
      return result;
    }
  }
}
  
function cipherDecode(displacement, message){
  const messageA = String(message).length;
  let result = "";
  const alphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  const alphabetLenght = alphabet.length;
  displacement = displacement * -1;
  if(typeof message === "undefined"|| Array.isArray(message) || typeof message === "number"){
    throw new TypeError("O texto para criptografar deve ser string");
  }else if(typeof displacement === "undefined"|| Array.isArray(displacement)){
    throw new TypeError("O deslocamento para criptografar deve ser um número");
  }else{
    if(displacement < 0){
      for(let i = 0; i < messageA; i++){
        const caracter = message[i].toUpperCase();
        if (alphabet.includes(caracter)){
          const index = alphabet.indexOf(caracter);
          const newIndex = (index - Number(displacement)) % alphabetLenght;
          const newCaracter = alphabet[newIndex];
          result += newCaracter;
        }
      } 
      return result;
    }
  }
  
}
export default cipher;