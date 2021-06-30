// use json to list allergy specialists
import React from 'react'

import docData from '../data/docinfo.json'

function Specialists (props) {
  // const docData = [{ id: '', name: '', location: '', practice: '', contact: '', link: '' }]
  return (

    <>
      <div>
        <h1>Allergy and Immunology Specialists across NZ</h1>
        <ul>
          {docData.doctors.map((item, i) => {
            return <li key={item.id}>
        Doctor: {item.name}
        Location: {item.location}
        Practice: {item.practice}
        Contact: {item.contact}
        Link: <a target="blank" href={item.link}>{item.link}</a>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Specialists
