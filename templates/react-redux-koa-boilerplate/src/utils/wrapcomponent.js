import React from 'react';

export default (Component, props) => React.createClass({
  render: () => React.createElement(Component, props)
});
