import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Http } from "../data/Http";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { email: 'admin@explore.com', password: '123456' }
    }

    _handleChange(name, event) {
        this.setState({ [name]: event.target.value });
    }

    async _handleSubmit() {
        const http = new Http('auth');
        const data = await http.post('authenticate', this.state);
        this._saveLoginInfo(data);
    }

    _saveLoginInfo(loginInfo) {
        localStorage.setItem('token', loginInfo.token);
        localStorage.setItem('user', JSON.stringify(loginInfo.user));
    }

    render() {
        return (
            <div className="LoginContainer">
                <Card className="ex-login-container">
                    <form>
                        <CardContent>
                            <h3>Welcome to Exploore!</h3>
                            <div className="ex-input">
                                <Input type="text" placeholder="email"
                                       onChange={this._handleChange.bind(this, 'email')} value={this.state.email} />
                                <Input type="password" placeholder="password"
                                       onChange={this._handleChange.bind(this, 'password')} value={this.state.password} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <div className="ex-auth-buttons">
                                <Button variant="contained" color="primary" onClick={this._handleSubmit.bind(this)}>
                                    Login
                                </Button>
                                <Button variant="contained" color="primary">
                                    Register
                                </Button>
                            </div>
                        </CardActions>
                    </form>
                </Card>
            </div>
        );
    }
}

export default LoginContainer;
