import React, { Component } from 'react';
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

export default function App({children}) {
  return (
    <div className={cc.main}>
      {
        children
      }
    </div>
  );
}
