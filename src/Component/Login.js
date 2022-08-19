import React from 'react'
import { Link } from 'react-router-dom'
import ban from './todobanner1-removebg-preview.png'
import { useState } from 'react'

export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
  return (
    <>
    <div className="container col-lg-4 col-md-6 col-sm-12 mt-5 p-5 shadow">
        <div className="row">
            <img src={ban} alt="" />
            <div className="">
                <marquee behavior="" direction=""><b className='fs-4'>Welcome back great note keeper</b></marquee>
                <h2 className='text-center text-danger'>Login</h2>
                <div className="form-floating">
            <input type="text" className='form-control mb-3' placeholder='Email Address' onChange={(e)=>setemail(e.target.value)}/>
            <label htmlFor="">Email Address</label>
                </div>
            <div className="form-floating">
            <input type="text" className='form-control mb-3' placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>
            <label htmlFor="">Password</label>
                </div>
                <p>Already have an account? <Link to={'/'}>Signup</Link></p>
                <button className='btn btn-secondary w-100 rounded-pill'>Login</button>

            </div>
        </div>
    </div>
    </>
  )
}
