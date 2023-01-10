import dbConnection from "../../lib/db";
import User from "../../lib/models";

const getUser = async (req, res) => {
  if (req.method === "GET") {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  }
};

export default dbConnection(getUser);
