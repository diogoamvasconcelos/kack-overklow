const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.get("/questions", (req: any, res: any) => {
  req = req;
  res.json({
    items: [
      {
        id: "0",
        href: "diogovasconcelos.com",
        title: "Question 1",
        tags: "Typescript",
        description: "Very nice question",
        author: "Diogo",
        authorAvatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      {
        id: "1",
        href: "diogovasconcelos.com",
        title: "Question 2",
        tags: "Typescript",
        description: "Very nice question too",
        author: "Dio",
        authorAvatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      }
    ]
  });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
