import React, { Component } from "react";
import Search from '../Components/Search'
import FilterContainer from './FilterContainer'
import Container from 'react-bootstrap/Container'


class SearchContainer extends Component {
    render() {
        return(
            <Container className='mt-4'>
                <div >
                    <Search />
                    <FilterContainer />
                </div>
            </Container>
        )
    }
}

export default SearchContainer