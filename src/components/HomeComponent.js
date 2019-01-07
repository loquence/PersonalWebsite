import React from 'react';
import { Row } from 'reactstrap';

function Home() {
    return (
        
        <>
            
            <Row>
                <div className="col-sm-6 col-md-4 offset-md-4">
                    <h1 className="aboutme" align="center">About me</h1>
                    <br />
                    <div className="col-12"> 
                        <p>I'm a recent graduate from the University of Georgia with a BS in Computer Science. I'm experienced
                            in React, Javascript, C#, .NET framework, HTML, and CSS. I have developed multiple applications in Agile
                            and Scrum enviroments during group projects.    
                        </p>
                    </div>
                </div>
            </Row>
        </>    
        
    );
}

export default Home;