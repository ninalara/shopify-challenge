/* eslint react/prop-types: 0 */
import React from 'react';
interface Props {
    searchedTitle: string;
    onSearchedTitleChange: (searchedTitle: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchedTitle, onSearchedTitleChange }) => {
    const handleSearchedTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        onSearchedTitleChange(event.target.value);
    };
    const onEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') event.preventDefault();
    };

    return (
        <>
            <label>Movie Title</label>
            <form>
                <input type="text" value={searchedTitle} onChange={handleSearchedTitleChange} onKeyDown={onEnter} />
            </form>
        </>
    );
};

export default SearchBar;
