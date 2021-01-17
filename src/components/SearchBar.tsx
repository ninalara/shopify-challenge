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
        <div className="row">
            {/* <div className="col-12 searchBar">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchedTitle}
                    onChange={handleSearchedTitleChange}
                    onKeyDown={onEnter}
                />
            </div> */}
            <div className="col-4"></div>
            <div className="input-group col-4 searchBar">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        @
                    </span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                ></input>
            </div>
            <div className="col-4"></div>
        </div>
    );
};

export default SearchBar;
