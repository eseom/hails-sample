module.exports = {
  up(queryInterface, Sequelize) {
    const { DATE, STRING, INTEGER } = Sequelize.DataTypes
    return queryInterface.createTable('cars', {
      id: { type: INTEGER, primaryKey: true },
      name: { type: STRING },
      created_at: { type: DATE },
      updated_at: { type: DATE },
    })
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('cars')
  },
};
