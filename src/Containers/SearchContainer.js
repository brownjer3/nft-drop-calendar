import React, { Component } from "react";
import Search from '../Components/Search'
import FilterContainer from './FilterContainer'


class SearchContainer extends Component {
    render() {
        return(
            <div>
                <div className="App-header border border-success">
                    SEARCH HEADER
                    <Search />
                    <FilterContainer />
                </div>
            </div>
        )
    }
}

export default SearchContainer