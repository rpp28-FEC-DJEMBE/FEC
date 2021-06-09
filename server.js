const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const api = require('./server_utils/atelierAPI.js')

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.all('/*', function (req, res) {
  api.callAtelierAPI(req.method, req.url, req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      return err;
    })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})