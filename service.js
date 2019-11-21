const url = require('url');


const { Pool, Client } = require('pg')
const {MongoClient} = require('mongodb');
//const Calculator = require('./Calculator.js')
const uri = "mongodb+srv://juan:imperat0R@cluster0-rvlgy.mongodb.net/test?retryWrites=true&w=majority";




async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        createListing(client,
            {
                name: "Lovely Loft",
                summary: "A charming loft in Paris",
                bedrooms: 1,
                bathrooms: 1
            }
        );
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//main().catch(console.err);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 
async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}









exports.calculatorRequest = function (req, res) {
    const urlAddress = decodeURI(req.url).split('=');
    let response = "";
    let result = '';
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'A',
        password: 'helpme',
        port: 5432,
    })
    pool.query('INSERT INTO my_table (id) VALUES(69)', (err, res) => {
        console.log(err, res)
        pool.end()
    })
    main().catch(console.err);
    if (true) {
        result = "Dab"
        res.statusCode = 200;
        response = result.toString();
    }
    else{
        res.statusCode = 400;
        response = "Invalid Query";
    }
    res.setHeader('Content-Type', 'text/plain');
    res.end(response);
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};