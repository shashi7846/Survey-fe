import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom";
import {postregister} from "./api";
// import EmailIcon from '@mui/icons-material/Email';
// import PersonIcon from '@mui/icons-material/Person';
// import LockIcon from '@mui/icons-material/Lock';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import WcIcon from '@mui/icons-material/Wc';



function Register(){

    let [username,setUsername] =useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone,setPhone]=useState("");
    let [gender,setgender]=useState("");
    let [dob,setdob]=useState("");
    let [place,setplace]=useState("");

    let history=useHistory();

    let userData = { username,email, password ,phone,gender,dob,place}

    return(
        <>
        <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card bg-dark col-4">
                        <div class="card-header bg-success">
                            <h3> Register</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                let reg= await postregister(userData);
                                if(reg.data.message==="email already exist"){
                                    alert("Email already in use");
                                }
                                else{
                                    alert("successfully registered");
                                }
                                setEmail("");
                                setPassword("");
                                setUsername("");
                                setPhone("");
                                setgender("");
                                setdob("");
                                setplace("");
                                history.push(`/login`);
                            }}>
                            <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="User Name" required value={username} onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="tel" class="form-control" placeholder="99xx99xx99" pattern="[0-9]{10}" required value={phone} onChange={(e) => {
                                        setPhone(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="gender" required value={gender} onChange={(e) => {
                                        setgender(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="date" class="form-control" placeholder="dob"  required value={dob} onChange={(e) => {
                                        setdob(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="place(city)"  required value={place} onChange={(e) => {
                                        setplace(e.target.value);
                                    }}/>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Register" class="btn float-end mt-1 btn-success" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center text-light links">
                             have an account?<Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Register;
