'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable(
          'wines',
          {
            id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            country: Sequelize.STRING,
            description: Sequelize.TEXT,
            points: {
              type: Sequelize.INTEGER,
              defaultValue: 0
            },
            price: {
              type: Sequelize.DOUBLE,
              defaultValue: 0
            },
            province: Sequelize.STRING,
            region_1: Sequelize.STRING,
            region_2: Sequelize.STRING,
            variety: Sequelize.STRING,
            winery: Sequelize.STRING

          }, { transaction: t })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.query('DROP TABLE wine')
  }
}
