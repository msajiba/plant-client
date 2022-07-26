import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase-init';
import {useLocation, Navigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import { ErrorOutlineRounded } from '@mui/icons-material';


const RequireAuth = ({children}) => {

    const [user] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(!user){
        return <>
            <Loading />
            <Navigate to='/login' state={{ from : location}} replace> </Navigate>
        </>
    }

    if(sending){
        return <Loading />
    };

    if(error){
        return <p> {error?.message} </p>
    }

    if(!user?.emailVerified){

        return <>
                <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
                   <div>
                        <h6 className='text-danger'> Your Email account is not verified</h6>
                        <h6 className='text-info'> Please verified you email account</h6>
                        <button
                            className='btn btn-outline-info'
                            onClick={async () => {
                            await sendEmailVerification();
                            toast('Sent email verification link in you email');
                            }}>
                            Verify email
                        </button>
                   </div>
                </div>
                </>
    }

    return children;
};

export default RequireAuth;
