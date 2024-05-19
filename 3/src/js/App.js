"use strict";
import Shop from "./Product/Shop.js";

const productsEl = document.querySelector(".products");

const shop = new Shop();
shop.addProduct("maika1", "./src/img/1.jpg", 1500, "Very good Maika");
shop.addProduct("maika2", "./src/img/2.jpg", 2500, "Very nice Maika");
shop.addProduct("maika3", "./src/img/3.jpg", 1000, "Very cool Maika");
shop.addProduct("maika4", "./src/img/1.jpg", 1700, "Very white Maika");
shop.addProduct("maika5", "./src/img/2.jpg", 2800, "Very black Maika");
shop.addProduct("maika6", "./src/img/3.jpg", 7000, "Very very Maika");

shop.getRender(productsEl);
