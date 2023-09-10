// Pooling helps by not opening/closing connection each time we make a query. 
import pg from "pg";  
const {Pool} = pg;

// Use dotenv (environment variables) to get db info
import * as myEnv from "dotenv";
myEnv.config({
    override: true, 
    path: new URL(".env", import.meta.url) // environemnt file
});

// !!!!!! Should be in a separate secure file for production
const dbInfo = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DBPORT
    //max: 20  // Max connections we're allowing on website to db
    //connectionTimeoutMillis: 0 // 0, means wait forever to connect if need to
    //idleTimeoutMillis: 0  // 0, means never. When to get rid of connection after opening/using connection
})

// Create CRUD queries
async function getUserByName (req, res) {

    try {
        // Parse name
        const strName = req.params.username;

        // Get data
        const results = await dbInfo.query('SELECT * FROM users WHERE username = $1', [strName]);
        console.table(results.rows);
    }
    catch (err) {
        console.log(err);
    }
}

export {
    getUserByName
}