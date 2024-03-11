import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

//icons
import { CiLock, CiUser, CiMail } from 'react-icons/ci'

export default function Signup() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    console.log(formData)
  }

  return (
    <div className='wrapper flex-c'>
      <div className="">
        <div className="">
          <form onSubmit={handleSubmit} className="bordered-form mx-auto">

            <p className="h3 text-center text-primary">Logo</p>
            <div className="my-3 input-group">
              <CiUser className='input-group-icon' />
              <input type="text"
                ref={nameRef}
                className="input-group-input"
                placeholder='Full Name'
              />
            </div>

            <div className="my-3 input-group">
              <CiMail className='input-group-icon' />
              <input type="text"
                ref={emailRef}
                className="input-group-input"
                placeholder='Email'
              />
            </div>

            <div className="my-3 input-group">
              <CiLock className='input-group-icon' />
              <input type="password"
                ref={passwordRef}
                className="input-group-input"
                placeholder='Password'
              />
            </div>


            <div className="my-3 flex-c">
              <button className="btn-primary w-full">Signup</button>
            </div>

            <div className="my-3 flex-c text-sm">
              <p className="text-gray-600">Already have an Account?</p>
              <Link to="/login" className='text-primary font-semibold' >Login</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
