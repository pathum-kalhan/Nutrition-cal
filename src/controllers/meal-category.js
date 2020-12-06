const express = require('express');
const router = express.Router();

const db = require('../../models');

const modelName = 'meal_category';

router.post('/', async (req, res) => {
  try {
    await db[modelName].create(req.body);

    return res.sendStatus(200);
  } catch (error) {
    // 500 - internal server error
    console.log(error);
    return res.sendStatus(500);
  }
});

router.put('/', async (req, res) => {
  try {
    const id = req.body.id;
    await db[modelName].update(req.body, {
      where: {
        id,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/', async (req, res) => {
  try {
    // SELECT * FROM items;
    const data = await db[modelName].findAll();
    res.status(200).json(data);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db[modelName].update(
      {
        status: false,
      },
      {
        where: {
          id,
        },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
