'use strict'

// This migration is to create a new cheese table containing all of the cheeses from
// the cytoscape wineandcheesemap JSON data.
// - Steve Tu

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable(
          'cheese_nodes',
          {
            id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            // name, shared_name, or canonicalName in cytoscape JSON
            name: Sequelize.STRING,
            // Type in cytoscape JSON
            texture: Sequelize.STRING,
            // Country in cytoscape JSON
            country: Sequelize.STRING,
            // Milk in cytoscape JSON
            animal: Sequelize.STRING,
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
