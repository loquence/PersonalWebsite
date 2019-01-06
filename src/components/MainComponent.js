import React, { Component } from 'react';
import { Switch, Route, Redirect /* withRouter*/ } from 'react-router-dom';
/*import { connect } from 'react-redux';*/

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Portfolio from './PortfolioComponent';
import Jumbo from './JumboComponent';



class Main extends Component {

    

    render(){
        const PortfolioPage = () => {
            return(
                <Portfolio />
            );
          }
        
        return(
            <div>
                <Header />
                <Jumbo />
                <br />
                <br />
                <Switch>
                    <Route path={'/home'} component={Home} />
                    <Route exact path={'/portfolio'} component={PortfolioPage} />
                    <Redirect to={'/home'}  />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;