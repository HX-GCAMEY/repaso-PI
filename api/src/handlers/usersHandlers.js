const {
  createUserDB,
  getUserById,
  getAllUsers,
  getUserByName,
} = require("../controllers/usersControllers");

//
const getUsersHandler = async (req, res) => {
  const {name} = req.query;

  try {
    if (name) {
      const userByName = await getUserByName(name);
      res.status(200).json(userByName);
    } else {
      const response = await getAllUsers();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getDetailHandler = async (req, res) => {
  const {id} = req.params;

  const source = isNaN(id) ? "bdd" : "api";
  // "hj43h4-2342j-2342jhgbj-233ll" ===> NaN  ===> source = "bdd"
  //  4 ==> 4 ===> source = "api"
  try {
    const response = await getUserById(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const createUserHandler = async (req, res) => {
  const {name, email, phone} = req.body;

  try {
    const response = await createUserDB(name, email, phone);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {
  getDetailHandler,
  getUsersHandler,
  createUserHandler,
};
