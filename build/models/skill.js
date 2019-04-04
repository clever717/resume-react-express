'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var skillSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  level: String,
  graph: Number
});

module.exports = _mongoose2.default.model('skill', skillSchema, 'skill');