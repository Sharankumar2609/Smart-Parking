import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Slot = () => {
  const location = useLocation()
  const state = location.state || {}
  const {id, name, address, amount} = state
  useEffect(()=>{
    async function stationDetails(){
      try{
        const data = await axios.get("http://localhost:3000/api/getStation",{
          params : {id}
        })
        console.log("Station details fetched successfully")
      }
      catch(err){
        console.log("Error in fetching the station details")
      }
    }
  })
  return (
    <>
    <div className ="w-full bg-black h-30 flex flex-col justify-center items-center">
        <h1 className="font-bold text-white text-3xl">{name || "No station found"}</h1>
        <h1 className="font-semibold text-white text-2xl mt-2"> {address}</h1>
        <h1 className="text-white mt-2">(select your slot)</h1>
    </div>
    </>
  )
}

export default Slot