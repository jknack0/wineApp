'use strict'

const { QueryTypes } = require('sequelize')

const shane = {
  first_name: 'Shane',
  last_name: 'Wade',
  role: 'Team Lead and Back-end Dev',
  photo: 'https://i.imgur.com/aMaBIWU.jpg',
  description: `
  My name is Shane Wade. 
  I am a passionate creator that enjoys 3D design, 
  programming, and riding my electric long board.  
  My current passion project is Gator Groceries. I
  am developing an administration tool for the program that will
  allow it to grow. The app will help setup/run the events, and collect student data.
  That data will then allow the admins to make better business descisions. 
  https://github.com/shane-au-wade/sfsu-gatorgroceries`,
  email: 'shane.au.wade@gmail.com'
}

const bernardo = {
  first_name: 'Bernardo',
  last_name: 'Bustamante',
  role: 'Front-end Dev',
  photo: 'https://i.imgur.com/2TSpxxH.jpg',
  description: `
 Hello, my name is Bernardo Bustamante. 
 I am a senior student at SFSU. 
 I live in San Mateo. My major is software engineering. 
 I like to practice outdoor sports such as tennis and soccer. 
 I work for San Mateo Union High School district as a Utility Worker.`,
  email: ''
}

const diana = {
  first_name: 'Diana',
  last_name: 'Yu Yu',
  role: 'Scrum Master and Back-end Dev',
  photo: 'https://i.imgur.com/in2oBLA.jpg',
  description: `
 A Computer Science student at SFSU with a minor in Mathematics, 
 my career goal is to be a Data Scientist, 
 so I can use my creative problem-solving skills and good intuition for
 mathematics and statistics to create machine learning algorithms; 
 I want to help simplify the work and discover useful information 
 in order to help improve my community. 
 On my free time, I enjoy meditating, doing yoga, and exploring the city.`,
  email: ''
}

const jon = {
  first_name: 'Jonathon',
  last_name: 'Knack',
  role: 'Front-end Dev',
  photo: 'https://i.imgur.com/AuJFUJL.png',
  description: `
  Hello, my name Is Jonathon Knack 
  and my interests include volleyball, golf, wow and eating food. 
  I like building cool things and drinking lots of coffee.`,
  email: ''
}

const nicholas = {
  first_name: 'Nicholas',
  last_name: 'Tuscano',
  role: 'Back-end Lead',
  photo: 'https://i.imgur.com/Ypck3eW.jpg',
  description: `
 Greetings, my name is Nicholas Tuscano.  
 I am a Computer Science major at SFSU, and will be graduating this spring. 
 A few things I enjoy are visiting museums and trying new food.`,
  email: ''
}

const skylar = {
  first_name: 'Skylar',
  last_name: 'Krieger',
  role: 'Front-end Lead',
  photo: 'https://i.imgur.com/ZKn6lCb.jpg',
  description: `
 Hello, my name is Skylar Krieger. 
 I am a Computer Science Senior at SFSU and 
 I work professionally as a UI/UX designer and developer intern. 
 I enjoy creating new things, learning new information, and art in all forms.`,
  email: ''
}

const steve = {
  first_name: 'Steve',
  last_name: 'Tu',
  role: ' Github Master and Back-end Dev',
  photo: 'https://i.imgur.com/2rbLb5Y.jpg',
  description: `
 Hello, my name is Steve Tu. 
 I'm a senior currently studying Computer Science at SFSU and 
 I enjoy programming and tinkering with my computer.`,
  email: ''
}

const caleb = {
  first_name: 'Qianqian',
  last_name: 'Zhao',
  role: 'Front-end Dev',
  photo: 'https://i.imgur.com/AzLeD6y.jpg',
  description: `
 I love Tennis and Filmmaking. 
 I am a very creative person. I can be creative with frontend develop as well. 
 I like to build website that looking cool.`,
  email: ''
}

const records = [shane, bernardo, caleb, diana, jon, nicholas, skylar, steve]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.bulkInsert('team', records, { transaction: t })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return await queryInterface.sequelize.query('Delete FROM team', { type: QueryTypes.DELETE })
  }
}
