import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { validationLatitudeLongitude } from "validation-latitude-longitude";

import './styles.css'

function Gps(props) {
  const [latLong, setLatLong] = useState(true)
  
  const lable = latLong ? props.placeholder : 'Error'
  const coordinates = val => {
    if (props.placeholder.toLowerCase() === 'latitude') {
      setLatLong(validationLatitudeLongitude.latitude(val))
    } else {
      setLatLong(validationLatitudeLongitude.longitude(val))
    }
  }

  return (
    <div className="card">
      <TextField
        error={!latLong}
        id="outlined-error"
        onChange={e => coordinates(e.target.value)}
        label={lable}
        placeholder={props.placeholder}
        margin="normal"
        variant="outlined"
      />
    </div>
  )
}

export default Gps
