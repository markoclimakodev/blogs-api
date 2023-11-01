const PostCategoryModel = (sequelize,Datatypes) => {
  const PostCategory = sequelize.define(
    'PostCategory', {
      postId: Datatypes.INTEGER,
      categoryId: Datatypes.INTEGER,
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false
    }
  )

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
      through: PostCategory,
    });

    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
      through: PostCategory,
    });
  }
  

  return PostCategory
}

module.exports = PostCategoryModel