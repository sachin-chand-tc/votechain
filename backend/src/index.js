const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mysql = require('mysql');
// const Web3 = require('web3');
// const fs = require('fs');
// const Prompt = require('prompt');
// const Wallet = require('ethereumjs-wallet');
// const colors = require('colors/safe');
// const solc = require('solc');

// const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
// web3.eth.getAccounts(console.log);
const port = process.env.PORT || 3000;

const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "votechain"
});
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let answer = false;
  let qry = `SELECT password FROM user where username = "${username}";`;
  con.query(qry, function (err, result) {
    if (err) throw err;
    else bcrypt.compare(password, result[0].password).then(function (i) {
      if (i == true) answer = true;
      res.status(200).send(answer);
    });
  });
  // setTimeout(function () { res.status(200).send(answer); }, 1000);
});

app.post('/signup', (req, res) => {
  let username = req.body.username;
  username = username.toLowerCase();
  let password = req.body.password;
  let public_key = "asf";
  let answer = false;
  bcrypt.hash(password, saltRounds).then(function (hash) {
    password = hash;
    var qry = `INSERT INTO user (username,password,public_key) values ("${username}","${password}","${public_key}");`;
    con.query(qry, function (err, result) {
      if (err) throw err;
      else answer = true;
      res.status(200).send(answer);
    });
  });
  // web3.eth.personal.newAccount(password).then((result) => {
  //   public_key = result;

  // });
});

app.post('/new', (req, res) => {
  let name = req.body.name;
  name = name.toUpperCase();
  let detail = req.body.details;
  let address = req.body.address;
  let totCandidate = req.body.totCandidate;
  let answer = false;
  var qry = `INSERT INTO election (election_address,total_candidates,election_name,publish,election_details)
              values ("${address}",${totCandidate},"${name}",false,"${detail}");`;
  con.query(qry, function (err, result) {
    if (err) throw err;
    else answer = true;
    res.status(200).send(answer);
  });
});


app.listen(port, () => {
  console.log('listening on port ' + port);
});