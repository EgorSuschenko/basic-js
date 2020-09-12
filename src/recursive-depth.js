const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
   // throw new CustomError('Not implemented')
    let size = arr.length;
    let temp;
    let maxDepth = 0;
    for(let i = 0; i < size; i++)
    if(arr[i] instanceof Array)
    {
        let temp = this.calculateDepth(arr[i]);
        if(maxDepth < temp)
            {
                maxDepth = temp;
            }
    }
    return maxDepth + 1;
  }
};
