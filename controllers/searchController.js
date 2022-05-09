const axios = require('axios').default;

module.exports={
  test(req,res,next){
    res.send('hi there')
    console.log('example route')
  },
  async search(req,res,next){
    
    let search = req.params.search
    let page = req.params.page || 1
    let data=[];
    let limit = 10

    console.log("page is",page)

    axios.get('https://api.giphy.com/v1/gifs/search',{params:{
       api_key:process.env.GIFY_KEY,
       q:search,
       limit:limit,
       offset:(page*limit)-limit
      }
     }).then((result)=> {
      data=result.data.data
      
      const returnData = data.map((result) => {
          return result.images.fixed_width.url
      })
      res.send(returnData)
      }
     ) .catch(function (error) {
      console.log(error);
      res.send([])
    })
    

      
  },
  createUser(req,res,next){
     res.send('createUser')
  },
}