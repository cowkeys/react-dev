import React    from 'react';

class LoginBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {
        return (
         <div className="form-wrap">
                <div className="form-header">
                    <h3>登入</h3>
                </div>
                <form method="post" className="text-left form-signin">
                    <div className="form-group">
                    <label htmlFor="username">账户名</label>
                    <input type="text" name="username" className="form-control" id="username" placeholder="电子邮箱或者手机号码" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input name="password" id="password" className="form-control" placeholder="注册账户时所用密码" type="password" />
                    </div>
                    <button id="btn_signin" type="submit" className="btn btn-primary btn-form">登入</button>
                    <div className="form-group over-flow">
                        <a href="javascript:void(0)" type="button" data-target="#modal_signup" className="btn btn-link pull-left">
                        无账号，注册
                        </a>
                    <a href="/password" className="btn btn-link pull-right">忘记密码</a>
                    </div>
                </form>
        </div>
        );
  }

}

export default LoginBox 