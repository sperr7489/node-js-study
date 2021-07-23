//func.js
const { odd, even } = require("./var");
function checkOddOrEven(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}
module.exports = checkOddOrEven;
//exports하는 것은 객체만 대입하는 것이 아니라 함수나 변수또한 가능하다.
