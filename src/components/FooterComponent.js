import React, { Component } from 'react';

import { Tooltip } from 'reactstrap';


class Footer extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
        
    }

    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
      }


    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-sm-4 align-self-center">
                            <br />
                            <h4 align="center" className="aboutme">Contacts: </h4>
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-linkedin m-1" href="http://www.linkedin.com/in/ryan-kennedy-cs/"id="linkedin"><i className="fa fa-linkedin"></i></a>
                                <Tooltip placement="left" isOpen={this.state.tooltipOpen}  target="linkedin" toggle={this.toggle}>Linked In</Tooltip>
                                <a className="btn btn-social-igon btn-github m-1" id="github" href="https://github.com/loquence"><i className="fa fa-github"></i></a>
                                <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="github" toggle={this.toggle}>Github</Tooltip>
                                <a className="btn btn-social-icon m-1" id="email" href="mailto:ryan.kennedy2@gmail.com"><i className="fa fa-envelope-o"></i></a>
                                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="email" toggle={this.toggle}>Email</Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Footer;