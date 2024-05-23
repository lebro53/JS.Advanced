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
    const newComment = this.comments.addComment(author, text);
    let commentsForLocalStorage = localStorage.getItem(this.name)
      ? JSON.parse(localStorage.getItem(this.name))
      : [];
    commentsForLocalStorage.push(newComment);
    localStorage.setItem(this.name, JSON.stringify(commentsForLocalStorage));
  }
  delProductComment(comment) {
    this.comments.delComment(comment);
    let commentsForLocalStorage =
      JSON.parse(localStorage.getItem(this.name)) || [];
    commentsForLocalStorage = commentsForLocalStorage.filter(
      (c) => c.id != comment
    );
    console.log(commentsForLocalStorage);
    localStorage.setItem(this.name, JSON.stringify(commentsForLocalStorage));
  }

  commentsToString(comments) {
    return comments
      .map(
        (comment) => `
    <div class="comment-element">
      <p class="comment-product-author">Автор: ${comment.author}</p>
      <p class="comment-product-text">Отзыв: ${comment.text}</p>
      <button class="delete-product-comment" data-button-index='${comment.id}'>Удалить комментарий</button>
      </div>
    `
      )
      .join("<br>");
  }

  allComments = function () {
    let commentsForLocalStorage =
      JSON.parse(localStorage.getItem(this.name)) || [];
    if (
      commentsForLocalStorage.length === 0 ||
      localStorage.key(this.name) === null
    ) {
      return ["Комментариев нет и не будет"];
    } else if (
      commentsForLocalStorage.length === 0 ||
      localStorage.key(this.name) === null
    ) {
      return ["Комментариев нет и не будет"];
    } else {
    }

    return this.commentsToString(commentsForLocalStorage);
  };
}
