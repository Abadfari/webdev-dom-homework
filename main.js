import { escapeHTML, getCurrentDateTime } from "./modules/helper.js";
import { getComments, postComments } from "./modules/api.js";
import { renderComments } from "./modules/renderCom.js";
import { initFormListeners } from "./modules/listeners.js";


export let commentsData = [];

// const buttonDeleteElement = document.querySelector(".delete-form-button");
const textDisabled = document.querySelector(".text");


const fetchGetCommentsData = () => {
    getComments().then(responseData => {
        commentsData = responseData.comments.map(comment => ({
            author: comment.author.name,
            dateTime: getCurrentDateTime(comment.date),
            text: comment.text,
            likes: comment.likes,
            liked: comment.isLiked,
        }));
        textDisabled.textContent = "";
        renderComments();
        initFormListeners();
    })
        .catch((error) => {
            alert("Кажется что-то пошло не так, попробуйте похже.");
            console.warn(error);
        });
};

export const postFetch = (nameInput, commentInput, addButton) => {
    postComments(nameInput.value, commentInput.value).then(async (response) => {
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.error);
        }
        return response.json();
    })
        .then(() => {
            fetchGetCommentsData();
        })
        .then(() => {
            nameInput.value = "";
            commentInput.value = "";
        })
        .catch((error) => {
            alert(error.message);
        })
        .finally(() => {
            addButton.disabled = false;
            addButton.textContent = "Написать";
        });
};


fetchGetCommentsData();


