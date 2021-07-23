const timeout = setTimeout(() => {
  console.log("1.5초 후 실행한다.");
}, 1500);

const interval = setInterval(() => {
  console.log("2초마다 실행한다.");
}, 2000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다.");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 10000);

const immediate = setImmediate(() => console.log("즉시 실행"));
const immediate2 = setImmediate(() => console.log("이게 제대로 뜨는 거야?"));

console.log(__filename);
