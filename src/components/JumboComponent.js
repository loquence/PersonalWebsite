import React from 'react';
import {Jumbotron } from 'reactstrap';

function Jumbo() {
    return(
        <>
        <Jumbotron className="img-shadow">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12">
                                <img className="rounded-circle mx-auto d-block" src="/assets/images/profileimage.jpg" />
                            </div>
                        </div>
                        <div className="row row-header">
                            <div className="col-12 col-md-6 offset-md-3">
                                <h1 align="center">Ryan Kennedy</h1>
                                <hr />
                                <h3 align="center"><i>Web Developer</i></h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
        </>
    );
}

export default Jumbo;