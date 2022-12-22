import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import userImg from '../assets/user.png';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const activeStyle = {
        backgroundColor: "darkblue",
        color: "white",
      };
    
      const nonActiveStyle = {
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
        color: "black",
      };    

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => {
                setLoading(false);
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    
    return (
        <div>
            {
                loading ? 
                    <div className="spinner-border m-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> 
                :
                    <div className='mx-5 mt-4'>
                        {
                            users.length > 0 ?
                                users?.map(user => 
                                    <NavLink 
                                        key={user.id} 
                                        to={`users/${user.id}`}
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : nonActiveStyle
                                        }
                                        className='d-flex gap-3 btn rounded-1 m-2 p-2 align-items-center'
                                    >
                                        
                                            <img className='rounded-circle' style={{width: '25px', height:'23px'}} src={userImg} alt={user.profile.firstName} />
                                            <p className='m-0'>{user.profile.firstName}{' '}{user.profile.lastName}</p>
                                        
                                    </NavLink>
                                )
                            :
                                <p>No data to show</p>
                        }
                    </div>
            }           
        </div>
    );
};

export default UsersList;