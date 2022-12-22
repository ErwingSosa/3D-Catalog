const trycatch = (fn) => (res) => {
  try {
    fn();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const run = (fn) => (req, res) => trycatch(fn)(req, res);

module.exports = {
  run,
  trycatch,
};
