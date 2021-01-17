import { useEffect, useState } from 'react';
import { API } from '../types/API';
import { Movies } from '../types/Movie';

const useMovieResultsService = (title: string): API<Movies> => {
    const [result, setResult] = useState<API<Movies>>({
        status: 'init',
        payload: undefined,
    });

    // result will be empty if the the searchedTitle's last character is a space
    // to fix this, remove the space character at the end of the string
    const isLastCharSpace = title.slice(-1) === ' ';
    if (isLastCharSpace) title = title.slice(0, -1);

    useEffect(() => {
        if (title.length === 0) return;
        setResult({ status: 'loading', payload: undefined });
        fetch(`https://www.omdbapi.com/?s=${title}&apikey=1a937fbc`)
            .then((response) => response.json())
            .then((response) =>
                setResult({
                    status: 'loaded',
                    payload: response.Search,
                }),
            )
            .catch((error) => setResult({ status: 'error', error }));
    }, [title]);
    console.log(result);
    return result;
};

export default useMovieResultsService;
