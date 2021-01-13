import { useEffect, useState } from 'react';
import { API } from '../types/API';
import { Movies } from '../types/Movie';

const useMovieResultsService = (title: string): API<Movies> => {
    const [result, setResult] = useState<API<Movies>>({
        status: 'loading',
    });
    useEffect(() => {
        console.log(title.length === 0);
        if (title.length === 0) return;
        setResult({ status: 'loading' });
        fetch(`https://www.omdbapi.com/?s=${title}&apikey=1a937fbc`)
            .then((response) => response.json())
            .then((response) => setResult({ status: 'loaded', payload: response.Search }))
            .catch((error) => setResult({ status: 'error', error }));
    }, [title]);
    console.log(result);
    return result;
};

export default useMovieResultsService;
