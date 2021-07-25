const os = require("os");
const url = require("url");

const { URL } = url;
// URL은 url이라는 하나의 object에 있는 URL객체 (이는 class이다.)를 destructing 한 것이다.
// 이 class는 주소를 생성인자로 갖는 생성자를 갖고 있다.  )
const myURL = new URL("https://github.com/sperr7489");
// console.log("new url(): ", myURL);
// console.log("url.format(): ", url.format(myURL));

console.log("searchParams() : ", myURL.searchParams);
console.log("searchParams.getAll() : ", myURL.searchParams.getAll("category"));
