import React from 'react';
import './index.css';
import pepsi from '../../images/pepsi.png'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="left-container">
                    <img src={pepsi} alt="pepsi" className="image-resize"></img>
                </div>
                <div className="right-container">
                    <div className="login">
                        <div>
                            <span>Email</span>
                            &nbsp;
                            <span>
                                <input className="email" type="text" name="email" defaultValue="" />
                            </span>
                            &nbsp;
                            <span>Password</span>
                            &nbsp;
                            <span>
                                <input className="password" type="password" name="password" defaultValue="" />
                            </span>
                            &nbsp;
                            <span><a href="https://www.codetheatres.com/">Forgot Password?</a></span>
                        </div>
                        <div>
                            <input className="button-resize" type="submit" defaultValue="Login" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;