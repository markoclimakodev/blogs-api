const BlogPostModel = (sequelize, DataTypes)=> {
  const BlogPost = sequelize.define(
    'BlogPost', 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING(255),
      content: DataTypes.STRING(255),
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE
    },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
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
