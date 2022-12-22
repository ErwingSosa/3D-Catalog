const error = (fn) => (res) => (err) => fn(res, err);

const sendError = error((res, err) => {
  res.status(400).send(err.message);
});

module.exports = {
  sendError,
};
