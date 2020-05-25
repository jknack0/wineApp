const connection = require('./postgres').connection // importing the pg connection instance

class team {
  static getTeamMembers () {
    return new Promise((resolve, reject) => {
      connection.many('Select * from team', [])
        .then(data => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static getTeamMember (firstName) {
    return new Promise((resolve, reject) => {
      connection.one('Select * from team where lower(first_name)=$1', [firstName.toLowerCase()])
        .then(data => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

module.exports = team

/**

the following in an example usage of the connection object.
Please see the pg-promise documentation for more information

static searchOrder(orderParams){
        return new Promise((resolve,reject) => {
            connection.one('select * from orders where student_id=$1 and event_id=$2',[orderParams.studentID.toLowerCase()+'@mail.sfsu.edu', orderParams.eventID])
            .then((result) => {
                resolve(result)
            })
            .catch((e) => {
                reject({error: "Not Found"})
            })
        })
    }

*/
