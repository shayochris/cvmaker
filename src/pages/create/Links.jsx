import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React, { useEffect, useRef, useState } from 'react'

//icons
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { PiLinkSimpleBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import ResumePreview from '../../components/ResumePreview';
import Modal from '../../components/Modal';


export default function Links() {
  const links = JSON.parse(localStorage.getItem("links"))
  const [link, setlink] = useState()
  const navigate = useNavigate()
  const modal = useRef();

  const handlesubmit = (e) => {
    e.preventDefault()
    const formData = {
      link
    }

    if (!links) {
      localStorage.setItem("links", JSON.stringify([{ ...formData }]))
    } else {
      links.push({ ...formData })
      localStorage.setItem("links", JSON.stringify(links))
    }

    setInstitution(""); setStartDate(""); setEndDate("");
  }

  const showPDF = () => {
    let component =
      <PDFViewer style={{ width: '100%', height: '500px' }}>
        <ResumePreview />
      </PDFViewer>;
    modal.current.showModal(component, 'My Resume')
  }

  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <div className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">9</div>
            External Links
          </div>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <PiLinkSimpleBold className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Link URL'
              value={link}
              onChange={(e) => setlink(e.target.value)}
              required
            />
          </div>
        </div>



        <div className="my-3">
          <button className="btn-primary w-full ">
            {links ? "Add link" : "save"}
          </button>
        </div>

      </form>
      <div className="px-4">
        <div className=" lg:hidden ">
          <PDFDownloadLink document={<ResumePreview />} fileName='MyResume'>
            <button
              className="btn-secondary w-full ">
              Download Cv
            </button>
          </PDFDownloadLink>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            showPDF();
          }}
          className="btn-secondary w-full hidden lg:block">
          Preview CV
        </button>
      </div>


      <Modal ref={modal} />
    </div>
  )
}
