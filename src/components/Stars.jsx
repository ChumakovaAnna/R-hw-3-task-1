import React from 'react';
import PropTypes from 'prop-types';
import Star from "./Star";

Stars.propTypes = {
  count: PropTypes.number,
};

Stars.defaultProps = {
  count: 0,
}

function Stars({ count }) {
  if (!Number(count) || count < 0 || count > 5) {
    return null
  }

  const listStars = [];
  for (let i = 0; i < count; i += 1) {
    listStars.push(i);
  }

  return (
    <ul class="card-body-stars u-clearfix">
      {listStars.map(item => <li key={item}><Star /></li>)}
    </ul>
  );
}

export default Stars;