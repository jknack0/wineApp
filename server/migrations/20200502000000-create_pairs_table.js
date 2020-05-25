'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });

    ID - NUMERIC
Wine_ID - NUMERIC
Cheese_ID - NUMERIC
Up_votes - INT(100)
Down_votes - INT(100)

      */

    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.createTable('pairs', {
          id: Sequelize.STRING,
          node_id: Sequelize.INTEGER,
          cheese_id: Sequelize.INTEGER,
          wine: Sequelize.STRING,
          cheese: Sequelize.STRING,
          up_votes:
        {
          type: Sequelize.BIGINT,
          defaultValue: 0
        },
          down_votes:
        {
          type: Sequelize.BIGINT,
          defaultValue: 0
        },
          ratio: {
            type: Sequelize.FLOAT,
            defaultValue: 0.00
          },
          created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          },
          updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          }
        }, { transaction: t })

      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.query('DROP TABLE pairs')
  }
}
