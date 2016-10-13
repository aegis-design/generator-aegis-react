/* @flow */

import React from 'react';
import { connect } from 'react-redux';
<% if (style === 'less') { -%>
import cc from './style.less';
<% } -%>
<% if (style === 'sass') { -%>
import cc from './style.sass';
<% } -%>
<% if (style === 'scss') { -%>
import cc from './style.scss';
<% } -%>
<% if (style === 'styl') { -%>
import cc from './style.styl';
<% } -%>
<% if (style === 'css') { -%>
import cc from './style.css';
<% } -%>

@connect(state => state.home)
export default class App extends React.Component {
  state: {
    content: string
  };

  constructor(props:{content:string}) {
    super(props);
    this.state = {
      content: props.content
    };
  }

  render() {
    return (
      <div className={cc.main}>{this.state.content}</div>
    );
  }
}
