const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      id: DataTypes.INTEGER,
      displayName: DataTypes.STRING(255),
      email: DataTypes.STRING(255),
      password: DataTypes.STRING(255),
      image: DataTypes.STRING(255),
    },
    {
      tableName: 'users',
      underscored: true
  }
  )

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId', as: 'blogPosts'
    })
  }

  return User
}

module.exports = UserModel