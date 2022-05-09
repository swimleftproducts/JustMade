 const searchController = require('../controllers/searchController')

module.exports =(app)=>{
  app.get('/api/search/test',searchController.test ) 
  app.get('/api/search/:search/:page',searchController.search ) 
}