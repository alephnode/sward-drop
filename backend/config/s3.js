const fs = require("fs");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const fileName = `sward_resume_june_2018.pdf`;
const bucketName = `${fileName.replace(/_/g, "-")}-container`;

let params = {
  Bucket: bucketName
};

module.exports = (req, res) => {
  s3.createBucket(
    params,
    (err, data) =>
      err
        ? res.status(400).send(`Error: ${err}: ${err.stack}`)
        : uploadFile(req, res)
  );

  const uploadFile = (req, res) => {
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      const params = {
        Bucket: bucketName,
        Key: "sward_resume_june_2018.pdf",
        Body: JSON.stringify(data, null, 2)
      };
      s3.upload(params, function(s3Err, data) {
        if (s3Err) res.status(400).send(`s3 Error: ${s3Err}`);
        res.status(201).send(`File uploaded successfully at ${data.Location}`);
      });
    });
  };
};
