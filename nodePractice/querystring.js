const url = new URL(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);

const querystring = require("querystring");

console.log("parsedURL : ", url);
console.log("url query: ", url.search);
const query = querystring.parse(url.search);
console.log("query는 ", typeof query);
console.log("querystring.parse():", query);
console.log("querystring.stringify():", querystring.stringify(query));

// const url = require("url");
// const querystring = require("querystring");

// const parsedUrl = url.parse(
//   "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
// );
// console.log(typeof url);
// console.log("parsedURL : ", parsedUrl);
// const query = querystring.parse(parsedUrl.query);
// console.log("querystring.parse():", query);
// console.log("querystring.stringify():", querystring.stringify(query));
