import React    from 'react';

class Licenses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             loading: true,
             error: null,
             data: null
        }
    }

    componentDidMount() {

    var pro = fetch('/static/json/license.json')
      .then(function(response) {
        return response.json()
      });
    pro.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error})
      
      );
    }

    render() {
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

}

export default Licenses 