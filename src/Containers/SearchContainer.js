import React, { Component } from "react";
import Search from '../Components/Search'


class SearchContainer extends Component {
    render() {
        return(
            <div>
                <div className="App-header">
                    SEARCH HEADER
                </div>
                <div className="d-flex justify-content-center">
                    <Search />
                </div>
            </div>
        )
    }
}

export default SearchContainer