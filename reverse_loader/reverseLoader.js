const fs = require('fs');
const loaderUtils = require("loader-utils");

module.exports = function(content) {
  const options = loaderUtils.getOptions(this) || {};

  let result = content.toString().split('').reverse().join('').trim();

  if(options.uppercase) result = result.toUpperCase();

  if(options.createResultFile) {
    fs.writeFile("./public/revert-result.js", result, function(err) {
      if (err) return err;
      return;
    });
  }

  result = JSON.stringify(result);

  return `export default ${result}`;
};
