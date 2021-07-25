const condition = true; //true면 resolve, false면 reject

const promise = new Promise((resolve, reject) => {
  //resolve와 reject는 콜백함수
  if (false) {
    resolve("성공");
  }
  reject("실패");
});
//어떤 코드가 들어가도 상관은 없다.
promise
  .then((message) => {
    console.log(message);
  }) //resoleve가 호출되면
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("무조건");
  });
//promise 객체는 실행은 바로 하지만 결괏값은 나중에 받는 객체이다.

function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {})
    .catch((err) => {
      console.error(err);
    });
}
