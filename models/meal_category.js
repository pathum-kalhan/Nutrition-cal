'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class meal_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  meal_category.init({
    catId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    mealId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'meals',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'meal_category',
  });
  return meal_category;
};