const {
  DataTypes
} = require('sequelize');
const {
  sequelize
} = require('../config/postgreql.init');
const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';
const UserModel = sequelize.define(DOCUMENT_NAME, {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM(['admin', 'user', 'owner'])
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      is: /^[0-9]+$/
    }
  },
  passwordRecoveryCode: {
    type: DataTypes.STRING
  },
  timeGetRecoveryCode: {
    type: DataTypes.BIGINT,
    defaultValue: Date.now()
  }
}, {
  timestamps: true,
  modelName: COLLECTION_NAME
});
module.exports = sequelize.model(DOCUMENT_NAME, UserModel);