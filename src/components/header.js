import React from 'react';


const Header = (props)=>{
    let {onSearchByTag,searchVal,onKeyValueChange,onSearch} =props;
    return (
         <div className='header_div'>
             <div>
                <h2>Search<span>it</span></h2>
             </div>
            <div className="searchdiv">
                <div>
                    <h3>Free stock photos for everything</h3>
                    <h6>we offer the best free stock photo's all in one place</h6>
                    <h5>Search&nbsp;by&nbsp;tags:&nbsp;
                    <span onClick={onSearchByTag}>Dog</span>
                    <span onClick={onSearchByTag}>Cat</span>
                    <span onClick={onSearchByTag}>Space</span>
                    <span onClick={onSearchByTag}>Nature</span>
                    <span onClick={onSearchByTag}>Business</span>
                    <span onClick={onSearchByTag}>Office</span>
                    <span onClick={onSearchByTag}>Cofee</span>
                    <span onClick={onSearchByTag}>World</span></h5>
                    <input type="text" placeholder="search for images here" onChange={onKeyValueChange} name='search'
                    value={searchVal}
                    />&nbsp;
                    <button onClick={onSearch}>search</button>
                </div>
            </div>
        </div>
    )
}
export default Header;