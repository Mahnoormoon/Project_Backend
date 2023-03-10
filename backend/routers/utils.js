const multer = require("multer");
const router = require("express").Router();
const { SMTPClient } = require("emailjs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

const initMail = () => {
  return new SMTPClient({
    user: "investupwithus@gmail.com",  //change to your own email id
    password: "zrfdrttirfdhslti",  //change to your own email id
    host: "smtp.gmail.com", 
    ssl: true,
  });
};

const client = initMail();
const sendMail = (to, subject, text) => {
  client.send(
    {
      text: text,
      from: "investupwithus@gmail.com",  //change to your own email id
      to: to,

      cc: "",
      subject: subject,
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};

router.post("/sendmail", (req, res) => {
  const data = req.body;
  sendMail(data.to, data.subject, data.text);
  res.status(200).json({ message: "mail sent successfully" });
});

module.exports = router;