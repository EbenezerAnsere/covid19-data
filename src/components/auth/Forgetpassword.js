import React from 'react'
import './Forgetpassword.scss';

export default function Forgetpassword() {
    return (
        <div className="resetpassword">
            <div className="place">
            <form className="restpassword__login">
            <label className="reset">Reset Password</label>
                <br />
                <input type="text" placeholder="Enter your email" className="enter__reset"/>
                <button type="submit__enter">Submit</button>
            </form>
            </div>
        </div>
    )
}
