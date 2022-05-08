//general imports
require('dotenv').config()
const path = require('path')
const {apiErrorHandler} = require('./errorHandling/errorHandler')

//basic express setup
const express = require('express')
const app = express()
const port = process.env.PORT || 4000


// routes
const searchRoutes = require('./routes/search')
searchRoutes(app)



if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('/*',(req,res) => {
  res.sendFile(path.resolve(__dirname,"client","build","index.html"))        
})
}

app.use(apiErrorHandler)

app.listen(port,() => {
  console.log('listening on PORT ',port )
})