var request = require('request')
var express = require('express');
var router = express.Router();

/* GET home page. */
var pokemon = [
  // {
  //   name: "The Emperor's New Groove",
  //   avatarUrl: 'https://media.giphy.com/media/7vU1g0dfdjwc0/giphy.gif'
  // },
  // {
  //   name: 'Groundhog Day',
  //   avatarUrl: 'https://media.giphy.com/media/DViGV8rfVjw6Q/giphy.gif'

  // },
  // {
  //   name: 'Zoolander',
  //   avatarUrl: 'https://media.giphy.com/media/THzS8cPZPwr5e/giphy.gif'
  // }
];

var politics = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod";
router.get('/politics', function(req,res) {
  console.log("In politics");
  request(politics).pipe(res);
});

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
  res.send(pokemon);
});

router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon.push(req.body);
    console.log(pokemon);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 
module.exports = router;