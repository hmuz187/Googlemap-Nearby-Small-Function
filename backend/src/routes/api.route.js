// url:: /api/ + ...

const express = require('express')
const router = express.Router()
const {asyncHandler} = require('../helpers/asyncHandler')

const APIController = require('../controllers/api.controller')
const AdminController = require('../controllers/admin.controller')


//client
router.post('/nearby/hospital', asyncHandler(APIController.nearbyHospital))


//admin
router.get('/admin/listplaces', asyncHandler(AdminController.getListPlaces))
router.patch('/admin/approvePlace', asyncHandler(AdminController.changeApprovePlace))




module.exports = router