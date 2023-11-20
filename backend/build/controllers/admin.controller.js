const axios = require('axios');
const {
  OK,
  CREATED,
  SuccessResponse
} = require('../helpers/success.response');
const PlaceService = require('../services/place.service');
class AdminController {
  getListPlaces = async (req, res, next) => {
    new SuccessResponse({
      metadata: await PlaceService.getListPlaces()
    }).send(res);
  };
  changeApprovePlace = async (req, res, next) => {
    new SuccessResponse({
      metadata: await PlaceService.changeApprovePlace(req.body)
    }).send(res);
  };
}
module.exports = new AdminController();