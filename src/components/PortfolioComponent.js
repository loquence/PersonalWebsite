import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

/*

*/

function RenderPortfolio() {
  return(
    <>
      <div className="col-12 col-md-4 m-1">
              <Card >
                  <a href="https://essentialportfolio.azurewebsites.net">
                      <CardImg width="100%" src={process.env.PUBLIC_URL + '/assets/images/essentialportfolio.png'}  alt="essential portfolio"/>
                  </a>
                      <CardBody>
                          <CardTitle>Essential Portfolio</CardTitle>
                          <CardText>A website built using the C# and the .NET Framework. It is deployed and hosted on azure.</CardText>
                      </CardBody>
                  
              </Card>
      </div>
      <div className="col-12 col-md-4 m-1">
          <Card >
                  <a href="https://loquence.github.io/FABRIK/">
                      <CardImg width="100%" src={process.env.PUBLIC_URL + '/assets/images/fabrikdocumentation.png'}  alt="fabrik doc"/>
                  </a>
                      <CardBody>
                          <CardTitle>Fabrick Documentation</CardTitle>
                          <CardText>A website hosting all the documention for the essential portfolio developed by the Fabrik group in the Human-Computer Interactions Class</CardText>
                      </CardBody>
                  
              </Card>
      </div>
      
      

    </>
  );
}


function Portfolio(props) {
    return(
      <div className="container">
          <div classname="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active><Link to='/portfolio'>Portfolio</Link></BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                            <h3>Portfolio</h3>
                            <hr />
            </div>
          </div>
          <div className="row">
          <RenderPortfolio />
          </div>
      </div>
    );
}

export default Portfolio;   