const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (check){
    this.check=check;
  }
  letters= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  encrypt(message,key) {
    if (message===undefined){return this.Error()}
    message=message.toUpperCase().split('');
    if (key===undefined){return this.Error()}
    key=key.toUpperCase().split('');
   
    let res=[];
    let key_index=0;
    let i=0;
    let j=1;
    res=message.map((item,index)=>{
      
      if (this.letters.indexOf(item)==-1) {i++; return item;}
      if (index-i > (key.length*j-1)) {j++;}
      key_index= index-i-key.length*(j-1);
      let letter_index=(this.letters.indexOf(item)+this.letters.indexOf(key[key_index]))>25?
      this.letters.indexOf(item)+this.letters.indexOf(key[key_index])-26:
      this.letters.indexOf(item)+this.letters.indexOf(key[key_index]);
      return this.letters[letter_index];
    });
    
    if (this.check==false) { res=res.reverse();}
    return res.join('');
  }    
  decrypt(message,key) {
    if (message===undefined){return this.Error()}
    message=message.toUpperCase().split('');
    if (key===undefined){return this.Error()}
    key=key.toUpperCase().split('');
   
    let res=[];
    let key_index=0;
    let i=0;
    let j=1;
    res=message.map((item,index)=>{
      
      if (this.letters.indexOf(item)==-1) {i++; return item;}
      if (index-i > (key.length*j-1)) {j++;}
      key_index= index-i-key.length*(j-1);
      let letter_index=(this.letters.indexOf(item)-this.letters.indexOf(key[key_index])+26)>25?
      this.letters.indexOf(item)-this.letters.indexOf(key[key_index]):
      this.letters.indexOf(item)-this.letters.indexOf(key[key_index])+26;
      return this.letters[letter_index];
    });
    
    if (this.check==false) { res=res.reverse();}
    return res.join('');
}
}
module.exports = VigenereCipheringMachine;
