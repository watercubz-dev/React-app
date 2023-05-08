import React from 'react'
import "./vehicleView.css"

function VehicleView({vehicle}) {
  return (
    <div className='VehicleView'>
       <h1>{vehicle.name}</h1>
       <p>{vehicle.description}</p>
       <img src={vehicle.image} alt={vehicle.name + "image"}/>
    </div>
  )
}

export default VehicleView;