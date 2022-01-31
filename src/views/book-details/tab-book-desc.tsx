import React, { useState } from 'react';

interface IProps {
  desc: string
}

const BookDesc = ({ desc }: IProps) => {

  return (
    <div className="book-desc-wrapper p-3">
      <p>{desc}</p>
    </div>
  );

}

export default BookDesc;