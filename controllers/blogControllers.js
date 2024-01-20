const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/blogs", { blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create = (req, res) => {
  res.render("blogs/addblog");
};
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((data) => {
      res.render("blogs/blog", { blog: data });
    })
    .catch((err) => {
      console.log(err);
    });
};
const blog_add = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blog");
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};
const blog_edit = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((data) => {
      res.render("blogs/edit", { blog: data });
    })
    .catch((err) => {
      console.log(err);
    });
};
const blog_update = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  Blog.findByIdAndUpdate({ _id: id }, updateData)
    .then((result) => {
      res.redirect("/blog");
    })
    .catch((err) => {
      console.log(err);
    });
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((data) => {
      res.json({ redirect: "/blog" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_add,
  blog_create,
  blog_delete,
  blog_details,
  blog_edit,
  blog_index,
  blog_update,
};
