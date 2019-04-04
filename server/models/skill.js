import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  level: String,
  graph: Number
});

module.exports = mongoose.model('skill', skillSchema, 'skill');
