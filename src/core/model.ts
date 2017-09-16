import { server } from 'hails'
import * as Sequelize from 'sequelize'
import { Instance } from "sequelize"

const { sequelize, DataTypes: { INTEGER, DATE, STRING } } = server

export interface UserAttributes {
  name: string
  email: string
}

export interface UserInstance extends Instance<UserAttributes> {
  dataValues: UserAttributes
}

export const User: Sequelize.Model<UserInstance, UserAttributes> = sequelize.define('users', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: STRING },
  createdAt: { field: 'created_at', type: DATE },
  updatedAt: { field: 'updated_at', type: DATE },
})