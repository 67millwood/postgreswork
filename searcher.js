const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  "user": "development",
  "password": "development",
  "database": "test_db",
  "hostname": "localhost",
  "port": 5432,
  "ssl": true
});

var myArg = process.argv.slice(2);

function findPaul(text) {
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * from famous_people WHERE first_name= '${text}' `, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows); //output: 1
    client.end();
  });
});
};

findPaul(myArg);