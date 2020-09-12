const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let flag
  function reducer(teamName, name){
    teamName += typeof name === "string" ? name.trim().toUpperCase().split('')[0]: '';
    teamName = teamName.split('').sort().join('');
    return teamName;
  };
  if(members !== null &&typeof members === 'object' && members.constructor === Array)
  return members.reduce(reducer,'');
  return false;
};
