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
    console.log("get user by name");
  }
};
