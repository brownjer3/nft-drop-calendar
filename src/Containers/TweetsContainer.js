import React, { Component } from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Container from 'react-bootstrap/Container'


class TweetsContainer extends Component {
    render() {
        return (
            <Container className='w-50'>
                <div>
                    <TwitterTimelineEmbed 
                        sourceType="list" 
                        id="1372285702868758535" 
                        // noHeader
                        noFooter
                        noBorders
                        // noScrollbar
                        transparent
                        theme='dark'
                        options={{height: 600}}
                    />
                </div>
            </Container>
        )
    }
}

export default TweetsContainer