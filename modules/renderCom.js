import { commentsData } from "../main.js";
import { initCommentListener } from "./listeners.js";
import { escapeHTML } from "./helper.js";

export function renderComments() {
    const commentsList = document.querySelector(".comments");
    commentsList.innerHTML = "";

    commentsData.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });

    initCommentListener();
};

export function createCommentElement(comment) {
    const newComment = document.createElement("li");
    newComment.classList.add("comment");
    const likeClass = comment.liked ? " -active-like" : "";
    newComment.innerHTML = `
<div class="comment-header">
  <div>${escapeHTML(comment.author)}</div>
  <div>${comment.dateTime}</div>
</div>
<div class="comment-body">
  <div class="comment-text">${escapeHTML(comment.text)}</div>
</div>
<div class="comment-footer">
  <button class="delete-form-button">Удалить</button>
  <div class="likes">
    <span class="likes-counter">${comment.likes}</span>
    <button class="like-button${likeClass}"></button>
  </div>
</div>`;

    return newComment;
};