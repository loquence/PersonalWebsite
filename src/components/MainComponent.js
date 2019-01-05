import React, { Component } from 'react';
import { Switch, Route, Redirect /* withRouter*/ } from 'react-router-dom';
/*import { connect } from 'react-redux';*/

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';



class Main extends Component {


    render(){
        
        return(
            <div>
                <Header />
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
                    <Redirect to={process.env.PUBLIC_URL + '/'}  />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;