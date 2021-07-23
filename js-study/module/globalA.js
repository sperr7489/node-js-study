module.exports = () => global.message;
console.log(module.exports === exports);
console.log(this === module.exports);
