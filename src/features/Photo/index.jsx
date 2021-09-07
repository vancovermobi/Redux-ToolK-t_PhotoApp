import React from 'react';
import PropTypes from 'prop-types';
import { Route , Switch , useRouteMatch  } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';
import NotFound from 'components/NotFound';

const Photo = props => {
    const match = useRouteMatch();
    // console.log("useRouteMatch: ",match);
    
    return (
        <Switch>
            <Route exact path={ match.url } component={ MainPage }/>

            <Route path={ `${match.url}/add` } component={ AddEditPage }/>
            <Route path={ `${match.url}/:photoId` } component={ AddEditPage }/>

            <Route component={ NotFound }/>
        </Switch>
    )
}

Photo.propTypes = {

}

export default Photo;
