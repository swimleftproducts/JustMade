const axios = require('axios').default;

module.exports={
  test(req,res,next){
    res.send('hi there')
    console.log('example route')
  },
  //main search route handler
  async search(req,res,next){
    //pull request params
    let search = req.params.search
    let page = req.params.page || 1

    //variables for data and results per page
    let data=[];
    let limit = 10

    //request to giphy api
    axios.get('https://api.giphy.com/v1/gifs/search',{params:{
       api_key:process.env.GIFY_KEY,
       q:search,
       limit:limit,
       offset:(page*limit)-limit
      }
     }).then((result)=> {
      //pull off data from response
      //send back array of fixed width urls
      data=result.data.data
      const returnData = data.map((result) => {
          return result.images.fixed_width.url
      })
      res.send(returnData)
      }
     ).catch(function (error) {
      console.log(error);
      res.send([])
    })  
  },
}