const axios = require('axios').default;

module.exports={
  test(req,res,next){
    res.send('hi there')
    console.log('example route')
  },
  async search(req,res,next){
    
    let search = req.params.search
    let data=[];


    axios.get('https://api.giphy.com/v1/gifs/search',{params:{
       api_key:process.env.gifyKey,
       q:search,
       limit:100
      }
     }).then((result)=> {
      data=result.data.data
      const returnData = data.map((result) => {
          return result.url
        })


      res.send(returnData)
      }
     ) .catch(function (error) {
    // handle error
      console.log(error);
      res.send([])
    })
    

      
  },
  createUser(req,res,next){
     res.send('createUser')
  },
}