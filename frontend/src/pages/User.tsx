import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import { LocationState } from '@/types';

function User() {
    const location = useLocation();
    const navigate = useNavigate();
    const { role } = location.state as LocationState;

    useEffect(() => {
        if (role === "user") {
            navigate('/user-dashboard'); // Navigate to the user dashboard route
        }
    }, [role, navigate]);

    return (
        <>
            {role !== "user" && <p>You are not logged in.</p>}  {/* Fallback content when not logged in */}
        </>
    );
}

export default User;
