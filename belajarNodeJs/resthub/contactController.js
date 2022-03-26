//import contact model
Contact = require("./contactModel");

// handle index action
exports.index = function (req, res) {
  Contact.get(function (err, contacts) {
    if (err) {
      res.json({
        Status: "error",
        message: err,
      });
    }
    res.json({
      Status: "success",
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  });
};
// handle create contact with error respon
exports.new = function (req, res) {
  let contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  contact
    .save()
    .then((data) => {
      res.json({
        Status: "Success",
        message: "New Contact Created",
        Contact: data,
      });
    })
    .catch((err) => {
      res.Status(500).send({
        message: err.message || "Internal Server Error",
      });
    });
};

//handle view contact info
exports.view = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) {
      res.json({
        message: "new Contact Created!",
        data: contact,
      });
    }
    res.json({
      message: "Contact detail loading...",
      data: contact,
    });
  });
};

//handle update contact info
exports.update = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) {
      res.json({
        message: "new Contact Created!",
        data: contact,
      });
    }
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.save(function (err) {
      if (err) {
        res.json({
          Status: "error",
          message: err,
        });
      }
      res.json({
        message: "Contact Info updated!",
        data: contact,
      });
    });
  });
};

//handle delete contact info
exports.delete = function (req, res) {
  Contact.remove(
    {
      _id: req.params.contact_id,
    },
    function (err, contacts) {
      if (err) res.send(err);
      res.json({
        Status: "Success",
        message: "delete contact Success",
      });
    }
  );
};
