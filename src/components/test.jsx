import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return data;
};

const App = () => {
    const URL = '../pokearray.json';
    const result = useFetch(URL);

    return (
      <div>
        {JSON.stringify(result)}
      </div>
    );
}
export default useFetch;