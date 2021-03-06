var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../../config'); // get our config file

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.headers['x-access-token'];
  console.log(token)
  if (!token) 
    return res.status(403).send('No token provided.');

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) 
      return res.status(500).send('Failed to authenticate token.'); 
  console.log(decoded)   

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });

}

function createToken(userId){
    // create a token
    var token = jwt.sign({ id : userId }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    return token;
}

exports.verifyToken = verifyToken;
exports.createToken = createToken;