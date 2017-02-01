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

'use strict';

const express = require('express'),
  config = require('./config'),
  https = require('https'),
  app = express(),
  port = config.port;

// route mapping
const login = require('./app/routes/login'),
  assignments = require('./app/routes/assignments'),
  timeSheetWork = require('./app/routes/timeSheetWork');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // for each call to this API the frontend sends two requests
  // the first request is always with method: OPTIONS instead of POST or GET and
  // doesn't contain the Authorization-Header
  // the second request is the regular request containing the Authorization-Header
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }
  next();
});

// Utilize the given middleware handle to the given route, defaulting to /.
app.use('/login', login);
app.use('/assignments', assignments);
app.use('/timeSheetWork', timeSheetWork);


// let server  = https.createServer({
//   key: fs.readFileSync('privkey.pem', 'ascii')
// , cert: fs.readFileSync('fullchain.pem', 'ascii')
// a PEM containing the SERVER and ALL INTERMEDIATES
// })
// const server = https.createServer(options, app).listen(port, function () {
//   console.log(`...server is listening on port:${port}...`)
// })
app.listen(port, () => {
  console.log(`...server is listening on port:${port}...`);
});

'use strict';

const express = require('express'),
  router = express.Router(),
  authCtrl = require('../controllers/authenticationController');

// TODO: test / logger / use HTTPS

router.route('/')
.get((request, response) => {
  authCtrl.authenticate(request, (res) => {
    if(res.content.resourceId) {
      delete res.content.resourceId;
    }
    return response.status(res.statusCode).json(res.content);
  });
});

// exports the router as a node module to make it accessible to other files
module.exports = router;
