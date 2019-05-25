module.exports = {
  create: (req, res, next) => {
    console.log("response");
    const dbInstance = req.app.get("db");
    const { username, password, profile_pic } = req.body;

    dbInstance
      .create_user([username, password, profile_pic])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong!" });
        console.log(err);
      });
    console.log("added user");
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { username } = req.params;

    dbInstance
      .get_user([username])
      .then(users => res.status(200).send(users))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong!"
        });
        console.log(err);
      });
  },

  getAllPosts: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_all_posts()
      .then(posts => res.status(200).send(posts))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong!"
        });
        console.log(err);
      });

    console.log("posts are welocme");
  },

  getPost: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { post_id } = req.params;

    dbInstance
      .get_post(post_id)
      .then(posts => res.status(200).send(posts))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong!"
        });
        console.log(err);
      });
    console.log("get post by id");
  },

  newPost: (req, res, next) => {
    console.log("response");
    const dbInstance = req.app.get("db");
    const { pname, image_url, content, author_id } = req.body;

    dbInstance
      .add_post([pname, image_url, content, author_id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong!" });
        console.log(err);
      });
    console.log("added new post");
  }
};
