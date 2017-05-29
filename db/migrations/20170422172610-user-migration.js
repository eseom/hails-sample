module.exports = {
  up(queryInterface, Sequelize) {
    const { INTEGER, DATE, STRING } = Sequelize
    return queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, scopes: ['public'] },
      username: { type: STRING },
      createdAt: { field: 'created_at', type: DATE },
      updatedAt: { field: 'updated_at', type: DATE },
    })
  },
  down(queryInterface) {
    return queryInterface.dropTable('users')
  },
}
