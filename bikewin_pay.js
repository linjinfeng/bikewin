var StellarSdk = require('stellar-sdk');
StellarSdk.Network.useTestNetwork();
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

/*
var sourceKeys = StellarSdk.Keypair
  .fromSeed('SCZANGBA5YHTNYVVV4C3U252E2B6P6F5T3U6MM63WBSBZATAQI3EBTQ4');
*/



var sourceKeys = StellarSdk.Keypair
  .fromSeed('SAOTA7NTCCNNLNHWISONRTD35XSRK722ZIAGW4YNW6DQJSANN6IVIYKD');

var destinationId = 'GA2C5RFPE6GCKMY3US5PAB6UZLKIGSPIUKSLRB6Q723BM2OARMDUYEJ5';


var destinationId2 = 'GADRPM6QB47DPXI2K35BZWACOEDBYNJOEL7IYPHA23G3KXF6CKXYW4G5';

var destinationId3 = 'GD7YFYPNGH7XVB6XMGWSFJRDTSAFFETQGOWT5GKUCGGRTDQL7ZFY5E7U';














/*  2017.01.11 from 2016.12.28  youdao notebook
laboratory:


Public Key
GADRPM6QB47DPXI2K35BZWACOEDBYNJOEL7IYPHA23G3KXF6CKXYW4G5
Secret Key
SCVGHEB7FDYTD6JWOI5YTRS7CPGE2DAH4QJUGLKQN6IZ5YPNWAFANKVE






Public Key
GD7YFYPNGH7XVB6XMGWSFJRDTSAFFETQGOWT5GKUCGGRTDQL7ZFY5E7U
Secret Key
SAOTA7NTCCNNLNHWISONRTD35XSRK722ZIAGW4YNW6DQJSANN6IVIYKD
*/











    console.log('\n  ===1) pay to bike owner account   ===\n');



// First, check to make sure that the destination account exists.
// You could skip this, but if the account does not exist, you will be charged
// the transaction fee when the transaction fails.
server.loadAccount(destinationId)
  // If the account is not found, surface a nicer error message for logging.
  .catch(StellarSdk.NotFoundError, function (error) {
    throw new Error('The destination account does not exist!');
  })
  // If there was no error, load up-to-date information on your account.
  .then(function() {
    return server.loadAccount(sourceKeys.accountId());
  })
  .then(function(sourceAccount) {
    // Start building the transaction.
    var transaction = new StellarSdk.TransactionBuilder(sourceAccount)
      .addOperation(StellarSdk.Operation.payment({
        destination: destinationId,
        // Because Stellar allows transaction in many currencies, you must
        // specify the asset type. The special "native" asset represents Lumens.
        asset: StellarSdk.Asset.native(),
        amount: "10"
      }))
      // A memo allows you to add your own metadata to a transaction. It's
      // optional and does not affect how Stellar treats the transaction.
      .addMemo(StellarSdk.Memo.text('Test Transaction'))
      .build();
    // Sign the transaction to prove you are actually the person sending it.
    transaction.sign(sourceKeys);
    // And finally, send it off to Stellar!
    return server.submitTransaction(transaction);
  })
  .then(function(result) {

    console.log('Success! Results:', result);
  })
  .catch(function(error) {
    console.error('Something went wrong!', error);
  });










  





  console.log('\n   === 2)  pay to bike local operator (repair) account   ====\n');


server.loadAccount(destinationId2)
  // If the account is not found, surface a nicer error message for logging.
  .catch(StellarSdk.NotFoundError, function (error) {
    throw new Error('The destination account does not exist!');
  })
  // If there was no error, load up-to-date information on your account.
  .then(function() {
    return server.loadAccount(sourceKeys.accountId());
  })
  .then(function(sourceAccount) {
    // Start building the transaction.
    var transaction = new StellarSdk.TransactionBuilder(sourceAccount)
      .addOperation(StellarSdk.Operation.payment({
        destination: destinationId2,
        // Because Stellar allows transaction in many currencies, you must
        // specify the asset type. The special "native" asset represents Lumens.
        asset: StellarSdk.Asset.native(),
        amount: "10"
      }))
      // A memo allows you to add your own metadata to a transaction. It's
      // optional and does not affect how Stellar treats the transaction.
      .addMemo(StellarSdk.Memo.text('Test Transaction'))
      .build();
    // Sign the transaction to prove you are actually the person sending it.
    transaction.sign(sourceKeys);
    // And finally, send it off to Stellar!
    return server.submitTransaction(transaction);
  })
  .then(function(result) {

    console.log('Success! Results:', result);
  })
  .catch(function(error) {
    console.error('Something went wrong!', error);
  });



/*

console.log('\ndestinationId3ß  begin...\n');



  server.loadAccount(destinationId3)
  // If the account is not found, surface a nicer error message for logging.
  .catch(StellarSdk.NotFoundError, function (error) {
    throw new Error('The destination account does not exist!');
  })
  // If there was no error, load up-to-date information on your account.
  .then(function() {
    return server.loadAccount(sourceKeys.accountId());
  })
  .then(function(sourceAccount) {
    // Start building the transaction.
    var transaction = new StellarSdk.TransactionBuilder(sourceAccount)
      .addOperation(StellarSdk.Operation.payment({
        destination: destinationId3,
        // Because Stellar allows transaction in many currencies, you must
        // specify the asset type. The special "native" asset represents Lumens.
        asset: StellarSdk.Asset.native(),
        amount: "10"
      }))
      // A memo allows you to add your own metadata to a transaction. It's
      // optional and does not affect how Stellar treats the transaction.
      .addMemo(StellarSdk.Memo.text('Test Transaction'))
      .build();
    // Sign the transaction to prove you are actually the person sending it.
    transaction.sign(sourceKeys);
    // And finally, send it off to Stellar!
    return server.submitTransaction(transaction);
  })
  .then(function(result) {
    console.log('Success! Results:', result);
  })
  .catch(function(error) {
    console.error('Something went wrong!', error);
  });


*/