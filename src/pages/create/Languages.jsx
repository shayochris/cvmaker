import React, { useEffect, useRef, useState } from 'react'

//icons
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';


export default function Languages() {
  const languages = JSON.parse(localStorage.getItem("languages"))
  const [language, setLanguage] = useState()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    const formData = {
      language
    }

    if (!languages) {
      localStorage.setItem("languages", JSON.stringify([{ ...formData }]))
    } else {
      languages.push({ ...formData })
      localStorage.setItem("languages", JSON.stringify(languages))
    }

    setInstitution(""); setStartDate(""); setEndDate("");
  }

  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <div className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">6</div>
            Languages
          </div>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <HiBuildingOffice2 className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Language'
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </div>
        </div>



        <div className="my-3">
          <button className="btn-primary w-full ">
            {languages ? "Add Language" : "save"}
          </button>
        </div>
        {languages &&
          <div className="my-3">
            <button
              onClick={(e) => {
                e.preventDefault()
                navigate("/create/hobbies")
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
