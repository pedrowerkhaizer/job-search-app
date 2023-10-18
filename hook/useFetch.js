import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setEror] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '6e5f36b65cmsh5f592aec6ab197bp12a768jsn1158ca0b3cb6',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { 
            ...query
        },
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const respose = await axios.request(options);
            setData(respose.data.data)
            setIsLoading(false);
        } catch (error) {
            setEror(error);
            alert(`There is a error: ${error}`);
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return { data, isLoading, error, refetch };
}

export default useFetch;