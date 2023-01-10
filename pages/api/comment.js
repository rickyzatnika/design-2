import dbConnection from "../../lib/db";
import User from "../../lib/models";

const createUser = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name } = req.body;
      const existUser = await User.findOne({ name });
      if (existUser) {
        throw new Error(`User ${name} already exists`);
      }
      const message = req.body.message;
      if (message.length < 3) {
        res.send({ error: msg("message too short") });
      }

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
      res.status(401).send({ error: "error boss" });
    }
  }
};

export default dbConnection(createUser);
