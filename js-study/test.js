/*  
js 에서의 타입은 원시타입과 참조타입 두 가지가 존재한다. 
원시 타입 : String, Number, Boolean, Null, Undefined, symbol 
원시 타입은 메모리에 값을 그대로 저장. 

참조 타입 : 객체, 배열, 함수 ... 등과 같은 Object형식의 타입
메모리에 값을 주소로 저장. 출력시 메모리와 일치하는 값을 출력.

*/

// function first() {
//   second();
//   console.log("첫 번째");
// }
// function second() {
//   third();
//   console.log("두 번째");
// }
// function third() {
//   console.log("세 번째");
// }
// first();

// function longRunningTask() {
//   console.log("작업 끝");
// }
// console.log("start");
// longRunningTask();
// console.log("next task");
// //여기까지는 롱 테스크 작업. 블로킹 방식의 코딩 블로킹 방식이라는 것은 동시에 처리할 수 없는 코드

// if (true) {
//   var x = 3;
// }
// console.log(x);
// if (true) {
//   const y = 3;
// }
// console.log(y);

// var sayNode = function () {
//   console.log("node");
// };
// var es = "ES";
// var oldObject = {
//   sayJS: function () {
//     console.log("js");
//   },
//   sayNode: sayNode,
// };
// oldObject[es + 6] = "fantastic";
// oldObject.sayNode();
// oldObject.sayJS();
// console.log(oldObject.ES6);

// const newObject = {
//   sayJS() {
//     console.log(console.log("js"));
//   },
//   sayNode,
//   [es + 6]: "fantastic",
// };

// newObject.sayNode();
// newObject.sayJS();
// console.log(newObject.ES6);

// var relationShip1 = {
//   name: "Zero",
//   friends: ["nero", "kichang", "xero"],
//   logFriends: function () {
//     console.log("이것이 디스이다" + this);
//     this.friends.forEach(function (friend) {
//       console.log(this.name, friend);
//       console.log(this + "this가 가리키는 게 이거라고?");
//     });
//   },
// };
// relationShip1.logFriends();

var candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};
const { getCandy, status: count } = candyMachine;
console.log(count);

var testFriends = {
  kichang: "genius",
  kisung: "babbo",
  kiwon: "brother",
};

const { kiwon, kichang, kisung } = testFriends;
console.log(kiwon);
