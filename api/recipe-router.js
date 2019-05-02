const router = require('express').Router();

const db = require('../data/helpers/mvpModel');

router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not retrieve the recipes data." });
    })
});

router.post('/', (req, res) => {
  db.addRecipe(req.body)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not create the recipe." })
    })
});

module.exports = router;