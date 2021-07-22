const express = require("express");
const exhbs = require("express-handlebars");
const products = require("./products.json");

const app = express();
const port = 4444;

app.use(express.static("public"));

app.set("view engine", "hbs");

app.engine(
  "hbs",
  exhbs({
    extname: "hbs",
  })
);

app.get("/", (req, res) => {
  res.render("home", { pageTitle: "Main Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { cssFileName: "about", pageTitle: "Page About Us" });
});

app.get("/products", (req, res) => {
  res.render("products", {
    products,
    cssFileName: "products",
    pageTitle: "Page Products",
  });
});

//динамические параметри
app.get("/product/:productId", (req, res) => {
  console.log(req.params);
  const product = products.find((p) => p.id === req.params.productId);
//   console.log(product);
  res.render("product", { product });
});

app.listen(4444, () => {
  console.log(`Application server is running on port ${port}`);
});
