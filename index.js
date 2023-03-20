const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const fetch = require('node-fetch');

const btcUrl = 'https://api.pro.coinbase.com/products/BTC-USD/ticker';
const ethUrl = 'https://api.pro.coinbase.com/products/ETH-USD/ticker';
const usdtUrl = 'https://api.pro.coinbase.com/products/USDT-USD/ticker';

var btcPriceData = 0;
var ethPriceData = 0;
var usdtPriceData = 0;

function getBTCRate(){
  fetch(btcUrl)
  .then(response => response.json())
  .then(data => {
    const btcPrice = data.price;
    btcPriceData = btcPrice;
    console.log(`The current BTC price is ${btcPriceData} USD.`);
  })
  .catch(error => {
    console.error('Error fetching Bitcoin price:', error);
  });
}
getBTCRate();

function getETHRate(){
  fetch(ethUrl)
  .then(response => response.json())
  .then(data => {
    const ethPrice = data.price;
    ethPriceData = ethPrice;
    console.log(`The current ETH price is ${ethPrice} USD.`);
  })
  .catch(error => {
    console.error('Error fetching Ethereum price:', error);
  });
}
getETHRate();

function getUSDTRate(){
  fetch(usdtUrl)
  .then(response => response.json())
  .then(data => {
    const usdtPrice = data.price;
    usdtPriceData = usdtPrice;
    console.log(`The current USDT price is ${usdtPriceData} USD.`);
  })
  .catch(error => {
    console.error('Error fetching Ethereum price:', error);
  });
}
getUSDTRate();

app.get('/', (req, res) => {
    res.render('index', {ethPriceData, btcPriceData, usdtPriceData} );
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
