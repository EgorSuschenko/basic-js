const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if(value === null || value === undefined)
      {
        this.chain.push(`( ${value} )`);
      }
    else
      value === undefined ? this.chain.push(`( )`) : this.chain.push(`( ${value.toString()} )`);
    return this;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (position > this.chain.length || position < 0 || isNaN(position)){
      this.chain = [];
      throw "Invalid position";
    }
    this.cahin = this.chain.splice(position - 1, 1);
    return this;
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let string = this.chain.join('~~');
    this.chain = [];
    return string;

  }
};

module.exports = chainMaker;
