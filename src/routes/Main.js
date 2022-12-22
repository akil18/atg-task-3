import React from 'react';
import { Outlet } from 'react-router-dom';
import UsersList from '../components/UsersList';

const Main = () => {
    return (
        <div className='container my-5 text-center'>
            <div className='row'>
                <div className='col'>
                    <h2 className='p-2 mx-5 rounded-top text-white' style={{backgroundColor: '#65737e'}}>Users List</h2>
                    <UsersList></UsersList>
                </div>
                <div className='col'>
                    <h2 className='p-2 mx-5 rounded-top text-white' style={{backgroundColor: '#65737e'}}>User Details</h2>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;