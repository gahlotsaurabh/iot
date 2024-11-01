const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { options } = require('joi');

const espSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    uniqueId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      default: 'closed',
      options: ['opened', 'closed'],
    }
  },
  {
    timestamps: true,
  }
);

espSchema.plugin(toJSON);
espSchema.plugin(paginate);

const Esp = mongoose.model('Esp', espSchema);

module.exports = Esp;
