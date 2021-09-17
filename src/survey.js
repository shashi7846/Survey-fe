import React, { useState } from "react";
import {  useHistory } from "react-router-dom";

import {  postsurvey } from "./api";
// import EmailIcon from '@mui/icons-material/Email';
// import PersonIcon from '@mui/icons-material/Person';
// import LockIcon from '@mui/icons-material/Lock';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import WcIcon from '@mui/icons-material/Wc';

function Survey(props){


    let [name,setname] =useState("");
    let [email, setEmail] = useState("");
    let [phone,setPhone]=useState("");
    let [gender,setgender]=useState("");
    let [dob,setdob]=useState("");
    let [place,setplace]=useState("");
    let [education,seteducation]=useState("")
    let [occupation,setoccupation]=useState("")

    let history=useHistory();

    let userData = { name,email ,phone,gender,dob,place}

    return(
        <>
        <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card bg-dark col-4">
                        <div class="card-header bg-success">
                            <h3>Add Survey</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                               await postsurvey(userData)//posting the survey details
                                setEmail("");
                                setname("");
                                setPhone("");
                                setgender("");
                                setdob("");
                                setplace("");
                                history.push(`/home/${props.match.params.id}`);//after posting the survey details redirecting to the home page where we display all suurvey details
                            }}>
                            <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="User Name" required value={name} onChange={(e) => {
                                        setname(e.target.value);
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
                                    <input type="text" class="form-control" placeholder="Education"  required value={education} onChange={(e) => {
                                        seteducation(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group mt-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning"></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="occupation"  required value={occupation} onChange={(e) => {
                                        setoccupation(e.target.value);
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
                                    <input type="submit" value="Add Survey" class="btn float-end mt-1 btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Survey;
