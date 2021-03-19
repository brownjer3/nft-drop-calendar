import React, { Component } from "react";
import Search from '../Components/Search'
import FilterContainer from './FilterContainer'
import Container from 'react-bootstrap/Container'


class SearchContainer extends Component {
    render() {
        return(
            <Container>
                    <Search handleInputChange={this.props.handleInputChange}/>
                    <FilterContainer />
            </Container>
        )
    }
}

export default SearchContainer