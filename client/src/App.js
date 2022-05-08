
import Results from "./components/Results"
import {useState,useEffect} from "react"
import axios from 'axios';

function App() {

  const [search,setSearch]=useState("")
  const [results,setResults]=useState([])

  useEffect(() => {

  },[])

  const updateSearch =(e) => {

    setSearch(e.target.value)
    //make call to api
    axios.get(`/api/search/search/${e.target.value}`)
      .then(res => {
        const data = res.data;
        setResults(data)
      })
    //debounce with timeout

  }

  return (
    <div className="container">
      <input type="text" value={search} onChange={(e)=>{updateSearch(e)}}></input>
      <Results results={results}/>

    </div>
  );
}

export default App;
