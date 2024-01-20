import React, { useState } from 'react'
import '../CommonCss/Common.css'
import { Link } from 'react-router-dom'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Login = () => {

    const [show , setShow] = useState(false)


    const handelShow = ()=>{
        setShow(!show)
    }
  return (
    <>
    <div className="main_window">
    <div className="main">
            <div className="form_head">
                <h2>Login</h2>
            </div>
        <form  className="main_form">
            <label >Email</label><br />
            <input placeholder='Enter Your Email' type="eamil" /><br />
            <label className='passwordInput' >Password</label> <br />
            <div className="password">
                {
                    show?
                    <IoIosEye onClick={handelShow} className='eyeIcon'/>
                    :
                    <IoIosEyeOff onClick={handelShow} className='eyeIcon'/>

                }
            <input placeholder='Enter Your Password' type={(show)?"text" : 'password'} />
            </div>
            <Link to='#' className='forgotPass' >Forget Password?</Link>
            <button className='submitButton' type='submit'>Sing In</button>
        </form>
        <p className='other_option'> or continue with</p>
        <div className="login_register_options">
            <ul>
                <li><Link to='#'><img src="google.png" alt="login other options" /></Link></li>
                <li><Link to='#'><img src="fb.png" alt="login other options" /></Link></li>
                <li><Link className='apple' to='#'><img src="apple.png" alt="login other options" /></Link></li>
            </ul>
        </div>
        <p className='registerOption'>Don't have an account yet? <Link className='register_login'  to='/register'>Register for free</Link></p>
    </div>
    </div>
    </>
  )
}

export default Login