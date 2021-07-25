const mike = {
  name: "mike",
};
const tom = {
  name: "Tom",
};
function showThisName() {
  console.log(this.name);
}
function update(birthyear, occupation) {
  this.birthYear = birthyear;
  this.occupation = occupation;
}
// showThisName();

// //call이라는 method는 인자로 this로 사용될 객체가 들어오게 된다.
// showThisName.call(mike); //mike를 this 로 바꿔준 것이다.
// showThisName.call(tom); //tom을 this로 해주는 것.
update.call(mike, 1999, "singer");
update.call(tom, 2002, "teacher");
console.log(mike);
console.log(tom);
update.apply(mike, [1996, "dancer"]);
update.apply(tom, [2000, "artist"]);
console.log(mike);
console.log(tom);

const nums = [3, 5, 1, 2, 3, 8];
const minNum = Math.min.apply(null, nums);
console.log(minNum);

const qro = {
  name: "kichang",
  showName: function () {
    console.log(`hello very awesome ${this.name}`);
  },
};
qro.showName();

let fn = qro.showName;

fn.call(qro);
fn.apply(qro); //fn에 들어갈 arg가 없기 때문에 thisArg만 사용해줘도 전혀 문제없는 것이다.
let boundFn = showThisName.bind(qro); //이제부터 boundFn이라는 것은 qro라는 객체를 this로 받는 메소드가 된다.
boundFn();

fn();
