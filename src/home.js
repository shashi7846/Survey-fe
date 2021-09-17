import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GetsurveybyEmail, GetuserbyID } from './api';

function Home(props) {
    let history = useHistory();

    let [userData,setuserData]=useState([]);

    useEffect(async () => {
        //getting the details of user by their id
        let users = await GetuserbyID(props.match.params.id);
        let userEmail=users.data.email;
        //getting the data of survey by user email
        let surveybyid=await GetsurveybyEmail(userEmail)
        setuserData(surveybyid.data)
        console.log(surveybyid.data)
    }, [])

    return (
        <>
            <button className="float-end btn btn-success mt-2" onClick={() => {
                history.push(`/survey/${props.match.params.id}`)
            }}>Add Survey</button>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">gender</th>
                        <th scope="col">DoB</th>
                        <th scope="col">Place</th>
                    </tr>
                </thead>
                {/* displaying all the survey of user email */}
                <tbody>
                {
                        userData.map((use, index) => {
                            return (
                                <tr>
                                    <th scope="row">{use.name}</th>
                                    <td>{use.email}</td>
                                    <td>{use.phone}</td>
                                    <td>{use.gender}</td>
                                    <td>{use.dob}</td>
                                    <td>{use.place}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Home;