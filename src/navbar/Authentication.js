import React from 'react'
import User from './User'
import AdminNavbar from '../admin/AdminNavbar';
import NavBar from '../component/NavBar';

const Authentication = () => {
    // const { getToken } = AuthUser();
    // const { getUtype } = AuthUser();
    const getToken = true;
    const getUsertype = 'ADM';
    if (!getToken) {
        return <User />
    }
    if (getUsertype === "ADM") {
        return <AdminNavbar />
    }
    return (
        <NavBar />
    )

}

export default Authentication