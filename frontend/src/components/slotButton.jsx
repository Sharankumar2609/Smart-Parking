import React from 'react'

const SlotButton = ({label,available,amount}) => {

  const bgcolor = available ? "bg-gray-400" : "bg-red-500"
  const bordercolor = available ? "border-green-500" : "border-red-500"

  return (
    <>
    <div className={`w-15 h-15 border-3 rounded-md shadow-xl flex justify-center items-center ${bgcolor} ${bordercolor}`}>
      <h1 className="text-white">{label}</h1>
    </div>
    </>
  )
}

export default SlotButton