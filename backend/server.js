// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require("express");

const connectDB = require("./config/db");
const dotenv = require("dotenv");
// const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// app.listen(port, () => console.log("running"));
// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();
connectDB();
dotenv.config(); // .env 파일을 사용(패키지 설치 필요)

// app.use(express.urlencoded({ extended: true })); // urlencoded 형식으로 파라미터를 전달한다.

app.use(
  express.json({
    extended: false,
  })
);

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

// node.js에서 json 파일을 사용할때 필요(필수는 아닌듯)
app.use(
  express.json({
    extended: false,
  })
);

app.use(cors()); // 모든 도메인에서의 요청을 허용
// 5001 포트로 서버 오픈
app.listen(5001, () => {
  console.log("start! express server on port 5001");
});

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

app.get("/", function (req, res) {
  res.send({ message: "Hello world!" });
});

app.get("/test", function (req, res) {
  res.send(
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>main.html</title>
</head>
<body>
    <h1>main page</h1>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Atque, ullam quos! Iste quae, molestiae vitae tenetur, 
        in a aperiam voluptatibus dicta qui doloribus libero suscipit optio delectus voluptas voluptatem impedit!</p>
</body>
</html>
`
  );
});
