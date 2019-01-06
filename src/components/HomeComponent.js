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
                        <p>I'm a new graduate from the University of Georgia. I liek stuff and other stuff and 
                        I'm just filling this up now until i actually get something that can go here. I really like football
                        and sports and playing guitar and this is really bad grammar.    
                        </p>
                    </div>
                </div>
            </Row>
        </>    
        
    );
}

export default Home;