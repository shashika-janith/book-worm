import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import SignIn from './views/sign-in';

import RouteRegistry from './constants/route-registry';
import Error from './views/error';
import ContactUs from './views/contact-us';
import NotFound from './views/not-found';
import BookDetails from './views/book-details';

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route 
          path={RouteRegistry.appRoot.subroutes.bookDetails.path}
          render={(props) => <BookDetails {...props} />}
        />
        <Route
          path={RouteRegistry.userRoot.subroutes.login.path}
          exact
          render={(props) => <SignIn {...props} />}
        />
        <Route
          path={RouteRegistry.contactUs.path}
          exact
          render={(props) => <ContactUs {...props} />}
        />
        <Route
          path={RouteRegistry.notFound.path}
          exact
          render={(props) => <BookDetails {...props} />}
        />
        <Redirect to={RouteRegistry.notFound.path} />
      </Switch>
    </Router>
  )
}

export default Routes;