const RouteRegistry = {
  landing: {
    path: '/',
  },
  privacy: {
    path: '/privacy',
  },
  terms: {
    path: '/terms',
  },
  contactUs: {
    path: '/contact-us',
  },
  appRoot: {
    path: '/app',
    subroutes: {
      bookDetails: {
        path: '/details/:bookId'
      }
    }
  },
  userRoot: {
    path: '/user',
    subroutes: {
      login: {
        path: "/login"
      },
      register: {
        path: "/register"
      }
    }
  },
  notFound: {
    path: '/not-found',
  },
  error: {
    path: '/error',
  },
  unauthorize: {
    path: '/unauthorized',
  },
}

export default RouteRegistry;