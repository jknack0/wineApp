'use strict'

// aquire the cytoscape json data from the data folder
const cytoscapeJSON = require('../data/elements.js')
// cytoscapeJSON.edges
// cytoscapeJSON.nodes

// this promise function will extract all of the cheese data
// from the cytoscape json file.
const getCheeseData = () => new Promise((resolve, reject) => {
  const data = []

  cytoscapeJSON.nodes.forEach(node => {
    if (node.data.NodeType === 'Cheese') {
      const tempObj = {
        name: node.data.name,
        texture: node.data.Type,
        country: node.data.Country,
        animal: node.data.Milk
      }
      // console.log(tempObj)
      data.push(tempObj)
    }
  })

  resolve(data)
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cheeseData = await getCheeseData() // get the extracted cheese data

    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.bulkInsert('cheese_nodes', cheeseData, { transaction: t }) // insert it into postgres
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
