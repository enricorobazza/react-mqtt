import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Publish from './pages/Publish';
import Subscribe from './pages/Subscribe';

function Routes(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={()=><h1>Index Page</h1>} />
                    <Route exact path="/publish" component={Publish} />
                    <Route exact path="/subscribe" component={Subscribe} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;