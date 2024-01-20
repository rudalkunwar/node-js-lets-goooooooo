const express = require("express");
const router = express.Router();
const {
  blog_add,
  blog_create,
  blog_delete,
  blog_details,
  blog_edit,
  blog_index,
  blog_update,
} = require("../controllers/blogControllers");

router.get("/", blog_index);

router.get("/add",blog_create);

router.get("/edit/:id",blog_edit);

router.post("/update/:id",blog_update);

router.post("/add", blog_add);

router.get("/:id",blog_details);

router.delete("/delete/:id",blog_delete);

module.exports = router;
