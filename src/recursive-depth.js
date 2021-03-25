const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  count= 0;
  res=0;
  calculateDepth( arr ) {
    
    
    if (Array.isArray(arr)) {this.count+=1; this.count> this.res ?this.res=this.count:'';}                                                    
    arr.forEach(element => {
        if (Array.isArray(element))
          { 
            this.calculateDepth (element);
            this.count=this.count-1;
          }
      });
      if (this.count==1) {
      this.count=0;
      return this.res;}
    }
    
  }
