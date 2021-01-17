import useMovieResultsService from './useMovieResults.service';

const simplifySearchedTitle = (title: string): string => {
    // result will be empty if the the searchedTitle's last character is a space
    const isLastCharSpace = title.slice(-1) === ' ';
    if (isLastCharSpace) title = title.slice(0, -1);

    const searchResults = useMovieResultsService(title);
    while (searchResults.status !== 'loaded') {}
    if (searchResults.payload.length === 0) {
        title = title.slice(0, title.lastIndexOf(' ') - 1);
    }
    return title;
};

export default simplifySearchedTitle;
