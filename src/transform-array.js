const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) 
  {
    if (!(arr.constructor===Array)) {return Error;}
    let newarr=arr.map(item=>item);
      for (let index=0;index<newarr.length;index++)
    {
      if (newarr[index]==`--discard-next`) {newarr.splice(index,1); if ((index+1)<newarr.length) { newarr[index]='discarded';}}
      else if (newarr[index]==`--discard-prev`) {newarr.splice(index,1);if ((index-1)>=0) { newarr[index-1]='discarded'; index+=-1}}
      else if (newarr[index]==`--double-next`) {if ((index+1)<newarr.length) {newarr[index]=newarr[index+1];} else {newarr.splice(index,1); index+=-1;}}
      else if (newarr[index]==`--double-prev`) {if ((index-1)>=0) {newarr[index]=newarr[index-1];}else {newarr.splice(index,1); index+=-1;}}
    }
    return newarr.filter(item=>item!='discarded');}