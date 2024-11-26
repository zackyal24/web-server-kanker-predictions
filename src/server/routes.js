const { postPredictHandler, postPredictHistoriesHandler } = require('../server/handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 1000000
      }
    }
  },
  {
    path: '/predict/history',
    method: 'GET',
    handler: postPredictHistoriesHandler,
  }
]
 
module.exports = routes;