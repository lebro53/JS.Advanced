"use strict";
export default class AutorComment {
  constructor(author, text, id) {
    this.id = id;
    this.author = author;
    this.text = text;
  }

  toHTML() {
    return `
    <div class="comment-element">
      <p class="comment-product-author">Автор: ${this.author}</p>
      <p class="comment-product-text">Отзыв: ${this.text}</p>
      <button class="delete-product-comment" data-button-index='${this.id}'>Удалить комментарий</button>
      </div>
    `;
  }
}
