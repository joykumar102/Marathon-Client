import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;


    // return <Navigate state={location.pathname} to='/Login'></Navigate>;
    // return <Navigate state={location.pathname} to={"/Login"}></Navigate>;
};

export default PrivateRoute;