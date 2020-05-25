'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable('cheeses', {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          type: Sequelize.STRING,
          country: Sequelize.STRING,
          region: Sequelize.STRING,
          texture: Sequelize.STRING,
          animal: Sequelize.STRING,
          price: {
            type: Sequelize.DOUBLE,
            defaultValue: 0.00

          }

        }, { transaction: t })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.query('DROP TABLE cheese')
  }

}
