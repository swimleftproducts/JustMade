import Results from './components/Results';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {}, []);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    //exit if no search value
    if (!e.target.value) {
      setResults([]);
      return;
    }

    //make call to api need to debounce
    axios.get(`/api/search/${e.target.value}/${page}`).then((res) => {
      const data = res.data;
      setResults(data);
    });
  };

  const handlePageChange = (toWhere) => {
    let newPage;
    if (search === '') {return;}
    if (toWhere === 1) {
      newPage = page + 1;
      setPage(newPage);
    } else if (toWhere === 0) {
      newPage = page - 1;
      if (newPage < 1) {newPage = 1}
      setPage(newPage);
    }
    //call api no debouncing needed here
    axios.get(`/api/search/${search}/${newPage}`).then((res) => {
      const data = res.data;
      setResults(data);
    });
  };

  return (
    <div className="container">
      <h1 className="mb-1">Eric Test App</h1>
      <input
        className="mb-1"
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => {
          updateSearch(e);
        }}
      ></input>
      <div>
        <button
          onClick={() => {
            handlePageChange(1);
          }}
          className="btn btn-primary"
        >
          Next
        </button>
        <button
          onClick={() => {
            handlePageChange(0);
          }}
          className="btn btn-secondary"
        >
          Back
        </button>
      </div>
      <Results className="center" results={results} />
    </div>
  );
}

export default App;
