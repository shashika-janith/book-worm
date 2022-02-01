import BookCard from './book-card';
import Filter from './filter';
import SectionHeader from '../../../components/section-header';

import { books } from '../../../helpers/mock-data/books';

import './index.scss';

const BrowseBooks = () => {
  const renderBooks = () => {
    return books.map(i => <BookCard {...i} />);
  }

  return (
    <div className='grid gap-4 grid-flow-col auto-cols-auto browse-books'>
      <Filter />

      <div className="books-container">
        <SectionHeader title="Books" />
        <div className="books-wrapper grid gap-3 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
          {renderBooks()}
        </div>
      </div>
    </div>
  );

}

export default BrowseBooks;