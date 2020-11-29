'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  item.init(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      imageURL: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      cal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      protein: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      ppp: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'item',
    }
  );
  return item;
};
