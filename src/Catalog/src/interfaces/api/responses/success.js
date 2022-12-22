const success = (fn) => (res) => (response) => fn(res, response);

const send = (code) =>
  success((res, response) => res.status(code).send(response));

const sendSuccess = send(200);
const sendSuccessCreated = send(201);

module.exports = {
  sendSuccess,
  sendSuccessCreated,
};
