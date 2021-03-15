import React, { Component } from "react";
import Search from '../Components/Search'
import FilterContainer from './FilterContainer'


class SearchContainer extends Component {
    render() {
        return(
            <div className='mt-4'>
                <div className="App-header ">
                    {/* SEARCH HEADER */}
                    <Search />
                    <FilterContainer />
                </div>
            </div>
        )
    }
}

export default SearchContainer