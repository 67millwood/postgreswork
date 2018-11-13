const pg = require("pg");
const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'development',
    password : 'development',
    database : 'test_db'
  }
});

var myArg = process.argv.slice(2);

function getInfo() {
knex.select('*').from('famous_people')
.where('first_name', 'Mahatma')
.asCallback(function(err, rows) {
  // if (err) return console.error(err);
  // knex.select('*').from('famous_people')
  //   // .whereIn('nickname', _.pluck(rows, 'name'))
  //   .asCallback(function(err, rows) {
      if (err) return console.error(err);
      console.log(rows);
    });
// });
}

console.log("dude you're amazing");

setTimeout((function() {
    return process.exit(22);
}), 3000);