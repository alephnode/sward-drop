const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
global.fetch = require("node-fetch");

const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  ClientId: process.env.AWS_COGNITO_APP_CLIENT_ID
};

module.exports = ({ body }, res) => {
  let { email, username, password } = body;
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  let attributeList = [];

  let dataEmail = {
    Name: "email",
    Value: email
  };
  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail
  );

  attributeList.push(attributeEmail);

  var cognitoUser;
  userPool.signUp(username, password, attributeList, null, function(
    err,
    result
  ) {
    if (err) {
      res.status(400).send(err);
      return;
    }
    res.status(201).send(result);
  });
};
