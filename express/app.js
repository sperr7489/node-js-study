const express = require("express");
//익스프레스 내부에 http 모듈이 내장되어 있기 때문에 서버의 역할을 할 수 있다.
//app이라는 변수에 express를 실행시키는 변수로 할당.
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const { nextTick } = require("process");

dotenv.config();

const app = express();

app.use(morgan("combined"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");

// app.get("/", (req, res) => {
//   //   res.send("hello, express");
//   res.sendFile(path.join(__dirname, "/index.html"));
//   //현재 이 app.js파일이 위치해 있는 dir에서 index.html 파일을 합쳐 경로를 만든다. 그리고 이걸 res.senFile해주는 것이다.
// });

// app.use((req, res, next) => {
//   console.log("모든 요청에 전부 실행된다. ");
//   next();
// });
// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("GET / 요청에서만 실행된다. ");
//     next();
//   },
//   (req, res) => {
//     throw new Error("에러는 에러 처리 미들웨어로 갑니다. ");
//   }
// );

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
}); //404 상태에 대한 메시지를 보내는 것이다.

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
}); //에러 처리는 반드시 인자가 4개여야만 한다.
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
