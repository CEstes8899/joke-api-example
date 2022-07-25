//Imports for required packages
import express from 'express';
const app = express();
import fetch from 'node-fetch';

//example request, see documentation for other requesst
app.get('/', async (req, res) => {
  await fetch("https://v2.jokeapi.dev/categories")
    .then(async response => await response.json())
    //you can use this to return it to the browser rather than the console
    //.then(jsonData => res.json(jsonData))
    .then(jsonData => console.log(jsonData))
    .catch(error => console.log(error))
});

//testing an example joke submission through POST
app.get('/dryrun', async (req, res) => {
  //example joke
  var joke = {
    "formatVersion": 3,
    "category:": "Misc",
    "type": "single",
    "joke": "Put joke here.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "lang": "en"
  }
  //request
  await fetch("https://v2.jokeapi.dev/submit?dry-run", {
    method: "POST",
    body: joke
  })
    .then(async response => await response.json())
    .then(jsonData => console.log(jsonData))
    .catch(error => console.log(error))
});
app.listen(3000, () => {
  console.log('server started');
});
