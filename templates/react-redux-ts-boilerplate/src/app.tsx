/**
 * Created by Zhengfeng.Yao on 16/10/2.
 */
import * as React from 'react';
import { connect } from 'react-redux';
// <% if (style === 'less') { -%>
import './style.less';
// <% } -%>
// <% if (style === 'sass') { -%>
// import './style.sass';
// <% } -%>
// <% if (style === 'scss') { -%>
// import './style.scss';
// <% } -%>
// <% if (style === 'styl') { -%>
// import './style.styl';
// <% } -%>
// <% if (style === 'css') { -%>
// import './style.css';
// <% } -%>

@connect(state => state.app)
export default class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content
    };
  }

  render() {
    return (
      <div className="main">
        {
          this.state.content
        }
      </div>
    );
  }
}
