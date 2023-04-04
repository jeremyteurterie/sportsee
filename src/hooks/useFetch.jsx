import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(id) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);
    axios
      .get('http://localhost:3000/user/' + id)
      .then((res) => {
        console.log(res.data.data);
        res.data.data && setData(res.data.data);
      })
      .catch((err) => {
        setError('An error has occured. Awkward...');
      });
  }, []);
  return { data, error };
}
