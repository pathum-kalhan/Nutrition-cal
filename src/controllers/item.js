const express = require('express');
const router = express.Router();

const db = require('../../models');

router.post('/', async (req, res) => {
  try {
    const { price, protein, name } = req.body;

    const ppp = Number(price) / Number(protein);

    req.body.ppp = ppp;

    //Singleton design pattern
    const query = `SELECT * FROM fit_app.items WHERE LOWER(name) = LOWER('${name}')`;

    const data = await db.sequelize.query(query, {
      type: db.sequelize.QueryTypes.SELECT,
    });

    if (data.length) {
      return res.sendStatus(422);
    }

    // save to db ...
    await db.item.create(req.body);

    // 200 - success

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
    await db.item.update(req.body, {
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
    const data = await db.item.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.item.update(
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
