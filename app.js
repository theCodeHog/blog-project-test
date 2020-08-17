const express = require("express");

//express app
const app = express(); //create an instance of express app

//register view engine
app.set("view engine", "ejs");

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [];

  //express automatically sends content-type
  //res.send("<p>Home Page</p>");
  //res.sendFile("./views/index.ejs", { root: __dirname }); //from the root, find this specific views path
  res.render("index", {
    title: "Home",
    blogs,
  });
});

app.get("/about", (req, res) => {
  //res.send("<p>About Page</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", {
    title: "About",
  });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", {
    title: "Create a blog",
  });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about", {
    title: "About us",
  });
});

// 404 page - use this function for every incoming request regardless of URL
// functions like a CATCH-ALL
app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", {
    title: "404",
  });
});
