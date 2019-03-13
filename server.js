const express = require('express');
const cors = require('cors');
const axios = require('axios');

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());


app.get('/', (req, res) =>
  axios({
      method: 'POST',
      url: 'https://api.coinigy.com/api/v1/ticker',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.API_KEY || '',
        'x-api-secret': process.env.API_SECRET || ''
      },
      data: {
        'exchange_code': 'GDAX',
        'exchange_market': 'BTC/USD'
      }
    })
    .then(response => res.json(response.data))
);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
