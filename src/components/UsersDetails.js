import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userImg from '../assets/user.png';

const UsersDetails = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const userId = useParams().id;

    useEffect(() => {
        setLoading(true);
        
        axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${userId}`)
        .then(res => {
            setLoading(false);
            setUser(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        
    }, [userId]);

    console.log(user);

    return (
        <div className='d-flex justify-content-center'>
            {
                loading ? 
                    <div className="spinner-border m-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                :
                    <>
                        {
                            user ?
                            <div className="card border-dark mx-5 my-4 w-100">
                                <div className="card-header text-white border-dark pt-5" style={{backgroundColor: 'darkblue'}}>
                                    <img className='rounded-circle' style={{width: '150px', height:'140px'}} src={userImg} alt={user.profile.firstName} />
                                    <h5 className='m-3'>{'@'}{user.profile.username}</h5>
                                </div>
                                <div className="card-body text-dark">
                                <p className="card-text fw-bold">{user.Bio}</p>
                                </div>
                                <div className="card-footer py-3 bg-transparent border-success text-start">
                                    <span>Full Name: </span>
                                    <span className='fw-bold'>{user.profile.firstName}{' '}{user.profile.lastName}</span>
                                </div>
                                <div className="card-footer py-3 bg-transparent border-success text-start">
                                    <span>Job Title: </span>
                                    <span className='fw-bold'>{user.jobTitle}</span>
                                </div>
                                <div className="card-footer py-3 bg-transparent border-success text-start">
                                    <span>Email: </span>
                                    <span className='fw-bold'>{user.profile.email}</span>
                                </div>
                            </div>
                            :   
                                <p>No data to show</p>
                        }
                    </>
                }
        </div>
    );
};

export default UsersDetails;