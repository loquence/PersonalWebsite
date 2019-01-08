import React from 'react';
import { Row } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function Home() {
    return (
        
        <>
            <FadeTransform in transformProps={{exitTrasform: 'scale(0.5) translateY(-50%)'}} >
                <Row>
                    <div className="col-sm-6 col-md-4 offset-md-4">
                        <h1 className="aboutme" align="center">About me</h1>
                        <br />
                        <div className="col-12"> 
                            <p>I'm a recent graduate from the University of Georgia with a B.S. in Computer Science. I'm experienced
                                in React, Javascript, C#, .NET framework, HTML, and CSS. I have developed multiple applications in Agile
                                and Scrum environments.    
                            </p>
                        </div>
                    </div>
                </Row>
            </FadeTransform>
        </>    
        
    );
}

export default Home;