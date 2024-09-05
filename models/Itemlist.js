import { Schema, model, models } from "mongoose";

const ItemlistSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  createdAt: {
    type: String,
    default: false
  },
  updatedAt: {
    type: String,
    default: false
  }
}, {
  timestamps: true
});

const Itemlist = models.Itemlist || model('Itemlist', ItemlistSchema);

export default Itemlist;