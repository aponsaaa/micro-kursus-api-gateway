const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_USER } = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const user = await api.post("/users/register", req.body);
    console.log(user);
    return res.json(user.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "Service unavailable" });
    }

    const { status, data } = error.response;
    console.log(error.response);

    return res.status(status).json(data);
  }
};
