const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw 'Not implemented';
      let code = '';
      const encryption = 97;
      message = message.toLowerCase();
      key = key.toLowerCase();
      let fixedKey = '';
      let j = 0;
      for(let i = 0; i < message.length; i++){
        if(message[i] === ' ' || message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122 )
            fixedKey += ' ';
        else{
            fixedKey += key[j]
            j++;
        }
        if(j === key.length)
            j = 0;
      }
      for (let i = 0; i < message.length; i++){
        if( message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122){
            code += String.fromCharCode(encryption + (message.charCodeAt(i) + fixedKey.charCodeAt(i) - 194) % 26)
        }
        else
            code += message[i];
      }
      return code.toUpperCase();
  }
  decrypt(code, key) {
    if (code === undefined || key === undefined)
      throw 'Not implemented';
      let message = '';
      const decryption = 97;
      code = code.toLowerCase();
      key = key.toLowerCase();
      let fixedKey = '';
      let j = 0;
      for(let i = 0; i < code.length; i++){
        if(code[i] === ' ' || code.charCodeAt(i) < 97 || code.charCodeAt(i) > 122 )
            fixedKey += ' ';
        else{
            fixedKey += key[j]
            j++;
        }
        if(j === key.length)
            j = 0;
      }
      for (let i = 0; i < code.length; i++){
        if (code.charCodeAt(i) >= 97 && code.charCodeAt(i) <= 122){
          message += String.fromCharCode(decryption + (code.charCodeAt(i) - fixedKey.charCodeAt(i) + 26) % 26)
        }
        else
            message += code[i];
      }
      return message.toUpperCase();
}
}

module.exports = VigenereCipheringMachine;
