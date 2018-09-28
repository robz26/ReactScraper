var Article = require("../models/Article");

module.exports = {
  // this method handles finding all articles in the db
  find: function(req, res) {
    // console.log("Gathering saved articles from the db");
    Article.find().then(function(document) {
      res.json(document);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles adding new articles to the db
  insert: function(req, res) {
    // console.log("Adding saved artice to the db");
    console.log("req.body: ", req.body);
    Article.create(req.body).then(function(document) {
      res.json(document);
      console.log("document: ", document);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles deleting articles from the db
  delete: function(req, res) {
    // console.log("Deleting a saved article from the db");
    Article.remove({
      _id: req.params.id
    }).then(function(document) {
      res.json(document);
      console.log("document: ", document);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
