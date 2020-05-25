'use strict'

// aquire the cytoscape json data from the data folder
const cytoscapeJSON = require('../data/elements.js')
// cytoscapeJSON.edges
// cytoscapeJSON.nodes

// this promise function will extract all of the edge data
// from the cytoscape json file.
const getEdgesData = () => new Promise((resolve, reject) => {
  const data = []
  cytoscapeJSON.edges.forEach(node => {
    const regex = /\s{1}\(\w\w\)\s{1}/
    const splitName = node.data.name.split(regex)

    if (node.data.interaction === 'cc') {
      const tempObj = {
        type: node.data.interaction,
        cheese: splitName[0],
        cheese_alt: splitName[1],
        wine: ''
      }
      // console.log(tempObj)
      data.push(tempObj)
    } else {
      const tempObj = {
        type: node.data.interaction,
        cheese: splitName[0],
        cheese_alt: '',
        wine: splitName[1]
      }
      // console.log(tempObj)
      data.push(tempObj)
    }
  })

  resolve(data)
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const edgesData = await getEdgesData() // get the extracted edge data

    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.bulkInsert('node_edges', edgesData, { transaction: t }) // insert it into postgres
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
