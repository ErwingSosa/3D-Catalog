const {
  sendSuccess,
} = require("../../../../Common/external/express/responses");

const send = (fn) => (res) => fn(res);

const sendUpdated = send((res) => sendSuccess(res)("Elemento actualizado"));
const sendEliminated = send((res) => sendSuccess(res)("Elemento eliminado"));

module.exports = {
  sendUpdated,
  sendEliminated,
};
