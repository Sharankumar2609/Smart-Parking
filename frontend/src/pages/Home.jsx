import { useState } from 'react'
import Navbar from '../components/Navbar'
import {Search} from 'lucide-react'
import ParkingCard from '../components/ParkingCard';

const Home = () => {

    const [search, setsearch] = useState("");

    const handleSearch = (e)=>{
      setsearch(e.target.value);
    }
  return (
    <div>
      <div className="flex-col bg-slate-900 pb-10 ">
          <Navbar />
          <h1 className="mt-3 font-bold text-4xl text-center text-white">SMARTEST WAY TO PARK YOUR VEHICLE</h1>
          <h1 className="text-center mt-2 text-2xl text-white">View and Book parking spaces at various stations.</h1>
          <div className="flex justify-center mt-8">
            <div className="relative">
              <input type="text" placeholder="search.." value={search} onChange={handleSearch} className="bg-slate-100 focus:outline-none pl-2 pt-2 pb-2 rounded-md w-80" />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded text-white hover:bg-blue-600 hover:cursor-pointer transition"><Search className=""/></button>
            </div> 
          </div>
      </div>
      <div className="ml-15 mt-5 mb-5">
        <h1 className="font-semi-bold text-3xl "> All Stations</h1>
      </div>
      <ParkingCard />
    </div>
  )
}

export default Home