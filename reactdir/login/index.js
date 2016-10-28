import './require/bootstrap.min.css'
import './require/bootstrap-theme.css'
import './require/ui-dialog.css'
import './require/site.css'
import './require/dropdown.js'
import './require/transition.js'
import './require/modal.js'
import './require/dialog-min.js'
import './require/tab.js'
import React    from 'react';
import ReactDOM from 'react-dom';
import LoginBox from './loginbox';
import 'whatwg-fetch';
const app = document.querySelector('#app');

const LoginPage = React.createClass({

  render() {
    return (
      <div className="out-container">
  <nav className="navbar outer">
    <div className="container-fluid">
      <a className="navbar-logo" href="/">
        <img title="Yokena" alt="Yokena" src="/static/img/logo.png" />
      </a>

      <ul className="nav navbar-nav nav-menu">
        <li>
          <a href="/#index">首页</a></li>
        <li data-menuanchor="feature">
          <a href="/#feature">功能</a></li>
        <li data-menuanchor="price">
          <a href="/#price">价格</a></li>
        <li><a href="javascript:void(0)">博客</a></li>
        <li><a href="javascript:void(0)">帮助</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" title="Global" className="global dropdown-toggle"></a>
          <ul className="dropdown-menu dropdown-homepage">
            <li><a href="/?lang=zh-CN">中国地区</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="/?lang=en_us">其他地区</a></li>
          </ul>
        </li>
        <li>

          <a className="signin active" href="javaScript:void(0)">

            登入
              </a>
      </li></ul>
    </div>
  </nav>
  <div className="container user-outer">
    
    
    <div className="content">
<LoginBox />


    </div>
    <footer className="footer-inverse">
      <section>
        ©Copyright 2016
        深圳市基域站网络科技有限公司
        <a id="icp" target="_blank" href="http://www.miitbeian.gov.cn/">
          粤ICP备14024331号
        </a>
        
      </section>
    </footer>
  </div>
  
</div>
    );
  }
});

ReactDOM.render(<LoginPage/>, app);
