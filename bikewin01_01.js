// from linjinfeng -- bikewin.co 

var sys=require('util'); 
var control = require('util');
var StellarSdk = require('stellar-sdk');

var new_seed = StellarSdk.Keypair.random();
var new_address = new_seed.accountId();


sys.puts(new_seed);

sys.puts(new_address);

var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

var  accountId = "GD4LOAJ42CI3XMZRUYEZ6U3YSJVIQTYB4XG3W5G302LZJSBTJXICEOJW";

server.transactions()
  .forAccount(accountId)
  .call()
  .then(function(page) {
    console.log('bikewin-page 1: ');
    console.log(page.records);
    return page.next();
  })
  
  .then(function(page) {
    console.log('bikewin -page 2: ');
    console.log(page.records);
    return page.next();
  })
  
  .catch(function(err) {
    console.log(err);
  });







