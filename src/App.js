import AppHeader from './components/header';

import Carousel from './home/carousel';
import BookCategories from './home/book-categories';
import AppLayout from './components/layouts/app-layout';
import Newsletter from './components/newsletter';
import BrowseBooks from './views/browse-books';
import Footer from './components/footer';

import Routes from './routes';

import './assets/sass/main.scss';

function App() {
  return (
    <div>
      {/* <AppHeader />
      <AppLayout>
        <Carousel />
        <BookCategories />
        <BrowseBooks />
        <Newsletter />
      </AppLayout> */}
      <AppHeader />
      
      <AppLayout>
        <Routes />
      </AppLayout>

      <Footer />
    </div>
  );
}

export default App;
