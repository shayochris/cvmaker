import React from 'react'
import { AiFillAlert } from 'react-icons/ai'
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

export default function Education() {

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    navigate("/create/skills")
  }

  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <p className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">2</div>
            Education
          </p>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <HiBuildingOffice2 className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='institution' />
          </div>
        </div>

        <div className="my-3">
          <label htmlFor="" className="label block my-1">Start date</label>
          <div className="input-group">
            <FaRegCalendarAlt className='input-group-icon' />
            <input type="date"
              className="input-group-input"
              placeholder='start date' />
          </div>
        </div>

        <div className="my-3">
          <label htmlFor="" className="label block my-1">End date</label>
          <div className="input-group">
            <FaRegCalendarAlt className='input-group-icon' />
            <input type="date"
              className="input-group-input"
              placeholder='end date' />
          </div>
        </div>

        <div className="my-3">
          <button className="btn-primary w-full ">Save</button>
        </div>
      </form>
    </div>
  )
}
