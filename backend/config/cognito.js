const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
global.fetch = require("node-fetch");

const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  ClientId: process.env.AWS_COGNITO_APP_CLIENT_ID
};

module.exports = (req, res) => {
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  if (userPool) console.log(userPool);

  let attributeList = [];

  let dataEmail = {
    Name: "email",
    Value: "srmward@icloud.com"
  };
  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail
  );

  attributeList.push(attributeEmail);

  var cognitoUser;
  userPool.signUp("srmward", "AWStes#423l", attributeList, null, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
      return;
    }
    cognitoUser = result.user;
    res.send("user name is " + cognitoUser.getUsername());
  });
};
