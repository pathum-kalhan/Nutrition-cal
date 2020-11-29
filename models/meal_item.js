'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class meal_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  meal_item.init({
    mealId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'meals',
        key: 'id',
      },
    },
    itemId:{
      type:Sequelize.INTEGER,
      references: {
        model: 'items',
        key: 'id',
      },

    },
  }, {
    sequelize,
    modelName: 'meal_item',
  });
  return meal_item;
};