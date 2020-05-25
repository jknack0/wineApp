'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable(
          'users',
          {
            id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            age: Sequelize.INTEGER,
            gender: Sequelize.STRING,
            preferred_wines: Sequelize.DataTypes.JSON,
            preferred_cheeses: Sequelize.DataTypes.JSON,
            username: Sequelize.STRING,
            password: Sequelize.STRING,
            email: Sequelize.STRING,
            created_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW')
            },
            updated_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW')
            }
          },
          { transaction: t }
        )
      ])
    })
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
