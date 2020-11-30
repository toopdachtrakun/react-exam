import React, { useState } from 'react';
import './Login.css';
import { FaFacebookSquare, FaGooglePlusSquare } from 'react-icons/fa';

function Login() {
    return (
        <div>
            <section className="login-regis">
                <div className="nav-tab">
                    <div className="tab">
                        <button className="tablinks active" >LOGIN</button>
                        <button className="tablinks" >REGISTER</button>
                    </div>
                </div>
                <div className="nav-tab">
                    <div className="tab content-tab">
                        <div id="London" className="tabcontent active">
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="text" placeholder="Passowrd" />
                            </div>
                            <div className="form-group">
                                <a href="">
                                    <FaFacebookSquare size={35} />
                                </a>
                                <a href="">
                                    <FaGooglePlusSquare size={35} />
                                </a>
                            </div>
                            <div className="form-group">
                                <button className="btn-submit" type="submit">LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
