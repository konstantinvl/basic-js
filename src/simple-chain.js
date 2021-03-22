const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!(this.chain[position-1])||!(Number(position))||position!=Math.trunc(position)) {this.chain=[]; return this.Error();}
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish=this.chain.join('~~');
    this.chain=[];
    return finish;
  }
};

module.exports = chainMaker;
