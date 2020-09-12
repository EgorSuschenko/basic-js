const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  if (!(arr instanceof Array))
      throw "Not Array";
    let res = [], size = arr.length;
    let temp = 0;
    let index;
    if (size === 0)
      return [];
    for (let i = 0; i < size; i++)
    {
      switch (arr[i]) {
        case `--discard-next`:
          index = i + 1;
            i++;
            break;
        case `--discard-prev`:
          temp = res[i-1]
          if(index !== i - 1)
            res.pop();
            break;
        case `--double-next`:
          temp = arr[i+1];
            if(temp !== undefined)
                res.push(temp);
            break;
        case `--double-prev`:
            temp = res[res.length - 1]
            if(temp !== undefined && index !== i - 1)
                res.push(temp);
            break;
        default:
            res.push(arr[i]);
            break;
    }
    }
    return res;
};
