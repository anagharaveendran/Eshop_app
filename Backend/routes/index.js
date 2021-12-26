module.exports = app => {
    const tutorials = require("../controllers/product.controller.js");
    
      var router = require("express").Router();

      router.get("/products", product.findProducts);

      router.get("/products/categories" , product.findProductsByCategory);

      router.get("/products/:id" , product.findOneProduct);

      router.post("/products" , product.saveProducts);

      router.put("/products/:id" , product.updateProduct);

      router.delete("/products/:id" , product.deleteProduct);

      
}