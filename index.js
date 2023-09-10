// Uses ES6 (module) javascript and not (commmonJs module) javascript
// Can't user "require", have to convert to "import" format

// Imports
import express from "express";
import bodyParser from "body-parser";
//import * as dbQuery from "./queries.js"; // Set database queries

// Start an express application
const expApp = express();
const webPort = process.env.PORT || 5000;

// User parser to prevent sql injections
expApp.use(bodyParser.json());
expApp.use(
    bodyParser.urlencoded({extended: true})
)

// expApp.get - start a new get Route Handler
// Get - watch for 'get' method
// / - Triggers when visiting root ('/images' if images route/directory)
// req - request param
// res - response param
expApp.get('/', (req, res) => {
res.send({hi: "there"})
});

// Handle routes/queries
//expApp.get('/users/:username', dbQuery.getUserByName);

// Node.js runtime on server should listen to this port, then send
// info to express library/functions
expApp.listen(webPort);