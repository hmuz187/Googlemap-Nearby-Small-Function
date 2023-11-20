/*
    const axios = require('axios')
    require('dotenv').config()
*/

const {
  AuthFailureError,
  ErrorResponse,
  NotFoundError,
  BadRequestError
} = require('../helpers/error.response');
const placeModel = require('../models/placeModel');
const {
  dataExample
} = require('./dataexample');
class PlaceService {
  static nearByList = async information => {
    /* 
      // Get information from Google Map Platform - PlacePI
    // Information from frontend:: dataLocation(object):{lat:'',lng:''} && dataType(array):['hospital', 'school'...]
      const { location: dataLocation, type: dataType } = information
      const url = `${process.env.URL_NEARBY}?location=${dataLocation.lat},${dataLocation.lng}&radius=${process.env.RADIUS_FIND}&type=${dataType}&key=${process.env.GOOGLE_PLACE_API_KEY}&rankby=distance`
    // Google map only support for one type
      const result = await axios.get(url)  
    if (!result || !result.data) throw BadRequestError(`Problem to connect Google Map API`)
      const data = result.data
      */

    //Example result.data Success
    const data = {
      "message": "ok",
      "information": dataExample
    };

    /* Example result.data Error
    const data = {
        "error_message": "You have exceeded your daily request quota for this API. If you did not set a custom daily request quota, verify your project has an active billing account: http://g.co/dev/maps-no-account",
        "html_attributions": [],
        "results": [],
        "status": "OVER_QUERY_LIMIT"
    }
    */

    if (data.error_message) throw BadRequestError(data.error_message);
    const listPlaces = data.information.results;
    if (!listPlaces || listPlaces.length === 0) return {
      information: null
    };

    //save places to database
    listPlaces.forEach(async place => {
      //check if this place exists in database(findById)
      const ExistPlace = await placeModel.findOne({
        where: {
          id: place.place_id
        }
      });
      if (ExistPlace) {
        console.log(`${ExistPlace.name} is already save in database`);
      }
      if (!ExistPlace) {
        // Create new place information to database
        const newPlace = await placeModel.create({
          id: place.place_id,
          name: place.name,
          address: place.vicinity,
          type: place.types[0],
          location: place.geometry.location || {},
          status: place.business_status
        });
        if (newPlace) {
          console.log(`added ${newPlace.name} information`);
        }
      }
    });
    return {
      message: data.message || 'OK',
      information: listPlaces
    };
  };
  static getListPlaces = async () => {
    const listPlaces = await placeModel.findAll();
    return {
      information: listPlaces
    };
  };
  static changeApprovePlace = async ({
    id,
    isApproved
  }) => {
    console.log(`${id} - ${isApproved}`);
    try {
      await placeModel.update({
        isApproved: isApproved
      }, {
        where: {
          id: id
        }
      });
    } catch (error) {
      throw BadRequestError(`Problem when transfer data`);
    }
    return {
      message: 'done',
      information: null
    };
  };
}
module.exports = PlaceService;

/*
 // check if this place exists in database(findById)
 const ExistPlace = await placeModel.findOne({
     where: { id: id }
 })

 if (!ExistPlace) throw BadRequestError(`Problem when transfer data`)

 if (ExistPlace && ExistPlace.isApproved && ExistPlace.isApproved === isApproved) return {
     message: 'done, no change',
     information: ExistPlace.isApproved
 }

 if (ExistPlace && ExistPlace.isApproved && ExistPlace.isApproved !== isApproved) {
     // update approve of this Place in database
     try {
         await placeModel.update(
             { isApproved: isApproved },
             { where: { id: id } }
         )
     } catch (error) {
         throw BadRequestError(`Problem when transfer data`)
     }
 }

 return {
     message: 'done',
     information: null
 }

 */