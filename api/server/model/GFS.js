const mongoose = require("mongoose");
const { Schema } = mongoose;
require("./Car");
require("./Chunk");

const GFSSchema = new Schema(
  {
    _id: String,
    filename: String,
    metadata: {
      type: String,
      ref: "Car",
    },
  },
  { toJSON: { virtuals: true } }
);

GFSSchema.virtual("chunk", {
  ref: "Chunk", 
  localField: "_id", 
  foreignField: "files_id", 
  justOne: true,
});

const GFS = mongoose.model("GFS", GFSSchema, "fs.files");
module.exports = GFS;