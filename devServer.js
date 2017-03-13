var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var { tweetToSongs } = require('./services/services');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

testData = 
{
  "uris": [
    "spotify:track:2xrK7AOAWok7NY4WuqeApq",
    "spotify:track:0rvXwNTPlumGn9tptQZELs",
    "spotify:track:7MxhtoiYMmro4VyBzUFm0P",
    "spotify:track:6CctvqkVhEMgPMWbXRSPnQ",
    "spotify:track:51M1EeMXbF5s6P2R5kgRum",
    "spotify:track:1vPHoMBof7z76Chi68zmCL",
    "spotify:track:5MTAq7gMLisLHwglCGHNr0",
    "spotify:track:7CE0xcph4OrPPBJ7s8pNxx",
    "spotify:track:1pEMdBAqhpH5P2T9OxWsVs",
    "spotify:track:5BAsWHnoKwFSOVxb2LY13P",
    "spotify:track:0P3N4bAzr8DRyXssS0tqhC",
    "spotify:track:4xHI8W1MuhMhU5FRjFoUMb",
    "spotify:track:7oSLcA1EGrr7nezOnD9xZv",
    "spotify:track:3Mhwg9mzFqycTx67IavPNF",
    "spotify:track:4MKtOYfRj9S3X4VmaimuGa",
    "spotify:track:0J95CJJXbOJ1ez5l6WXBFN",
    "spotify:track:3YrdBFshJAKumZ4SKNXbPf",
    "spotify:track:6pE2pIbpq1FHxvCwIOmqkS",
    "spotify:track:5CWxo7RaRluyUF7MlcuYPT",
    "spotify:track:6xlsTGw3Af5HGdoqlGo9kr",
    "spotify:track:3m3kfcHj04QkDtaCFbwXyk",
    "spotify:track:5O9dXDgsvnF18HpYMuldXz",
    "spotify:track:4nJrcTFdFvOECXhSVmXM3q",
    "spotify:track:2Hjn0MSt1Eu12QkyJrbHHb",
    "spotify:track:206lt8WB38CKygLeWn56fo",
    "spotify:track:4tCtwWceOPWzenK2HAIJSb",
    "spotify:track:7nD9nN3jord9wWcfW3Gkcm",
    "spotify:track:2ACOWPLUe4A4KuQ5ioD2od",
    "spotify:track:41Fflg7qHiVOD6dEPvsCzO",
    "spotify:track:1COvXs6jaykXC73h9OSBVM",
    "spotify:track:4rUTAkOU7OkVGeQuyQCHhF",
    "spotify:track:09S64DUkxIX9EwIaULu6yN",
    "spotify:track:5KSJ9k1FYjFLnIRlJT2wF8",
    "spotify:track:0UnhE0UhBTBwtnzEXzP0it",
    "spotify:track:02y4CADbBLKy1dpFsSeay5",
    "spotify:track:1dF5Y2dd7Wm4wZKvVjWBpr",
    "spotify:track:06qKsOkkOeZzGyciSEuyJb",
    "spotify:track:7qHAjAL7CpadaZLamuBZRm",
    "spotify:track:2waLDWGLc4Q14ZVyDNrxLM",
    "spotify:track:0hO71r8vbnrXSaXVrR9ptF",
    "spotify:track:1ozdRCYFVt8Ui0dba1520D",
    "spotify:track:3lao2enU6pehXrEsAR8Fdr",
    "spotify:track:7EvIMAbhkHXcV8rHbOyNzh",
    "spotify:track:4AyleMuo6xd4bLkyxY9S3I",
    "spotify:track:2elA6JLRaQ6iB7hxiuTKN4",
    "spotify:track:50Ud35jhXFEud6Gm9MDr6u",
    "spotify:track:2nbpJFXMgBeiDOnnl4y3xX",
    "spotify:track:4HoWmZzKWTgjhyTZ90SSl3",
    "spotify:track:7rMNxhe9o2Z4Hu4Bc9HM5v",
    "spotify:track:73RQRFxIVvRFm9gaIghTmV",
    "spotify:track:3j27SSPtFoV5XRWOMQVL4f",
    "spotify:track:2LPaasnahXr1221EP3ashC",
    "spotify:track:5giS2JijdwWvtSvhYSQpi3",
    "spotify:track:0ssYcsojPTWXOkkuZpKXeX",
    "spotify:track:0x0PtwpCi52wmJx6pEgRbk",
    "spotify:track:5K6QvgkrShwVIwj69a2ygz",
    "spotify:track:14IHyHLqO4TiPa3f6kZ72u",
    "spotify:track:1JGtM8WklhWScnAP6yuPvG",
    "spotify:track:4ingKjQZ6cYZCbhZczOGds",
    "spotify:track:0HasYpR6FY0oK65X9wmwY9",
    "spotify:track:6NMNgWgEAzde5M8U3lc6FN",
    "spotify:track:5zGPITTmaPqluxoPFYRsOY",
    "spotify:track:23L5CiUhw2jV1OIMwthR3S",
    "spotify:track:3kxfsdsCpFgN412fpnW85Y",
    "spotify:track:6hdkw1wzhIRYPlYDUtCY5m",
    "spotify:track:2aksifNn5ph8igDOkPBA02",
    "spotify:track:6wV12xIUb8oFY7lBy4KuQe",
    "spotify:track:0lYBSQXN6rCTvUZvg9S0lU",
    "spotify:track:50kpGaPAhYJ3sGmk6vplg0",
    "spotify:track:7ox2wvSzqTxQQf55Ggobbl",
    "spotify:track:17U2BzBip7bVEICiEoXSDe",
    "spotify:track:3KieL5uglGWT9FxC9L6hNc",
    "spotify:track:7fBu03XWGASzHCCREGi3UT",
    "spotify:track:3xxpp1LzyYg7pw2Q4YwO5p",
    "spotify:track:1a9VU863lnPq9uIqpBZYpj"
  ]
}

app.get('/feelit/:query', function(req, res) {
  // tweetToSongs(req.params.query, res);
  res.json(testData);
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
