const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mysql = require('mysql');
const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
web3.eth.getAccounts(console.log);


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
  let public_key = "";
  let answer = false;
  web3.eth.personal.newAccount(password).then((result) => {
    public_key = result;
    bcrypt.hash(password, saltRounds).then(function (hash) {
      password = hash;
      var qry = `INSERT INTO user (username,password,public_key) values ("${username}","${password}","${public_key}");`;
      con.query(qry, function (err, result) {
        if (err) throw err;
        else answer = true;
        res.status(200).send(answer);
      });
    });
  });
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


web3.eth.personal.unlockAccount("0x37ccfcd81de97d0a77cdd8f7cf59a770833a0512", "", 600)
     .then(console.log('Account unlocked!'));
    // new web3.eth.Contract(jsonInterface, address, options)
     const myContract = new web3.eth.Contract([
      {
        "constant": false,
        "inputs": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "party",
            "type": "string"
          }
        ],
        "name": "addCandidate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "uid",
            "type": "string"
          },
          {
            "name": "candidateID",
            "type": "uint256"
          },
          {
            "name": "aadhar",
            "type": "uint256"
          }
        ],
        "name": "vote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "candidateID",
            "type": "uint256"
          }
        ],
        "name": "AddedCandidate",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "candidateID",
            "type": "uint256"
          }
        ],
        "name": "getCandidate",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getNumOfCandidates",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getNumOfVoters",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "candidateID",
            "type": "uint256"
          }
        ],
        "name": "totalVotes",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ], '0x9acf60914271e3a81e3cf722e7c926039e56b36e', {
      defaultAccount: '0x37ccfcd81de97d0a77cdd8f7cf59a770833a0512', // default from address
      defaultGasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });


  myContract.methods.addCandidate(123).send({from: '0x9acf60914271e3a81e3cf722e7c926039e56b36e'})
  .then((receipt) => {
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
  });


app.listen(8081, () => {
  console.log('listening on port 8081');
});