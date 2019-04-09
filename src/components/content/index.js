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
                                <input type="text" name="firstname" value="" placeholder="First Name" />
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                                <input type="text" name="lastname" value="" placeholder="Last Name" />
                            </span>
                        </div>
                        &nbsp;&nbsp;
                        <div>
                            <input type="text" name="mobileno" value="" placeholder="Mobile No" />
                        </div>
                        &nbsp;&nbsp;
                        <div>
                            <input type="password" name="password" value="" placeholder="New Password" />
                        </div>
                        &nbsp;&nbsp;
                        <div>
                            <label>Birthday</label>
                            &nbsp;
                            <span>
                                <select>
                                    <option value="1">01</option>
                                </select>
                                <select>
                                    <option value="1">Jan</option>
                                </select>
                                <select>
                                    <option value="1">2018</option>
                                </select>
                                <a href="https://www.codilar.com/">Why do I need to provide date of birth?</a>
                            </span>
                        </div>
                        &nbsp;&nbsp;
                        <div>
                            <div className="gender">
                                <input type="radio" name="male" defaultValue="1" /><span className="male">Male</span>
                            </div>

                            <div className="gender">
                                <input type="radio" name="female" defaultValue="2" /><span className="female">Female</span>
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
                            <input type="button" value="Sign Up"/>
                        </div>
                        <div>
                            <label>
                                <h2><a href="https://www.codetheatres.com/">Create a Page</a> for celebrity, band and business.</h2>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;