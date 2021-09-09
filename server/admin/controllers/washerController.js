const { washer } = require("../models/washer");
module.exports.get_all_washers = function (req, res) {
  washer.find({}, function (err, docs) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).send(docs);
    }
  });
};

module.exports.get_unapproved_washers = function (req, res) {
  washer.find({ isApproved: false }, function (err, docs) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).send(docs);
    }
  });
};


module.exports.get_approved_washers = function (req, res) {
  washer.find({ isApproved: true }, function (err, docs) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).send(docs);
    }
  });
};


module.exports.update_washer = function (req, res) {
  const id = req.params.id;
  washer.findByIdAndUpdate(
    id,
    { $set: { isApproved: true } },
    { new: true },
    function (err, doc) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).send(doc);
      }
    }
  );
};

module.exports.delete_washer = function (req, res) {
  const id = req.params.id;
  washer.findByIdAndDelete(id, function (err, doc) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).send("Document deleted successfully");
    }
  });
};

module.exports.count_washers = function (req, res) {
  washer.count({ isApproved: "true" }, function (err, result) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(result);
    }
  });
};
