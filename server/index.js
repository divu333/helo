const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const controller = require("../server/controller");

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.post("/api/users", controller.create);
app.get("/auth/users/:username", controller.getOne);
app.get("/user/posts", controller.getAllPosts);
app.get("/posts/:post_id", controller.getPost);
app.post("/posts/user/post", controller.newPost);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
