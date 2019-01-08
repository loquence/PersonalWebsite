import React, { Component } from 'react';
import { Switch, Route, Redirect /* withRouter*/ } from 'react-router-dom';
/*import { connect } from 'react-redux';*/

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Portfolio from './PortfolioComponent';
import Jumbo from './JumboComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Main extends Component {

    render(){
        
        
        return(
            <div>
                <Header />
                <Jumbo />
                <br />
                <br />
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.pathname} classNames="page" timeout={300}>
                        <Switch>
                            <Route path={'/home'} component={Home} />
                            <Route exact path={'/portfolio'} component={Portfolio} />
                            <Redirect to={'/home'}  />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>        
                    
                <Footer />
            </div>
        );
    }
}

export default Main;