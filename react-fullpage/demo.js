import React    from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header, Footer} from './index';
import License from './License';
import 'whatwg-fetch';

const app = document.querySelector('#app');



const Example = React.createClass({

  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['index', 'feature', 'price'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        true,
      sectionPaddingTop:    '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation:      false,
      delay:                750 // the scroll animation speed
    };
    
    return (
      <div className="container-fluid">
      <div className="navbar navbar-fixed-top H_Navbar">
            <div className="col-sm-12 col-md-12">
              <div className="navbar-header">
                <button type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#collapse-menu"
                        aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand"
                    title="让网络管理更简单"
                  href="">
                </a>
              </div>
              <div className="collapse navbar-collapse"
                  id="collapse-menu">
                <ul  className="nav navbar-nav H_Menu">
                  <li data-menuanchor="index"
                      className="active">
                    <a href="#index"
                      data-target="#H_Index" className="active">首页</a></li>
                  <li data-menuanchor="feature">
                    <a href="#feature"
                      data-target="#H_Feature">功能</a></li>
                  <li data-menuanchor="price">
                    <a href="#price"
                      data-target="#H_Price">价格</a></li>
                  <li><a href="javascript:void(0)">博客</a></li>
                  <li><a href="javascript:void(0)">帮助</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="#"
                      data-toggle="dropdown"
                      title="Global"
                      className="global dropdown-toggle"></a>
                    <ul className="dropdown-menu dropdown-homepage">
                      <li><a href="/?lang=zh_CN">中文</a></li>
                      <li role="separator"
                          className="divider"></li>
                      <li><a href="/?lang=en_US">英文</a></li>
                    </ul>
                  </li>
                  <li><a className="signin"
                        href="/signin">登入</a></li>
                </ul>
              </div>
            </div>
          </div>

      <div className="content">
    
  
  <div className="homepage H_Homepage ">
   <SectionsContainer  {...options}>
          <Section id="H_Index" className="index" >
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="row img">
                            <div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4 text-center">
                                <img id="H_IndexLogo"
                                    src="/static/img/logo-white.svg"
                                    alt="YOKENA"></img>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <p className="text-center">YOKENA云网关</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <p className="text-center">让网络管理变得更加轻松</p>
                            </div>
                            </div>
                        </div>
                        </div>
          </Section>
          <Section id="H_Feature" className="feature" >
                    <div className="row">
                        <div className="col-md-6 col-md-12  text-center">
                            <div className="row">
                            <div className="col-md-11 col-sm-11 col-md-offset-1 col-sm-offset-1">
                                <p className="title">YOKENA核心功能</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-1 col-sm-1 col-md-offset-2 col-sm-offset-2 text-right hidden-xs">
                                <img height="40"
                                    src="/static/img/homepage/user-groups.png"
                                    alt=""></img>
                            </div>
                            <div className="col-md-4 col-sm-4 text-left">
                                <p className="sub-title">用户接入管理</p>
                                <p className="descr">用户账号，时间</p>
                                <p className="descr">地点网络接入管理</p>
                            </div>
                            <div className="col-md-1 col-sm-1 hidden-xs">
                                <img height="40"
                                    src="/static/img/homepage/audio-wave.png"
                                    alt=""></img>
                            </div>
                            <div className="col-md-4 col-sm-4 text-left">
                                <p className="sub-title">网络带宽管理</p>
                                <p className="descr">控制用户，时间</p>
                                <p className="descr">或地的网络带宽</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-1 col-sm-1 col-md-offset-2 col-sm-offset-2 text-right hidden-xs">
                                <img height="40"
                                    src="/static/img/homepage/user-groups.png"
                                    alt=""></img>
                            </div>
                            <div className="col-md-4 col-sm-4 text-left">
                                <p className="sub-title">用户接入管理</p>
                                <p className="descr">用户账号，时间</p>
                                <p className="descr">地点网络接入管理</p>
                            </div>
                            <div className="col-md-1 col-sm-1 hidden-xs">
                                <img height="40"
                                    src="/static/img/homepage/audio-wave.png"
                                    alt=""></img>
                            </div>
                            <div className="col-md-4 col-sm-4 text-left">
                                <p className="sub-title">网络带宽管理</p>
                                <p className="descr">控制用户，时间</p>
                                <p className="descr">或地的网络带宽</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-1 col-sm-1 col-md-offset-2 col-sm-offset-2 text-right hidden-xs">
                                <img height="40"
                                    src="/static/img/homepage/user-groups.png"
                                    alt=""></img>
                            </div>
                            <div className="col-md-4 col-sm-4 text-left">
                                <p className="sub-title">用户接入管理</p>
                                <p className="descr">用户账号，时间</p>
                                <p className="descr">地点网络接入管理</p>
                            </div>
                            <div className="col-md-1 col-sm-1 hidden-xs">
                                <img height="40"
                                    src="/static/img/homepage/audio-wave.png"
                                    alt=""></img>
                            </div>
                            <div className="col-md-4 col-sm-4 text-left">
                                <p className="sub-title">网络带宽管理</p>
                                <p className="descr">控制用户，时间</p>
                                <p className="descr">或地的网络带宽</p>
                            </div>
                            </div>
                        </div>
                        </div>
          </Section>
          <Section   className="product text-center" >
<div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="license">
          <div className="content-wrap">
            <ul className="field list-unstyled">
              <li className="description">说明</li>
              <li>自定义模板</li>
              <li>自定义域名</li>
              <li>最大支持人数</li>
            </ul>
            
            <License />
             
          </div>
        </div>
      </div>
    </div>
             <footer>
          &copy;2016 深圳市基域站网络科技有限公司<a id="icp"
         target="_blank"
         href="http://www.miitbeian.gov.cn/">
        粤ICP备14024331号
      </a>
        </footer>
          </Section>

   </SectionsContainer>
  </div>

  </div>

      </div>
    );
  }
});



var RepoList = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      error: null,
      data: null
    };
  },

  componentDidMount() {

    var pro = fetch('/static/json/license.json')
      .then(function(response) {
        return response.json()
      });
    pro.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error})
      
      );
      
    

  },

  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data;
      var repoList = repos.map(function (repo, index) {
        var iscustomizedomain = "-";
        var isCustomizeTheme = "-";
        if (repo.Attribute.CustomizeDomain) {
          iscustomizedomain = "✓";
        }
        if (repo.Attribute.CustomizeTheme) {
          isCustomizeTheme = "✓";
        }
        return (
         <ul key ={index} className="list-unstyled"> <li className="name">{repo.Name}</li> <li className="price">  <p> <span className="currency text-primary">￥</span> <strong className="number text-primary">{repo.Price}</strong> </p> </li> <li className="description"> <p> {repo.Description} </p> </li> <li>  {isCustomizeTheme}  </li> <li>  {iscustomizedomain}  </li> <li> {repo.Attribute.CustomizeTheme} </li>  <li className="operate">   <a href="/user" className="btn btn-primary">购买</a>   </li> </ul>
          //<li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
        );
      });
      return (
       <div className="license-list H_PlanList">   {repoList}</div>
      );
    }
  }
});


ReactDOM.render(<Example/>, app);
