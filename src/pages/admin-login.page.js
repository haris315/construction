import React from 'react'

import '../admin-login.css';
function AdminLoginPage() {
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
        <div className="fadeIn first">
        <img src="https://user-images.githubusercontent.com/35910158/35493994-36e2c50e-04d9-11e8-8b38-890caea01850.png" id="icon" alt="User Icon" />
        </div>

        <form>
        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
        <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
        <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
        <a className="underlineHover" href="#">Forgot Password?</a>
        </div>

        </div>
    </div>
    )
}

export default AdminLoginPage
