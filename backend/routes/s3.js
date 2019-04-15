const fs = require("fs");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports = (
  {
    files: {
      file: { originalFilename: fileName, path }
    }
  },
  res
) => {
  const bucketName = `${fileName.replace(/_/g, "-")}-container`;

  fs.readFile(path, (err, data) => {
    if (err) throw err;
    let bucketParams = {
      Bucket: bucketName
    };

    s3.createBucket(
      bucketParams,
      (bucketErr, bucketData) =>
        bucketErr
          ? res.status(400).send(`Error: ${err}: ${err.stack}`)
          : uploadFile()
    );

    const uploadFile = () => {
      const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: data,
        ACL: "public-read"
      };

      s3.upload(params, (s3Err, { Location: location }) => {
        fs.unlink(
          path,
          err => (err ? console.error(err) : console.log("Temp File Deleted"))
        );
        s3Err
          ? res.status(400).send(`s3 Error: ${s3Err}`)
          : res.status(201).send(`${location}`);
      });
    };
  });
};
