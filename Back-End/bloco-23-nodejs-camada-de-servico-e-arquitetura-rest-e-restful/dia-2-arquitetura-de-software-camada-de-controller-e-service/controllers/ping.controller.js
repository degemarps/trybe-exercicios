const getPingController = (req, res, _next) => {
  return res.status(200).json({ message: "pong!" });
};

module.exports = {
  getPingController  
};
