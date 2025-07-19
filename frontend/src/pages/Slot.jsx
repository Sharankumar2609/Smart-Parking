import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import SlotButton from '../components/slotButton'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Slot = () => {
  const location = useLocation()
  const state = location.state || {}
  const {id, name, address, amount} = state
  const [slots,setSlots] = useState([])
  const params = useParams()

  useEffect(()=>{
    async function stationDetails(){
      try{
        const data = await axios.get(`http://localhost:3000/api/getStationDetails/${id}`)
        setSlots(data.data)
        console.log("Station details fetched successfully")
      }
      catch(err){
        console.log("Error in fetching the station details")
      }
    }
    stationDetails();
  },[])
  return (
    <>
    <div className="h-screen flex flex-col">
      <div className ="w-full bg-black h-30 flex flex-col justify-center items-center">
          <h1 className="font-bold text-white text-3xl">{name || "No station found"}</h1>
          <h1 className="font-semibold text-white text-2xl mt-2"> {address}</h1>
          <h1 className="text-white mt-2">(select your slot)</h1>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <button className="hover:cursor-pointer">
          <div className="grid grid-cols-5 gap-x-3 gap-y-3">
            {slots.map((slot)=>(
            <SlotButton
            key={slot.id}
            label={slot.slotLabel}
            available={slot.is_available}
            amount={String(amount)}
            />
          ))}
          </div>
        </button>
      </div>
    </div>
    </>
  )
}

export default Slot