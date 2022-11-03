const { transporter } = require("../utils/nodemailer");

const sendEmail = (req, res) => {
  const { userData, videoLink, screenLink } = req.body;

  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_DESTINY,
    subject: "Dyslexia App",
    html: `
    <h4>Dyslexia App Test</h4>
    <b>AGE:</b> <em>${userData?.age}</em>
    <br/>
    <b>NAME:</b> <em>${userData?.name}</em>
    <br/>
    <b>GENDER:</b> <em>${userData?.gender}</em>
    <br/>
    <b>BLOOD TYPE:</b> <em>${userData?.bloodType}</em>
    <br/>
    <b>NATIONALITY:</b> <em>${userData?.nationality}</em>
    <br/>
    <b>DATE OF BIRTH:</b> <em>${userData?.dateOfBirth}</em>
    <br/>
    <b>LINK CAMERA RECORD:</b> <em>${videoLink}</em>
    <br/>
    <b>LINK SCREEN RECORD:</b> <em>${screenLink}</em>
    `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err.message);
      res.status(200).json({
        err: err.message,
        message: "Email error",
      });
    } else {
      console.log("Email sent");
      res.status(200).json({
        err: null,
        message: info,
      });
    }
  });
};

module.exports = { sendEmail };
