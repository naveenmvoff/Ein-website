import mongoose from 'mongoose';

const packersAndMoversSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fromAddress: {
    type: String,
    required: true,
  },
  toAddress: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    default: '',
  },
  shiftingThings: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PackersAndMovers = mongoose.models.PackersAndMovers || mongoose.model("PackersAndMovers", packersAndMoversSchema);
export default PackersAndMovers;