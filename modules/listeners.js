import { postFetch } from "../main.js";

function initReplyListener(commentInput) {
    const commentElements = document.querySelectorAll('.comment');
    commentElements.forEach(commentElement => {
        commentElement.addEventListener('click', function () {
            const author = commentElement.querySelector('.comment-header div').innerText;
            const text = commentElement.querySelector('.comment-text').innerText;

            commentInput.value = `@${author}: ${text}\n`;
            commentInput.focus();
        });
    })
};

export function initCommentListener() {
    const commentInput = document.querySelector(".add-form-text");
    initReplyListener(commentInput);
}

// function initLikeListener() {
//     const likeButton = newComment.querySelector('.like-button');
//     likeButton.addEventListener('click', function (event) {
//         event.stopPropagation();
//         if (comment.liked) {
//             comment.likes--;
//         } else {
//             comment.likes++;
//         }
//         comment.liked = !comment.liked;
//         renderComments(commentsData);
//     })
// };

export function initFormListeners() {
    const addButton = document.querySelector(".add-form-button");
    const nameInput = document.querySelector(".add-form-name");
    const commentInput = document.querySelector(".add-form-text");
    addButton.addEventListener("click", () => {
        const nameValue = nameInput.value.trim();
        const commentValue = commentInput.value.trim();

        if (nameValue === "" || commentValue === "") {
            alert("Пожалуйста, введите ваше имя и комментарий!");
            return;
        }

        addButton.disabled = true;
        addButton.textContent = "Комментарий добавляется";

        postFetch(nameInput, commentInput, addButton);

    });
}