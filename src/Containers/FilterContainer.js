import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import { MarketplaceDropdown, TypeDropdown } from "../Components/FilterButtons";
import {connect} from 'react-redux'

class FilterContainer extends Component {
    render() {
        return(
            <Container className="d-flex justify-content-around m-2">
                <Button variant="info">Free! 🤑</Button>
                <MarketplaceDropdown platforms={this.props.platforms}/>
                <TypeDropdown types={this.props.types}/>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const platforms = state.events.map((event) => event.platform_name)
    const types = state.events.map((event) => event.type_name)
    return {
        platforms: [...new Set(platforms)], 
        types: [...new Set(types)]
    }
}

export default connect(mapStateToProps)(FilterContainer)