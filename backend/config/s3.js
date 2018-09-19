const fs = require("fs");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports = ({ files }, res) => {
  const { file } = files;
  const fileName = files.file.originalFilename;
  const bucketName = `${fileName.replace(/_/g, "-")}-container`;

  fs.readFile(file.path, (err, data) => {
    if (err) throw err;
    let bucketParams = {
      Bucket: bucketName
    };

    s3.createBucket(
      bucketParams,
      (bucketErr, bucketData) =>
        bucketErr
          ? res.status(400).send(`Error: ${err}: ${err.stack}`)
          : uploadFile(files, res)
    );
    const uploadFile = (x, resp) => {
      const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: data,
        ACL: "public-read"
      };
      s3.upload(params, function(s3Err, uploadData) {
        fs.unlink(file.path, function(err) {
          if (err) {
            console.error(err);
          }
          console.log("Temp File Delete");
        });
        if (s3Err) resp.status(400).send(`s3 Error: ${s3Err}`);
        resp.status(201).send(`${uploadData.Location}`);
      });
    };
  });
};
