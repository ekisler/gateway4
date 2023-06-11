module.exports = (req, statusCode, data) => {
  req.status(statusCode).json({
    error: false,
    data,
  });
};
