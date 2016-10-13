/**
 * Created by Zhengfeng.Yao on 16/10/11.
 */
/* @flow */

import React from 'react';
import { connect } from 'react-redux';
<% if (style === 'less') { -%>
import cc from './home.less';
<% } -%>
<% if (style === 'sass') { -%>
import cc from './home.sass';
<% } -%>
<% if (style === 'scss') { -%>
import cc from './home.scss';
<% } -%>
<% if (style === 'styl') { -%>
import cc from './home.styl';
<% } -%>
<% if (style === 'css') { -%>
import cc from './home.css';
<% } -%>

@connect(state => state.home)
export default class Home extends React.Component {
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
