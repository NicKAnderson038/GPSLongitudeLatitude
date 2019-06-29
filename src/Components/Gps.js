import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

import './styles.css'

function Gps(props) {
  const [latLong, setLatLong] = useState(true)

  const lable = latLong ? props.placeholder : 'Error'
  const coordinates = val => {
    const lat = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/
    const long = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/
    if (props.placeholder.toLowerCase() === 'latitude') {
      setLatLong(lat.test(val))
    } else {
      setLatLong(long.test(val))
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
