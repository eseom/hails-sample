'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	const { INTEGER, DATE } = Sequelize
    return queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, scopes: ['public'] },
      createdAt: { field: 'created_at', type: DATE },
      updatedAt: { field: 'updated_at', type: DATE },
	})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
