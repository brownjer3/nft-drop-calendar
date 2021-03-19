import React, { Component } from "react";
import Search from '../Components/Search'
import FilterContainer from './FilterContainer'
import Container from 'react-bootstrap/Container'


class SearchContainer extends Component {
    render() {
        return(
            <Container>
                <div>
                    <Search handleInputChange={this.props.handleInputChange}/>
                    <FilterContainer />
                </div>
            </Container>
        )
    }
}

export default SearchContainer