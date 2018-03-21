var request = require('request'); // for web-scraping
var cheerio = require('cheerio'); // for web-scraping


function scrape (req, res) {

    // Now, grab every everything with a class of "inner" with each "article" tag
    request('http://www.thewarfieldtheatre.com/events', function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('h3.carousel_item_title_small').each(function(i, element){
          var title = $(this).children('a').text().trim();
          var date = $(this).parent('div.title').parent('div.info').children('div.date-time-container').children('span.date').text().trim();
          console.log(title);
          console.log(date);
        });
      }
    });

    request('http://www.theindependentsf.com/', function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('h1').each(function(i, element){
          var title = $(this).children('a').text().trim();
          // var date = $(this).parent('div.list-view-details vevent').children('h2.dates').text().trim();
          var date = $(this).parent('div').children('h2.dates').text();
          console.log(title);
          console.log(date);
        });
      }
    });
};

scrape();