const {
  DataTypes
} = require('sequelize');
const {
  sequelize
} = require('../config/postgreql.init');
const DOCUMENT_NAME = 'place';
const COLLECTION_NAME = 'places';
const PlaceModel = sequelize.define(DOCUMENT_NAME, {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  distance: {
    type: DataTypes.DOUBLE,
    default: 0
  },
  status: {
    type: DataTypes.STRING
  },
  isApproved: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: true,
  modelName: COLLECTION_NAME
});
module.exports = sequelize.model(DOCUMENT_NAME, PlaceModel);