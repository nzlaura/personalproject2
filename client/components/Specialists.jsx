// use json to list allergy specialists
import React from 'react'

// import docData from '../data/docinfo.json'

function Specialists (props) {
  const docData = {
    id: 1,
    name: 'Steve',
    location: 'doctortown',
    practice: 'Medicine',
    contact: 'doctor@doctor.com',
    link: 'allergies.co.nz'
  }
  return (

    <>
      <div>
        <h1>Allergy and Immunology Specialists across NZ</h1>
        <ul>
          <li key={docData.id}>
        Doctor: {docData.name}
        Location: {docData.location}
        Practice: {docData.practice}
        Contact: {docData.contact}
        Link: <a href={docData.link}>{docData.link}</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Specialists
