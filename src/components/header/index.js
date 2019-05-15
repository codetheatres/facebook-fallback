import React from 'react';
import './index.css';
import pepsi from '../../images/pepsi.png'
import axios from 'axios';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            isFormSubmitted: false
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        this.setState({ isFormSubmitted: true });
        axios.get("https://api.kanye.rest/")
            .then(
                res => {
                    const data = res.data;
                    console.log(data);
                    this.setState({ id: data.id });
                }
            )

    }

    changeHandler(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        if (name === 'email') {
            this.setState({ email: value });
        }
        else {
            this.setState({ password: value });
        }
    }

    render() {

        const isFormSubmitted = this.state.isFormSubmitted;
        let element;

        if (!isFormSubmitted) {
            element = (
                <div>
                    <div className="left-container">
                        <img src={pepsi} alt="pepsi" className="image-resize"></img>
                    </div>
                    <div className="right-container">
                        <div className="login">
                            <form onSubmit={this.submitHandler}>
                                <div>
                                    <span>Email</span>
                                    &nbsp;
                            <span>
                                        <input className="email" type="text" name="email" value={this.state.email} onChange={this.changeHandler} />
                                    </span>
                                    &nbsp;
                            <span>Password</span>
                                    &nbsp;
                            <span>
                                        <input className="password" type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                                    </span>
                                    &nbsp;
                            <span><a href="https://www.codetheatres.com/">Forgot Password?</a></span>
                                </div>
                                <div>
                                    <input className="button-resize" type="submit" defaultValue="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            element = (
                <div>
                    {this.state.id}
                </div>
            );
        }

        return (
            <div className="header">{element}</div>
        );
    }
}

export default Header;