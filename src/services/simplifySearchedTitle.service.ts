import { API } from '../types/API';
import { Movies } from '../types/Movie';
import useMovieResultsService from './useMovieResults.service';

// const searchedTitle = useSimplifySearchedTitle(title);
const useSimplifySearchedTitle = (title: string): [string, API<Movies>] => {
    // result will be empty if the the searchedTitle's last character is a space
    const isLastCharSpace = title.slice(-1) === ' ';
    if (isLastCharSpace) title = title.slice(0, -1);

    let searchResults = useMovieResultsService(title);
    if (searchResults.status === 'loaded' && searchResults.payload === undefined) {
        title = title.slice(0, title.lastIndexOf(' '));
    }
    console.log(title);
    searchResults = useMovieResultsService(title);
    return [title, searchResults];
};

export default useSimplifySearchedTitle;
