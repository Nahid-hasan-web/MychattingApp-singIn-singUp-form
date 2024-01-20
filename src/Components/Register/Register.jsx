import React, { useState } from 'react'
import '../CommonCss/Common.css'
import { Link } from 'react-router-dom'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";


const Register = () => {
    const [show , setShow] = useState(false)

    const handelShow = ()=>{
        setShow(!show)
    }




  return (
    <>
    <div className="main_window">
    <div className="main">
            <div className="form_head">
                <h2>Sing-Up</h2>
            </div>
        <form  className="main_form">
            <label >User Name</label><br />
            <input placeholder='Enter Your User Name' type="text" /><br /><br />
            <label >Email</label><br />
            <input placeholder='Enter Your Email' type="eamil" /><br />
            <label className='passwordInput' >Password</label> <br />
            <div className="password">
                {
                    show?
                    <IoIosEyeOff onClick={handelShow} className='eyeIcon' />
                    :
                    <IoIosEye onClick={handelShow} className='eyeIcon' />

                }
            <input placeholder='Enter Your Password' type={(show)? 'text' : 'password'} />
            </div>
            <button className='submitButton' type='submit'>Sing-Up</button>
        </form>
        <p className='other_option'> or continue with</p>
        <div className="login_register_options">
            <ul>
                <li><Link to='#'><img src="google.png" alt="login other options" /></Link></li>
                <li><Link to='#'><img src="fb.png" alt="login other options" /></Link></li>
                <li><Link to='#'><img src="apple.png" alt="login other options" /></Link></li>
            </ul>
        </div>
        <p className='registerOption'>Alredy have an account? <Link to='/' className='register_login'>Sing-In</Link></p>
    </div>
    </div>
    </>
  )
}

export default Register