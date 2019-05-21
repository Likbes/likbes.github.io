import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const HistoryBlock = ({
  products
}) => {

  const renderBlocks = () => (
    products ?
      products.map(({
        id,
        name,
        brand,
        price,
        quantity,
        dateOfPurchase,
      }) => (
        <tr key={`${id}-${dateOfPurchase}`}>
          <td>{moment(dateOfPurchase).format('MM-DD-YYYY')}</td>
          <td>{`${brand} - ${name}`}</td>
          <td>{price}</td>
          <td>{quantity}</td>
        </tr>
      )) : ''
  );

  return (
    <div className="history_blocks">
      <table>
        <thead>
          <tr>
            <th>Date of purchase</th>
            <th>Product</th>
            <th>Price paid</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {renderBlocks()}
        </tbody>
      </table>
    </div>
  );
};

HistoryBlock.propTypes = {
  products: PropTypes.array,
};

export default HistoryBlock;
