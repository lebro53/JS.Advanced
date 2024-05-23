import AutorComment from "./comment.js";

export default class CommentsArray {
  constructor() {
    this.comments = [];
    this.id = 0;
  }
  addComment(author, text, commentsID) {
    this.comments.forEach((c) => {
      c.id == this.id ? this.id++ : true;
    });
    commentsID.forEach((commentID) => {
      if (commentID == this.id) {
        this.id++;
      }
    });
    const newComment = new AutorComment(author, text, this.id);
    this.comments.push(newComment);
    return newComment;
  }
  delComment(comment) {
    return (this.comments = this.comments.filter((c) => c.id != comment));
  }
  allComments() {
    return this.comments.map((c) => c.toHTML());
  }
}
