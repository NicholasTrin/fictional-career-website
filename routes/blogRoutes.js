const mongoose = require("mongoose");
const BlogSchema = mongoose.model("blog");


module.exports = (app) => {
  app.post("/api/blogs", async (req, res) => {
    const {title,body} = req.body;
    const blog =  new BlogSchema({
      title,
      body,
      dateSubmitted: Date.now(),
      lastUpdated: Date.now(),
      _user: req.user.id
    })
    await blog.save();
    res.send()
  });
  app.get("/api/blogs/:blog_id", async (req,res) =>{
    const {blog_id} = req.params;
    const blog = await BlogSchema.find({_id:blog_id});
    res.send(blog);
  });

  app.get("/api/blogs", async (req,res) =>{
    const blogs = await BlogSchema.find({}).select('-comments -body -_user');
    res.send(blogs);
  });

};
