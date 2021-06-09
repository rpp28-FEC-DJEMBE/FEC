const axios = require('axios');
const config = require('./config.js');

let callAtelierAPI = (method, route, body) => {

  let options = {
    method: method,
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${route}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

  if (body) {
    options.data = body;
  }

  return axios(options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })

}

module.exports.callAtelierAPI = callAtelierAPI;