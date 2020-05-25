'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.createTable('saved_pairs', {
          id: Sequelize.STRING,
          user_id: Sequelize.INTEGER,
          pair_id: Sequelize.STRING,
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
    return await queryInterface.sequelize.query('DROP TABLE saved_pairs')
  }
}
