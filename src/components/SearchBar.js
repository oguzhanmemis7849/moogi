import React from 'react';
import { Button } from 'reactstrap';
import searchIcon from '../images/search-button-icon.svg';

const SearchBar = () => {
        return (
            <div id="searchBar">
                <input placeholder="Ürün arayın" type="text" />
                <Button className='searchBack'>
                    <img className="searchIcon" src={searchIcon} alt="searchIcon" />
                </Button>
            </div>
        );
}

export default SearchBar;