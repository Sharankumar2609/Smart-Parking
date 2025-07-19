import React from 'react'

const ParkingCard = ({name, address}) => {
  return (
        <div className="w-100  bg-black rounded-md shadow-lg flex flex-col h-full py-4 pl-4 pr-3">
            <div className="w-full ">
                <div className="text-white">
                    <h2 className="mt-1 font-semibold text-2xl">{name}</h2>
                    <h4 className="mt-1 text-sm">{address}</h4>
                    <div className="flex justify-end mr-4 mt-3">
                        <button className="bg-blue-500 p-2 rounded-md mt-2 hover:bg-blue-700 transition-tranform duration-200 hover:cursor-pointer">Book Now</button>
                    </div>
                </div>  
            </div>
        </div>
  )
}

export default ParkingCard