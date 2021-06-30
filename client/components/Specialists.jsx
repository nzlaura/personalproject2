// use json to list allergy specialists
import React from 'react'
import { Typography } from '@material-ui/core'

import docData from '../data/docinfo.json'

function Specialists (props) {
  // const docData = [{ id: '', name: '', location: '', practice: '', contact: '', link: '' }]
  return (

    <>
      <div>
        <Typography variant="h3">Allergy and Immunology Specialists across NZ</Typography>
        <ul>
          {docData.doctors.map((item, i) => {
            return <li key={item.id}>
        Doctor: {item.name} <br></br>
        Location: {item.location} <br></br>
        Practice: {item.practice} <br></br>
        Contact: {item.contact} <br></br>
        Link: <a target="blank" href={item.link}>{item.link}</a>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Specialists
