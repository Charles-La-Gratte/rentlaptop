import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const AuthRoute = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                console.log('unauthorized');
                setLoading(false);
                navigate('/login')
            }
        });
        return () => unsubscribe();
    }, [auth, navigate]);

    if (loading) return <p></p>;

    return <div>{ children }</div>;

}

AuthRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthRoute;