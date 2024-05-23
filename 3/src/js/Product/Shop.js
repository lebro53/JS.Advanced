"use strict";
import Product from "./product.js";

export default class Shop {
  products;
  constructor() {
    this.products = [];
  }
  addProduct(name, srcImg, price, description) {
    let index = this.products.length + 1;
    this.products.forEach((c, index) => {
      c.index === index ? index++ : true;
    });
    this.products.push(new Product(name, srcImg, price, description, index));
  }
  getProducts() {
    return this.products;
  }

  getRender(position) {
    this.getProducts().forEach((product) => {
      const productElDiv = document.createElement("div");

      productElDiv.className = "product-el";

      position.appendChild(productElDiv);

      const productEl = document.createElement("div");
      productEl.className = "product";

      const commentEl = document.createElement("div");
      commentEl.className = "comment-el";
      commentEl.innerHTML = product.allComments();
      commentEl.dataset.productIndex = product.index;

      productElDiv.appendChild(productEl);
      productElDiv.appendChild(commentEl);

      const productElImg = document.createElement("img");
      productElImg.src = product.srcImg;
      productElImg.alt = product.name;

      const productElH2 = document.createElement("h2");
      productElH2.textContent = product.name;

      const productElP = document.createElement("p");
      productElP.textContent = product.description;

      const productElP2 = document.createElement("p");
      productElP2.textContent = product.price;

      const inputAuthor = document.createElement("input");
      inputAuthor.className = "input-comment-author";
      inputAuthor.placeholder = "Ваше имя:";

      const TextAreaComment = document.createElement("textarea");
      TextAreaComment.className = "textarea-comment";
      TextAreaComment.placeholder = "Ваш отзыв:";

      const addComment = document.createElement("button");
      addComment.className = "add-to-comment";
      addComment.textContent = "Добавить коментарий";

      productEl.appendChild(productElImg);
      productEl.appendChild(productElH2);
      productEl.appendChild(productElP);
      productEl.appendChild(productElP2);
      productEl.appendChild(inputAuthor);
      productEl.appendChild(TextAreaComment);
      productEl.appendChild(addComment);

      addComment.addEventListener("click", () => {
        if (inputAuthor.value === "") {
          inputAuthor.style.border = "2px solid red";
          preventDefault();
        } else if (TextAreaComment.value === "") {
          TextAreaComment.style.border = "2px solid red";
          preventDefault();
        } else {
          product.addProductComment(inputAuthor.value, TextAreaComment.value);
          commentEl.innerHTML = product.allComments().join("");
          inputAuthor.style.border = "1px solid #292929";
          TextAreaComment.style.border = "1px solid #292929";
          inputAuthor.value = "";
          TextAreaComment.value = "";
        }
      });

      commentEl.addEventListener("click", function (event) {
        if (event.target.className == "delete-product-comment") {
          const idComment = event.target.getAttribute("data-button-index");
          product.delProductComment(idComment);
          commentEl.innerHTML = product.allComments();
        }
      });
    });
  }
}
