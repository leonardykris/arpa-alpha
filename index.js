/*
  Arpa-Alpha: Scraping Test with IMDB

  Tutorial: https://scotch.io/tutorials/scraping-the-web-with-node-js
  Steps:
    1. Launch web server
    2. Visit an URL on our server that activates the web scraper
    3. The scraper will make a request to the website we want to scrape
    4. The request will capture the HTML of the website and pass it along to our server
    5. We will traverse the DOM and extract the information we want
    6. Next, we will format the extracted data into a format we need
    7. Finally, we will save this formatted data into a JSON file on our machine
*/

const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', function(req, res) {
  // Scraping happens here!

});

app.listen('8081');

console.info('A spell has been cast on port 8081');

exports = module.exports = app;