var mysql = require("mysql");

var connection = mysql.createConnection('mysql://nj90y6j5tkv5yanh:rwwfqb2pqb2yopb7@xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/aw7a5egw9tf0lcap');

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
