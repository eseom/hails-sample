module.exports = (sequelize, DataTypes) => {
  const { INTEGER, DATE } = DataTypes

  return {
    User: sequelize.define('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, scopes: ['public'] },
      createdAt: { field: 'created_at', type: DATE },
      updatedAt: { field: 'updated_at', type: DATE },
    }, {
  	  createdAt: 'createdAt',
  	  updatedAt: 'updatedAt',
  	})
  }
}
