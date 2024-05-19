"use strict";
import CommentsArray from "../Comments/commentsArray.js";

export default class Product {
  constructor(name, srcImg, price, description, index) {
    this.index = index;
    this.name = name;
    this.srcImg = srcImg;
    this.price = price;
    this.description = description;
    this.comments = new CommentsArray();
  }

  addProductComment(author, text) {
    this.comments.addComment(author, text);
  }
  delProductComment(comment) {
    this.comments.delComment(comment);
  }
  allComments() {
    if (this.comments.allComments().length !== 0) {
      return this.comments.allComments();
    } else {
      return ["Комментариев нет и не будет"];
    }
  }
}
