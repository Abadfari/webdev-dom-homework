export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v1/ilya-krikunenko/comments")
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке комментариев');
            }
            return response.json();
        })
};

export function postComments(name, text) {
    return fetch("https://wedev-api.sky.pro/api/v1/ilya-krikunenko/comments", {
        method: "POST",
        body: JSON.stringify({
            name,
            text,
        })
    })
        .catch((error) => {
            console.log(error.message);
            throw new Error("Не удалось сделать запрос");
        })
};

export function loginUser() {
    
}