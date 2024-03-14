import React, { useEffect, useRef, useState } from 'react'

//icons
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';


export default function Hobbies() {
  const hobbies = JSON.parse(localStorage.getItem("hobbies"))
  const [hobby, sethobby] = useState()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    const formData = {
      hobby
    }

    if (!hobbies) {
      localStorage.setItem("hobbies", JSON.stringify([{ ...formData }]))
    } else {
      hobbies.push({ ...formData })
      localStorage.setItem("hobbies", JSON.stringify(hobbies))
    }

    setInstitution(""); setStartDate(""); setEndDate("");
  }

  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <div className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">7</div>
            Hobbies & Interests
          </div>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <HiBuildingOffice2 className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='hobby'
              value={hobby}
              onChange={(e) => sethobby(e.target.value)}
              required
            />
          </div>
        </div>



        <div className="my-3">
          <button className="btn-primary w-full ">
            {hobbies ? "Add hobby" : "save"}
          </button>
        </div>
        {hobbies &&
          <div className="my-3">
            <button
              onClick={(e) => {
                e.preventDefault()
                navigate("/create/referees")
              }
              }
              className="btn-secondary w-full ">
              Next
            </button>
          </div>
        }

      </form>
    </div>
  )
}
