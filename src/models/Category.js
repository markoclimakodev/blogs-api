const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(255)
    },
    {
      tableName: 'categories',
      underscored: true
  }
  )

  return Category
}

module.exports = CategoryModel