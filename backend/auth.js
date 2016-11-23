// Authentication is just middleware! The middleware must just obey a few rules; 
// no need to include another library. 
function api(req, res, next) {
 
    // provide the data that was used to authenticate the request; if this is 
    // not set then no attempt to authenticate is registered. if no data is 
    // provided but you still wish to register an authentication attempt, set 
    // this to true. 
    req.challenge = req.get('Authorization');
     
    // provide the result of the authentication; true if it succeeded, false 
    // if it did not. 
    req.authenticated = req.authentication === 'auth';
 
    // provide the metadata of the authentication; generally some kind of user 
    // object on success and some kind of error as to why authentication failed 
    // otherwise. 
    if (req.authenticated) {
        req.authentication = { user: 'bob' };
    } else {
        req.authentication = { error: 'INVALID_API_KEY' };
    }
    

    // That's it! You're done! 
    next();
    res.send('okay');
};
 
// Let everyone use it. 

module.exports = {
    api: api
}
//module.exports = api;