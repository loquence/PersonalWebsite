import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

/*
<div className="col-12 col-md-4 m-1">
          <Card >
                  <a href="">
                      <CardImg width="100%" src={process.env.PUBLIC_URL + '/assets/images/RyanResume.pdf'}  alt="resume"/>
                  </a>
                      <CardBody>
                          <CardTitle>Resume</CardTitle>
                          <CardText>A website built using the C# and the .NET Framework. It is deployed and hosted on azure.</CardText>
                      </CardBody>
                  
              </Card>
      </div>
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