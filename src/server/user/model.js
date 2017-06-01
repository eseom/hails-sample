import { server } from 'hails'

const { sequelize, DataTypes: { INTEGER, DATE, STRING } } = server

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
export {
  User,
}

