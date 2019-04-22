import React from 'react';
import Image from './Image';

const CatItem = props => {
  return (
    <div className="cat-item">
      <Image {...props} />
    </div>
  );
};

export default CatItem;
