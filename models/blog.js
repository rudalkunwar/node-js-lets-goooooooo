// import mongoose
const mongose = require("mongoose");

//create a schema
const Schema = mongose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongose.model('Blog',blogSchema);

module.exports=Blog;
