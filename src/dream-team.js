const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false;
  return members.map((memberName) => {
      if (typeof memberName=='string'){
        memberName=memberName.toUpperCase();
        for(let i=0;i<memberName.length;i++){
          if (memberName[i]!=' ') return memberName[i];
        }
      } else return '';
    }).sort().join('');
};
