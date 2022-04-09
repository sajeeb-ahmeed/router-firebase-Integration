import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Hooks/useFirebase';

const Home = () => {
    // const { user } = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>this is home component</h1>

            <h3> This is the user : {user ? user.displayName : ' No body'}</h3>

        </div>
    );
};

export default Home;