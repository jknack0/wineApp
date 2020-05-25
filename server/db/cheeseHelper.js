const connection = require('./postgres').connection // importing the pg connection instance
const cheese_keys = require('./cheeseKeys')

const createQueries = (searchKeys) => {
    return new Promise((resolve, reject) => {
      // console.log(searchKeys)
      const queries = []
      const query =
      `
      SELECT 
      node_edges.wine,
      node_edges.cheese,
      node_edges.id as node_id,
      cheese_nodes.id as cheese_id,
      cheese_nodes.texture, 
      cheese_nodes.country,
      cheese_nodes.animal,
      coalesce(pairs.up_votes, 0) as up_votes,
      coalesce(pairs.down_votes, 0) as down_votes
    
      FROM node_edges 
      
      left join
      cheese_nodes
      on cheese_nodes.name = node_edges.cheese
      
      left join 
      pairs
      on
       node_edges.wine = pairs.wine and node_edges.cheese = pairs.cheese
      
      WHERE 
      (type = 'cr' OR type = 'cw') 
      and lower(node_edges.cheese) like  $1
      `
      for (let i = 0; i < searchKeys.length; ++i) {
        queries.push(connection.any(query, ['%' + searchKeys[i]]))
        if ((i + 1) === searchKeys.length) {
            //console.log(queries)
          resolve(queries)
        }
      }
    })
  }


module.exports = { createQueries }