import React, { Component } from "react";
import Search from '../Components/Search'
import FilterContainer from './FilterContainer'
import Container from 'react-bootstrap/Container'


class SearchContainer extends Component {
    render() {
        return(
            <Container>
                    <Search handleSubmit={this.props.handleSubmit} handleInputChange={this.props.handleInputChange}/>
                    <FilterContainer handleFilters={this.props.handleFilters} handleInputChange={this.props.handleInputChange}/>
            </Container>
        )
    }
}

export default SearchContainer