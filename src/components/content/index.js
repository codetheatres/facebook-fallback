import React from 'react';
import './index.css';

class Content extends React.Component {

    render() {
        return (
            <div className="content">
                <div className="content-left">
                </div>
                <div className="content-right">
                    <div className="content-right-top">
                        <h1>Create a new account</h1>
                        <h4>It's free and always will be.</h4>
                    </div>
                    <div className="content-right-middle">
                        <div>
                            <span>
                                <input type="text" name="firstname" defaultValue="" placeholder="First Name" />
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                                <input type="text" name="lastname" defaultValue="" placeholder="Last Name" />
                            </span>
                        </div>
                        &nbsp;&nbsp;
                        <div>
                            <input type="text" name="mobileno" defaultValue="" placeholder="Mobile No" />
                        </div>
                        &nbsp;&nbsp;
                        <div>
                            <input type="password" name="password" defaultValue="" placeholder="New Password" />
                        </div>
                        &nbsp;&nbsp;
                        <div>
                            <label>Birthday</label>
                            &nbsp;
                            <span>
                                <select>
                                    <option defaultValue="1">01</option>
                                </select>
                                <select>
                                    <option defaultValue="1">Jan</option>
                                </select>
                                <select>
                                    <option defaultValue="1">2018</option>
                                </select>   
                                <a href="https://www.codilar.com/">Why do I need to provide date of birth?</a>
                            </span>
                        </div>
                        &nbsp;&nbsp;
                        <div>
                            <div className="gender">
                                <input type="radio" name="gender" defaultValue="1" /><span className="male">Male</span>
                            </div>

                            <div className="gender">
                                <input type="radio" name="gender" defaultValue="2" /><span className="female">Female</span>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="content-right-bottom">
                        <div>
                            <label>
                            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <input className="signup" type="button" value="Sign Up"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;