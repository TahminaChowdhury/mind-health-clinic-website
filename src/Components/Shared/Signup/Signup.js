import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../images/sign-up.jpg'

const Signup = () => {
    const {error, handleEmail, handlePassword, handleSignup, handleResetPassword} =useAuth();
    return (
        <div className="d-flex justify-content-center">
            
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="login mt-5 pt-5">
                <h2 className="mt-5">Sign up</h2>
                <span>Already have an account?</span> <Link to="/login">Login</Link>
                <form  onSubmit={handleSignup} className="mt-3">
                <label htmlFor="">E-mail</label>
                    <br />
                    <input onBlur={handleEmail} type="email" name="email" id="" required className="w-100 py-2 mb-3"/>
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input onBlur={handlePassword} type="password" name="password" id=""
                    required className="w-100  py-2"/>
                    <br />
                    <button className="btn text-primary" onClick={handleResetPassword}>Forgot Password?</button>
                    <h5 className="text-danger my-3">{error}</h5>
                    <button type="submit" className="btn btn-primary rounded-pill w-75 mt-3 ms-5">Sign up</button>
                </form>
                
            </div>
        </div>
    );
};

export default Signup;