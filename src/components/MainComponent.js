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
                    <Route path={'/'} component={Home} />
                    <Redirect to={'/'}  />
                    
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;