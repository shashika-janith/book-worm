import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';

import SignIn from './views/sign-in';

import RouteRegistry from './constants/route-registry';
import Error from './views/error';
import ContactUs from './views/contact-us';
import NotFound from './views/not-found';
import BookDetails from './views/book-details';
import Books from './views/books';

const ErrorRoute = () => (
  <Navigate to={RouteRegistry.notFound.path} replace={true} />
)

const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route 
          exact
          path={RouteRegistry.appRoot.subroutes.browseBooks.path}
          element={<Books />}
        />
        <Route 
          exact
          path={RouteRegistry.appRoot.subroutes.bookDetails.path}
          element={<BookDetails />}
        />
        <Route
          path={RouteRegistry.userRoot.subroutes.login.path}
          exact
          element={<SignIn />}
        />
        <Route
          path={RouteRegistry.contactUs.path}
          exact
          element={<ContactUs />}
        />
        <Route
          path={RouteRegistry.notFound.path}
          exact
          element={<BookDetails />}
        />
        <Route 
          path="*"
          element={<ErrorRoute />}
        />
        {/* <Navigate to={RouteRegistry.notFound.path} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes;