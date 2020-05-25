// importing pg-promise module
const pgp = require('pg-promise')(); 
// creating a database connection via the DATABASE_URL stored in the .env file
let FgCyan = "\x1b[36m" //node color coding
try
{
   const conn = pgp(process.env.DATABASE_URL); 
    console.log(FgCyan, '[pg-promise] database initialized')
    module.exports = {connection:conn}; // exporting database connection 
}
catch 
{
    console.log(FgCyan, '[pg-promise] ERROR: Invalid DATABASE_URL => update .env')
}