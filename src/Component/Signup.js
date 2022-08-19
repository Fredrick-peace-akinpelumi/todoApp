import React from 'react'
import banner from './todo banner.jpg'
import { Link } from 'react-router-dom'
// import { useFormik } from 'formik'
import { useState } from 'react'

export default function Signup() {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allusers, setallusers] = useState([])
    // const formik = useFormik()
    const Signup =(newUser)=>{
        // let newUser ={firstname, lastname, email, password}
        setallusers(()=>{
           let recentUser= [...allusers,newUser]
           localStorage.wholeusers=JSON.stringify(recentUser)
           return recentUser
        })
        setfirstname("")
        setlastname("")
        setemail("")
        setpassword("")
    }
  return (
    <>
    <div className="container col-lg-4 col-md-6 col-sm-12  p-3 shadow">
        <div className="row">
            <img src={banner} alt="" />
            <div className="">
                <h2 className='text-center text-danger'>Signup</h2>
                <div className="form-floating">
            <input type="text" className='form-control mb-3' placeholder='Firstname' onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>
            <label htmlFor="">Firstname</label>
                </div>
                <div className="form-floating">
            <input type="text" className='form-control mb-3' placeholder='Lastname' onChange={(e)=>setlastname(e.target.value)} value={lastname}/>
            <label htmlFor="">Lastname</label>
                </div>
                <div className="form-floating">
            <input type="email" className='form-control mb-3' placeholder='Email Address' onChange={(e)=>setemail(e.target.value)} value={email}/>
            <label htmlFor="">Email Address</label>
                </div>
            <div className="form-floating">
            <input type="password " className='form-control mb-3' placeholder='Password' onChange={(e)=>setpassword(e.target.value)} value={password}/>
            <label htmlFor="">Password</label>
                </div>
                <p>Already have an account? <Link to={'/login'}>Login here</Link></p>
                <button className='btn btn-success w-100 rounded-pill' onClick={Signup}>Signup</button>

            </div>
        </div>
    </div>
    </>
  )
}
