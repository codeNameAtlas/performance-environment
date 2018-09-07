const pjson = require('./package.json');

//set up variables to compare current node version with required version
let version = pjson.engines.node.replace(/[^\d.]/g, '');
let current = process.version.replace(/[^\d.]/g, '');

//check node version
if (version !== current) {
  console.log(`Required node version ${version} not satisfied with current version ${process.version}.`);
  process.exit(1);
}
