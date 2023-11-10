const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:ticker', async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://yh-finance-complete.p.rapidapi.com/yhprice',
        params: {
          ticker: req.params.ticker
        },
        headers: {
          'X-RapidAPI-Key': '47fc6dd2f3msh2dd307938f52adcp1078b1jsn14853cf38633',
          'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        }
      };
      const alphaVantageUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.params.ticker}&apikey=MG7SULSYSZB3QQQL`;
      try {
          const response = await axios.get(alphaVantageUrl);
          res.status(200).json(response.data['Global Quote']);
      } 
   catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
