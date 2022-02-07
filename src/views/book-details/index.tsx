import React, { useState } from 'react';

import Price from './price';
import BookDesc from './tab-book-desc';
import GlideComponent from '../../components/carousel/GlideComponent';

import './index.scss';

import { bookDetails } from '../../helpers/mock-data/book-details';

const Tab = {
  DESC: 1,
  BOOK_DETAILS: 2,
  REVIEWS: 3,
}

const BookDetails = () => {
  const [tab, setTab] = useState(Tab.DESC);

  const onSelectTab = (tab: number) => setTab(tab);

  const handleTabChange = () => {}

  return (
    <>
      <div className="row book-details-wrapper">
        <div className="col-4">
          <GlideComponent
            settings={{
              gap: 0,
              perView: 1,
              type: 'carousel',
              hideNav: true,
            }}
          >
            <div>
              <img className="mx-auto" src="/assets/images/banners/book-1.png" />
            </div>
          </GlideComponent>
        </div>
        <div className="col-8">
          <h2 className="book-title">Where the Crawdads Sing</h2>
          <Price price={2500} discountedPrice={1750} />
          <p>By (author) <span className="author">Anna Banks</span></p>
        </div>
      </div>

      <div className="row mt-2 book-details-wrapper">
        <div className="col-12">
          <div className="tabs tabs-boxed justify-center">
            <a className="tab" tab-id={Tab.DESC} onClick={() => onSelectTab(Tab.DESC)}>Description</a>
            <a className="tab" tab-id={Tab.BOOK_DETAILS} onClick={() => onSelectTab(Tab.BOOK_DETAILS)}>Book Details</a>
            <a className="tab" tab-id={Tab.REVIEWS} onClick={() => onSelectTab(Tab.REVIEWS)}>Reviews</a>
          </div>
        </div>

        <div className="col-12">
          <BookDesc desc={bookDetails.description} />
        </div>
      </div>
    </>
  );

}

export default BookDetails;