import dbConnection from "../../lib/db";
import User from "../../lib/models";

const createUser = async (req, res) => {
  if (req.method === "POST") {
    try {
      const create = await new User({
        name: req.body.name,
        message: req.body.message,
        presence: req.body.presence,
        attend: req.body.attend,
        createdAt: req.body.createdAt,
      });
      create.save();
      return res.status(200).json(create);
    } catch (error) {
      res.status(401).send({ msg: error.message });
    }
  }
};

export default dbConnection(createUser);
