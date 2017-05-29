export default (sequelize, DataTypes) => {
  const { INTEGER, DATE, STRING } = DataTypes
  const User = sequelize.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, scopes: ['public'] },
    username: { type: STRING },
    createdAt: { field: 'created_at', type: DATE },
    updatedAt: { field: 'updated_at', type: DATE },
  },
    {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    })
  return {
    User,
  }
}
