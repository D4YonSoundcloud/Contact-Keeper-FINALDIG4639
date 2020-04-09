//crud functionality

//login authitication
const express = require("express");
const router = express.Router();

// @route      GET api/contacts
// @desc       Get all users contacts
// @access     Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route      POST api/contacts
// @desc       Add new contact
// @access     PRivate
router.post("/", (req, res) => {
  res.send("Add contact");
});
// @route      PUT api/contact/:id
// @desc       update contact
// @access     Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route      DELETE api/contact/:id
// @desc       delete a contact
// @access     public
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
