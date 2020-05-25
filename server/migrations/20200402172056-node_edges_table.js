'use strict'

/**
 * This migration is used to create the pairs table in postgres
 * The pairs table is going to contain the parse json data that we found at
 * https://github.com/cytoscape/wineandcheesemap/blob/gh-pages/src/client/cy-conf/elements.js#L1
 * This will later be used to pair wines and cheeses together for our users
 *
 * Shane Wade
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable(
          'node_edges',
          {
            id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            type: Sequelize.STRING, // this is the interaction or shared_interaction from cytoscape json
            cheese: Sequelize.STRING, // this is the parsed cheese from the name from cytoscape json
            cheese_alt: Sequelize.STRING, // this is a placeholder for the CC pair type (two cheeses)
            wine: Sequelize.STRING // this is the parsed wine from the name from cytoscape json
          }, { transaction: t })
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
