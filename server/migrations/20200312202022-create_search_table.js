'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });

    Search_Term (i.e. Merlot 2016, gouda cheese) - VARCHAR(100)
User_id (i.e. 1, 2, 3, 4, etc.) - NUMERIC
Created_at (i.e. 2020-03-01) - DATE
PRIMARY KEY(User_id)

      */
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.createTable('searches', {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          search_term: Sequelize.STRING,
          user_id: Sequelize.INTEGER,
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

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
