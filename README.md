# Crypto-Dashboard
Real- time data of cyrpto currency exchange.

[Demo Website](https://crypto-dashboard-v1.kevinlem0n.repl.co)

In this template, these assets are **delivered using CDN**:
 - Bootstrap 4

Image & logos are done via online as well.

From this dashboard, we are able to see the real-time data for currency exchanges of different cryptocurrencies.

![image](https://user-images.githubusercontent.com/126497052/226352305-2453ce34-d017-4c08-987c-14b86cb21ad8.png)

**Note**
For real-time data to be working correctly, you'll have to **uncomment** a script on views/`index.ejs`
![image](https://user-images.githubusercontent.com/126497052/226353646-7583137c-dfe8-4fa4-85fa-b8ec7bf5cd88.png)

This will make a request to Express server to re-render the view. 
Before each re-render, the backend will make an API call to the **Coinbase API** to fetch the data for different cryptocurrencies exchange data.

The end.
