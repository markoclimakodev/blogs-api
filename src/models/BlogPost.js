const BlogPostModel = (sequelize, DataTypes)=> {
  const BlogPost = sequelize.define(
    'BlogPost', 
    {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING(255),
      content: DataTypes.STRING(255),
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE
    },
    {
      tableName: 'blog_posts',
      underscored: true,
  }
  )

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    })
  }
  

  return BlogPost
}

module.exports = BlogPostModel 