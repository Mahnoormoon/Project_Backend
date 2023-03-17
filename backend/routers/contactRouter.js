const express = require("express");

const router = express.Router();
const Model = require("../models/contactModel");

router.get("/", (req, res) => {
  console.log("Request at contact index");
  res.status(299).send("ContactRouter Working Perfectly!!");
});

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((result) => {
      console.log("Contact Data Saved");
      res.status(201).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error saving contact data", err);
      res.status(500).send("Error saving contact data");
    });
});

{/*router.post("/auth", (req, res) => {
  Model.findOne({ email: req.body.email })
    .then((result) => {
      if (result) {
        new Model(result).comparePassword(req.body.password, (err, isMatch) => {
          if (err || !isMatch) {
            console.error("Error authenticating user", err);
            res.status(500).send({status: "failed"});
          } else {
            console.log("User authenticated");
            res.status(201).json({ status: "success", result });
          }
        });
      } else {
        console.error("Error authenticating user");
        res.status(501).json({status: "failed"});
      }
    })
    .catch((err) => {
      console.error("Error authenticating user", err);
      res.status(502).json({status: "failed"});
    });

  // .then((result) => {
  //   console.log("User Data Saved");
  //   res.status(201).json({ status: "success", result });
  // })
  // .catch((err) => {
  //   console.error("Error saving user data", err);
  //   res.status(500).send("Error saving user data");
  // });
  */}

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      console.log("Contact Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving contact data", err);
      res.status(500).send("Error retrieving contact data");
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      console.log("Contact Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving contact data", err);
      res.status(500).send("Error retrieving contact data");
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      console.log("Contact Data Updated");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error updating contact data", err);
      res.status(500).send("Error updating contact data");
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log("Contact Data Deleted");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error deleting contact data", err);
      res.status(500).send("Error deleting contact data");
    });
});

module.exports = router;