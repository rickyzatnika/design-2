import dbConnection from "../../lib/db";
import User from "../../lib/models";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, message, presence, attend, createdAt } = req.body;
    try {
      const user = new User({
        name,
        message,
        presence,
        attend,
        createdAt,
      });
      const userCreated = await user.save();
      return res.status(200).send(userCreated);
    } catch (error) {
      console.log(error);
    }
  }
};

export default dbConnection(handler);
