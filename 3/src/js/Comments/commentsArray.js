import AutorComment from "./comment.js";

export default class CommentsArray {
  constructor() {
    this.comments = [];
    this.id = 0;
  }
  addComment(author, text) {
    this.comments.forEach((c) => {
      c.id == this.id ? this.id++ : true;
    });
    const newComment = new AutorComment(author, text, this.id);
    this.comments.push(newComment);
  }
  delComment(comment) {
    this.comments = this.comments.filter((c) => c.id != comment);
  }
  allComments() {
    return this.comments.map((c) => c.toHTML());
  }
}
