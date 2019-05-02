const router = require('express').Router();

const db = require('../data/helpers/mvpModel');

router.get('/', (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not retrieve the dishes data." });
    })
});

router.post('/', (req, res) => {
  db.addDish(req.body)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not create the dish." })
    })
});

router.get('/:id', (req, res) => {
  db.getDish(req.params.id)
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not retrieved the dish at the specified ID." });
    })
});

module.exports = router;