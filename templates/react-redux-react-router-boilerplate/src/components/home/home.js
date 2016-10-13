/**
 * Created by Zhengfeng.Yao on 16/10/2.
 */
/* @flow */

import React, { Component } from 'react';
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
export default class Home extends Component {
  render() {
    return (
      <div className={cc.home}>
        {this.props.content}
      </div>
    );
  }
}
