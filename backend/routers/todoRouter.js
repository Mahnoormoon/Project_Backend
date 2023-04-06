const express = require("express");

const router = express.Router();
const Model = require("../models/todoModel");

router.get("/", (req, res) => {
  console.log("Request at todo index");
  res.status(299).send("TodoRouter Working Perfectly!!");
});

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((result) => {
      console.log("Todo Data Saved");
      res.status(201).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error saving todo data", err);
      res.status(500).send("Error saving todo data");
    });
});

router.post("/auth", (req, res) => {
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
});

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      console.log("Todo Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving todo data", err);
      res.status(500).send("Error retrieving todo data");
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      console.log("Todo Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving todo data", err);
      res.status(500).send("Error retrieving todo data");
    });
});

router.get("/getbyuser/:id", (req, res) => {
  Model.find({user : req.params.id})
    .then((result) => {
      console.log("Todo Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving todo data", err);
      res.status(500).send("Error retrieving todo data");
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      console.log("Todo Data Updated");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error updating todo data", err);
      res.status(500).send("Error updating todo data");
    });
});

router.put("/addtask/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, {$push : req.body}, { new: true })
    .then((result) => {
      console.log("Todo Data Updated");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error updating todo data", err);
      res.status(500).send("Error updating todo data");
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log("Todo Data Deleted");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error deleting todo data", err);
      res.status(500).send("Error deleting todo data");
    });
});

module.exports = router;