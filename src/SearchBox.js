import React from 'react';

const SerarchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search for Styles"
                onChange={searchChange}
            />
        </div>
    );
}
export default SerarchBox;