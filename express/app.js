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
  res.status(404).send("not found");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
