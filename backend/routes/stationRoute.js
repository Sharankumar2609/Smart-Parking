import express from 'express'

import {createStation} from '../controllers/stationController/createStationController.js'
import {getAllStations} from '../controllers/stationController/getAllStationController.js'
import {getStationDetails} from '../controllers/stationController/getStationController.js'

const router = express.Router()

router.post('/createStation',createStation)
router.get('/getAllStations',getAllStations)
router.get('/getStationDetails/:id',getStationDetails)

export default router