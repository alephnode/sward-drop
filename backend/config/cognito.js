const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
global.fetch = require("node-fetch");

const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  ClientId: process.env.AWS_COGNITO_APP_CLIENT_ID
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

module.exports = {
  createUser: ({ body: { email, username, password } }, res) => {
    let attributeList = [];
    let dataEmail = {
      Name: "email",
      Value: email
    };

    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataEmail
    );

    attributeList.push(attributeEmail);

    userPool.signUp(
      username,
      password,
      attributeList,
      null,
      (err, result) =>
        err ? res.status(400).send(err) : res.status(201).send(result)
    );
  },
  loginUser: ({ body: { username: Username, password: Password } }, res) => {
    const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
      Username,
      Password
    });
    const userData = {
      Username,
      Pool: userPool
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: result => {
        let response = {
          payload: {
            accessToken: result.getAccessToken().getJwtToken(),
            idToken: result.getIdToken().getJwtToken(),
            refreshToken: result.getRefreshToken().getToken()
          }
        };
        res.status(200).send(response);
      },
      onFailure: err => res.status(400).send(err)
    });
  }
};
