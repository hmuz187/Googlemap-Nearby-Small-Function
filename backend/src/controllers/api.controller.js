const axios = require('axios')


const {OK, CREATED, SuccessResponse} = require('../helpers/success.response')
const PlaceService = require('../services/place.service')


class APIController {


    nearbyHospital = async (req, res, next) => {
       
        new SuccessResponse({
            metadata: await PlaceService.nearByList(req.body)
        }).send(res)

    }
}

module.exports = new APIController()