const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_ORDER_PAYMENT } = process.env;

const api = apiAdapter(URL_SERVICE_ORDER_PAYMENT);

module.exports = async (req, res) => {
  try {
    $userId = req.user.data.id;
    const orders = await api.get("/api/orders", {
      params: { user_id: $userId },
    });
    return res.json(orders.data);
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
