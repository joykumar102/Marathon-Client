import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();
    

    if (user) {
        return children;
    }


    // return <Navigate to='/Login'></Navigate>
    return <Navigate state={location.pathname} to={"/Login"}></Navigate>;
};

export default PrivateRoute;