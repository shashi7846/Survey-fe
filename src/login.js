import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GetuserbyEmail, postlogin } from "./api";
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';


function Login() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let history = useHistory();
    let userData = { email, password }

    return (
        <>
            <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card bg-dark col-4">
                        <div class="card-header bg-success">
                            <h3>Login</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                try {

                                    let logindata = await postlogin(userData);
                                    window.localStorage.setItem("app_token", logindata.data.token)
                                    let token = logindata.data.token;

                                     //checking if token is present then go to next page otherwise stay in same page
                                    if (token) {
                                        let users = await GetuserbyEmail(email);
                                        console.log(users.data._id)
                                        history.push(`/home/${users.data._id}`)
                                    }
                                    else {
                                       alert("Email or password is incorrect")
                                        history.push(`/login`);
                                    }
                                }
                                catch (error) {
                                    console.log(error)
                                }
                                setEmail("");
                                setPassword("");
                            }}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="form-group mt-1">
                                    <input type="submit" value="Login" class="btn float-end btn-success" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center text-light links">
                                Don't have an account?<Link to="/register">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;
