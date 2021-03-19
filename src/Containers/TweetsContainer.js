import React, { Component } from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Container from 'react-bootstrap/Container'


class TweetsContainer extends Component {
    render() {
        return (
            <Container className='w-25'>
                <div>
                    <TwitterTimelineEmbed 
                    sourceType="list" 
                    id="1372285702868758535" 
                    // noHeader
                    noFooter
                    noBorders
                    // noScrollbar
                    transparent
                    
                    // linkColor='orange'
                    theme='dark'
                    // options={{height: 100}}

                    />
                </div>
                {/* <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                noHeader={true} 
                options={{height: 400}}
                /> */}
            </Container>
        )
    }
}

export default TweetsContainer