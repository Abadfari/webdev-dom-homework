// const fetchDeleteButton = () => {
//   fetch("https://wedev-api.sky.pro/api/v1/ilya-krikunenko/comments/" + commentId, {
//     method: "DELETE"
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Ошибка при удалении комментария");
//       }
//       return response.json();
//     })
//     .then(responseData => {
//       // Обновляем список комментариев после удаления
//       fetchGetCommentsData();
//     })
//     .catch(error => {
//       console.error("Ошибка при удалении комментария:", error);
//     });
// };


// const initDeleteButtonsListeners = () => {
//   const deleteButtonsElements = documen.querySelectorAll(".delete-form-button");
//   for (const deleteButtonsElement of deleteButtonsElements) {
//     deleteButtonsElement.addEventListener("click", (event) => {
//       event.stopPropagation();
//       commentElement.disabled = true;
//       const index = deleteButtonsElement.dataset.index;
//       commentData.splice(index, 1);
//       renderComments();
//     });
//   }
// };

// const addCommentElement = document.querySelector("add-comment");
// const addFormDisable = document.querySelector(".add-form");