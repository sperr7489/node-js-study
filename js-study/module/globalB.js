const A = require("./globalA");
global.message = "안녕하세요";

console.log(A());
console.error("에러메시지는 멀까?");
