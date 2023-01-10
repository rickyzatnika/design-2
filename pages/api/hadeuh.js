import dbConnection from "../../lib/db";
import User from "../../lib/models";

const getUser = async (req, res) => {
  if (req.method === "GET") {
    try {
      // Add parameters to limit data requests
      // const limit = req.query.limit || 100;
      // const page = req.query.page || 1;
      // const startIndex = (page - 1) * limit;
      // const endIndex = page * limit;
      // const user = await User.find().skip(startIndex).limit(endIndex);

      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  }
};

export default dbConnection(getUser);
