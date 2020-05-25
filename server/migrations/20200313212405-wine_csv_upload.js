'use strict'
const fs = require('fs')
const csv = require('@fast-csv/parse')

const getWineData = () => new Promise((resolve, reject) => {
  const data = []

  fs.createReadStream('./data/winemag-data_first150k.csv')
    .pipe(csv.parse())
    .on('error', error => console.error(error))
    .on(

      'data', row => { // console.log(`ROW=${JSON.stringify(row)}`)
        const tempObj = {
          id: row[0],
          country: row[1],
          description: row[2],
          points: row[3],
          price: Number(row[4]),
          province: row[5],
          region_1: row[6],
          region_2: row[7],
          variety: row[8],
          winery: row[9]
        }

        data.push(tempObj)
      })
    .on('end', rowCount => {
      console.log(`Parsed ${rowCount} rows`)
      data.shift()
      resolve(data)
    })
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    const wineData = await getWineData()

    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.bulkInsert('wines', wineData, { transaction: t })
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
