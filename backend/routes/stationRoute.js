import express from 'express'
const router = express.Router()

import {createStation} from '../controllers/stationController/createStationController.js'
import {getAllStations} from '../controllers/stationController/getAllStationController.js'

router.post('/createStation',createStation)
router.get('/getAllStations',getAllStations)

export default router