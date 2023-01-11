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
      if (!/^[a-zA-Z]+$/.test(name)) {
        res.status(400).json({ error: "Name must only contain letters" });
        return;
      }

      if (name.length < 3) {
        res.status(400).json({ error: "Name must only contain letters" });
        return;
      }

      const message = req.body.message;
      if (!message.trim()) {
        res.status(400).json({ error: "message too short" });
        return;
      }
      if (message.length < 10) {
        res.status(400).json({ error: "message too short" });
        return;
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
      res.status(500).json({ error: "error boss" });
    }
  }
};

export default dbConnection(createUser);
