import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate=useNavigate();
    const navigateLogin=()=>{
        navigate('/login');
    }
    const handleRegister=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onClick={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />

                <input type="email" name='email' id='' placeholder='Email Address' />

                <input type="password" name='password' id='' placeholder='Password' />

                <input type="submit" value='register' />
            </form>
            <p>Already have an account?<Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;