var basicAuth = require('basic-auth');

function authe(req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'foo' && user.pass === 'bar') {
        res.send(200, 'Authenticated');

    return next();
  } else {
    return unauthorized(res);
  };
};
module.exports = {
    authe: authe
}