const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let res='';
  if (!(options.separator)){options.separator='+';}
  if (!(options.additionSeparator)){options.additionSeparator='|';}
  options.addition=String(options.addition);
  str=String(str);
  res+=str;
  for (let i=1;i<=options.repeatTimes;i++){
    if (i>1) {res+=str;}
    if ((options.additionRepeatTimes===undefined)&&(options.addition != "undefined")) {res+=options.addition;}
      for (let j=1;j<=options.additionRepeatTimes;j++){
        res+=options.addition;
        if (j!=options.additionRepeatTimes){res+=options.additionSeparator}
      }
    if (i!=options.repeatTimes) res+=options.separator;
  }
  if (!(options.repeatTimes)){res+=options.addition;}
  return res;
};
/*`str` это **строка**, которая будет повторена
*	`options` это **объект** опций, который содержит следующие свойства:
  -	`repeatTimes` устанавливает число повторений `str`
  - `separator` это строка, разделяющая повторения `str`
  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  - `additionRepeatTimes` устанавливает число повторений `addition`
  - `additionSeparator` это строка, разделяющая повторения `addition`*/