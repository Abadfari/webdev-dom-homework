/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsData: () => (/* binding */ commentsData),\n/* harmony export */   fetchGetCommentsData: () => (/* binding */ fetchGetCommentsData),\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   postFetch: () => (/* binding */ postFetch),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   setUser: () => (/* binding */ setUser),\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _modules_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/helper.js */ \"./modules/helper.js\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ \"./modules/api.js\");\n/* harmony import */ var _modules_renderCom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderCom.js */ \"./modules/renderCom.js\");\n/* harmony import */ var _modules_renderMainPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderMainPage.js */ \"./modules/renderMainPage.js\");\n\r\n\r\n\r\n\r\n\r\nlet commentsData = [];\r\n\r\nlet user = null;\r\nlet token = null;\r\n\r\nfunction setUser(newUser) {\r\n    user = newUser;\r\n}\r\n\r\nfunction setToken(newToken) {\r\n    token = newToken;\r\n}\r\n\r\nfunction getToken() {\r\n    return token;\r\n}\r\n\r\nconst fetchGetCommentsData = () => {\r\n    (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(getToken())\r\n        .then((responseData) => {\r\n            commentsData = responseData.comments.map((comment) => ({\r\n                author: comment.author.name,\r\n                dateTime: (0,_modules_helper_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDateTime)(comment.date),\r\n                text: comment.text,\r\n                likes: comment.likes,\r\n                liked: comment.isLiked,\r\n                id: comment.id,\r\n            }));\r\n            (0,_modules_renderCom_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)();\r\n        })\r\n        .catch((error) => {\r\n            alert(\"Кажется что-то пошло не так, попробуйте похже.\");\r\n            console.warn(error);\r\n        });\r\n};\r\n\r\nconst postFetch = (nameInput, commentInput, addButton) => {\r\n    (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.postComments)(nameInput.value, commentInput.value, getToken())\r\n        .then(async (response) => {\r\n            if (!response.ok) {\r\n                let error = await response.json();\r\n                throw new Error(error.error);\r\n            }\r\n            return response.json();\r\n        })\r\n        .then(() => {\r\n            fetchGetCommentsData();\r\n        })\r\n        .then(() => {\r\n            commentInput.value = \"\";\r\n        })\r\n        .catch((error) => {\r\n            alert(error.message);\r\n        })\r\n        .finally(() => {\r\n            // renderForm.innerHTML = \"\";\r\n            addButton.disabled = false;\r\n            addButton.textContent = \"Написать\";\r\n        });\r\n};\r\n(0,_modules_renderMainPage_js__WEBPACK_IMPORTED_MODULE_3__.renderMainPage)();\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./index.js?");

/***/ }),

/***/ "./modules/api.js":
/*!************************!*\
  !*** ./modules/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteComment: () => (/* binding */ deleteComment),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   likeComment: () => (/* binding */ likeComment),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   postComments: () => (/* binding */ postComments),\n/* harmony export */   signUpUser: () => (/* binding */ signUpUser)\n/* harmony export */ });\n\r\nconst HOST_URL = \"https://wedev-api.sky.pro/api/v2/ilya-krikunenko\";\r\n\r\nfunction getComments(token) {\r\n    return fetch(`${HOST_URL}/comments`, {\r\n        headers: {\r\n            Authorization: `Bearer ${token}`\r\n        }\r\n    })\r\n        .then(response => {\r\n            if (!response.ok) {\r\n                throw new Error('Ошибка при загрузке комментариев');\r\n            }\r\n            return response.json();\r\n        })\r\n};\r\n\r\nfunction postComments(name, text, token) {\r\n    return fetch(`${HOST_URL}/comments`, {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            name,\r\n            text,\r\n        }),\r\n        headers: {\r\n            Authorization: `Bearer ${token}`\r\n        }\r\n    })\r\n        .catch((error) => {\r\n            console.log(error.message);\r\n            throw new Error(\"Не удалось сделать запрос\");\r\n        })\r\n};\r\n\r\nfunction loginUser(login, password) {\r\n    return fetch(\"https://wedev-api.sky.pro/api/user/login\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            login,\r\n            password,\r\n        })\r\n    })\r\n        .catch((error) => {\r\n            console.log(error.message);\r\n            throw new Error(\"Не удалось сделать запрос\");\r\n        })\r\n        .then(async (response) => {\r\n            if (!response.ok) {\r\n                let error = await response.json();\r\n                throw new Error(error.error);\r\n            }\r\n            return response.json();\r\n        })\r\n};\r\n\r\nfunction signUpUser(login, name, password) {\r\n    return fetch(\"https://wedev-api.sky.pro/api/user\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            login,\r\n            name,\r\n            password,\r\n        })\r\n    })\r\n        .catch((error) => {\r\n            console.log(error.message);\r\n            throw new Error(\"Не удалось сделать запрос\");\r\n        })\r\n        .then(async (response) => {\r\n            if (!response.ok) {\r\n                let error = await response.json();\r\n                throw new Error(error.error);\r\n            }\r\n            return response.json();\r\n        })\r\n};\r\n\r\nfunction likeComment(id, token) {\r\n    return fetch(`${HOST_URL}/comments/${id}/toggle-like`, {\r\n        method: \"POST\",\r\n        headers: {\r\n            Authorization: `Bearer ${token}`\r\n        }\r\n    })\r\n        .catch((error) => {\r\n            console.log(error.message);\r\n            throw new Error(\"Не удалось сделать запрос\");\r\n        })\r\n        .then(async (response) => {\r\n            if (!response.ok) {\r\n                let error = await response.json();\r\n                throw new Error(error.error);\r\n            }\r\n            return response.json();\r\n        })\r\n};\r\n\r\nfunction deleteComment(id, token) {\r\n    return fetch(`${HOST_URL}/comments/${id}`, {\r\n        method: \"DELETE\",\r\n        headers: {\r\n            Authorization: `Bearer ${token}`\r\n        }\r\n    })\r\n        .catch((error) => {\r\n            console.log(error.message);\r\n            throw new Error(\"Не удалось сделать запрос\");\r\n        })\r\n        .then(async (response) => {\r\n            if (!response.ok) {\r\n                let error = await response.json();\r\n                throw new Error(error.error);\r\n            }\r\n            return response.json();\r\n        })\r\n};\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/api.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeHTML: () => (/* binding */ escapeHTML),\n/* harmony export */   getCurrentDateTime: () => (/* binding */ getCurrentDateTime)\n/* harmony export */ });\nfunction escapeHTML(text) {\r\n    return text\r\n        .replaceAll(\"&\", \"&amp;\")\r\n        .replaceAll(\"<\", \"&lt;\")\r\n        .replaceAll(\">\", \"&gt;\")\r\n        .replaceAll('\"', \"&quot;\")\r\n        .replaceAll(\"'\", \"&#39;\");\r\n}\r\n\r\nfunction getCurrentDateTime(date) {\r\n    const now = new Date(date);\r\n    const options = {\r\n        year: \"numeric\",\r\n        month: \"2-digit\",\r\n        day: \"2-digit\",\r\n        hour: \"2-digit\",\r\n        minute: \"2-digit\",\r\n    };\r\n    return now.toLocaleDateString(\"ru-RU\", options);\r\n}\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/helper.js?");

/***/ }),

/***/ "./modules/listeners.js":
/*!******************************!*\
  !*** ./modules/listeners.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initCommentListener: () => (/* binding */ initCommentListener),\n/* harmony export */   initDeleteButtonsListeners: () => (/* binding */ initDeleteButtonsListeners),\n/* harmony export */   initFormListeners: () => (/* binding */ initFormListeners),\n/* harmony export */   initLikeListener: () => (/* binding */ initLikeListener)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./modules/api.js\");\n\r\n\r\n\r\nfunction initReplyListener(commentInput) {\r\n  const commentElements = document.querySelectorAll(\".comment\");\r\n  commentElements.forEach((commentElement) => {\r\n    commentElement.addEventListener(\"click\", function () {\r\n      const author = commentElement.querySelector(\r\n        \".comment-header div\",\r\n      ).innerText;\r\n      const text = commentElement.querySelector(\".comment-text\").innerText;\r\n\r\n      commentInput.value = `@${author}: ${text}\\n`;\r\n      commentInput.focus();\r\n    });\r\n  });\r\n}\r\n\r\nfunction initCommentListener() {\r\n  const commentInput = document.querySelector(\".add-form-text\");\r\n  initReplyListener(commentInput);\r\n}\r\n\r\nfunction initLikeListener(newComment) {\r\n  const likeButton = newComment.querySelector(\".like-button\");\r\n  likeButton.addEventListener(\"click\", function (event) {\r\n    event.stopPropagation();\r\n    const index = likeButton.dataset.index;\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.likeComment)(index, (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getToken)()).then(() => {\r\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.fetchGetCommentsData)();\r\n    });\r\n  });\r\n}\r\n\r\nfunction initFormListeners() {\r\n  const addButton = document.querySelector(\".add-form-button\");\r\n  const nameInput = document.querySelector(\".add-form-name\");\r\n  const commentInput = document.querySelector(\".add-form-text\");\r\n  addButton.addEventListener(\"click\", () => {\r\n    const nameValue = nameInput.value.trim();\r\n    const commentValue = commentInput.value.trim();\r\n\r\n    if (nameValue === \"\" || commentValue === \"\") {\r\n      alert(\"Пожалуйста, введите ваше имя и комментарий!\");\r\n      return;\r\n    }\r\n\r\n    addButton.disabled = true;\r\n    addButton.textContent = \"Комментарий добавляется\";\r\n\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.postFetch)(nameInput, commentInput, addButton);\r\n  });\r\n}\r\n\r\nconst initDeleteButtonsListeners = () => {\r\n  const deleteButtonsElements = document.querySelectorAll(\r\n    \".delete-form-button\",\r\n  );\r\n  for (const deleteButtonsElement of deleteButtonsElements) {\r\n    deleteButtonsElement.addEventListener(\"click\", (event) => {\r\n      event.stopPropagation();\r\n      const index = deleteButtonsElement.dataset.index;\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.deleteComment)(index, (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getToken)()).then(() => {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.fetchGetCommentsData)();\r\n      });\r\n    });\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/listeners.js?");

/***/ }),

/***/ "./modules/renderCom.js":
/*!******************************!*\
  !*** ./modules/renderCom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCommentElement: () => (/* binding */ createCommentElement),\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ \"./modules/listeners.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper.js */ \"./modules/helper.js\");\n\r\n\r\n\r\n\r\nfunction renderComments() {\r\n    const commentsList = document.querySelector(\".comments\");\r\n    commentsList.innerHTML = \"\";\r\n\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.commentsData.forEach((comment) => {\r\n        const commentElement = createCommentElement(comment);\r\n        commentsList.appendChild(commentElement);\r\n    });\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.user) {\r\n        (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.initCommentListener)();\r\n        (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.initDeleteButtonsListeners)();\r\n    }\r\n}\r\n\r\nfunction createCommentElement(comment) {\r\n    const newComment = document.createElement(\"li\");\r\n    newComment.classList.add(\"comment\");\r\n    const likeClass = comment.liked ? \" -active-like\" : \"\";\r\n    newComment.innerHTML = `\r\n<div class=\"comment-header\">\r\n  <div>${(0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.escapeHTML)(comment.author)}</div>\r\n  <div>${comment.dateTime}</div>\r\n</div>\r\n<div class=\"comment-body\">\r\n  <div class=\"comment-text\">${(0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.escapeHTML)(comment.text)}</div>\r\n</div>\r\n<div class=\"comment-footer\">\r\n  <button class=\"delete-form-button\" data-index=\"${comment.id}\">Удалить</button>\r\n  <div class=\"likes\">\r\n    <span class=\"likes-counter\">${comment.likes}</span>\r\n    <button data-index=\"${comment.id}\" class=\"like-button${likeClass}\"></button>\r\n  </div>\r\n</div>`;\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.user) {\r\n        (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.initLikeListener)(newComment);\r\n    }\r\n\r\n    return newComment;\r\n}\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/renderCom.js?");

/***/ }),

/***/ "./modules/renderForm.js":
/*!*******************************!*\
  !*** ./modules/renderForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderForm: () => (/* binding */ renderForm)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ \"./modules/listeners.js\");\n/* harmony import */ var _renderLogin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderLogin.js */ \"./modules/renderLogin.js\");\n\r\n\r\n\r\n\r\nfunction renderForm() {\r\n  const formContainer = document.querySelector(\".form\");\r\n  const formHTML = `<div class=\"add-form\"><input type=\"text\" value=\"${_index_js__WEBPACK_IMPORTED_MODULE_0__.user?.name}\" readonly class=\"add-form-name\" placeholder=\"Введите ваше имя\">\r\n    <textarea type=\"textarea\" class=\"add-form-text\" placeholder=\"Введите ваш коментарий\" rows=\"4\"></textarea>\r\n    <div class=\"add-form-row\">\r\n      <button class=\"add-form-button\">Написать</button>\r\n    </div>\r\n  </div>`;\r\n  formContainer.innerHTML = _index_js__WEBPACK_IMPORTED_MODULE_0__.user\r\n    ? formHTML\r\n    : `<div>Пожалуйста <a href=\"#\" class=\"login-link\">авторизуйтесь</a></div>`;\r\n\r\n  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.user) {\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.initFormListeners)();\r\n  } else {\r\n    const loginLink = document.querySelector(\".login-link\");\r\n    loginLink.addEventListener(\"click\", () => {\r\n      (0,_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.renderLogin)();\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/renderForm.js?");

/***/ }),

/***/ "./modules/renderLogin.js":
/*!********************************!*\
  !*** ./modules/renderLogin.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./modules/api.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _renderMainPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderMainPage.js */ \"./modules/renderMainPage.js\");\n\r\n\r\n\r\n\r\nfunction renderLogin() {\r\n  const container = document.querySelector(\".container\");\r\n  container.innerHTML = `\r\n    <div>\r\n            <h2>Автоирзция</h2>\r\n            <div class=\"login-form add-form\" ><input id=\"login\" type=\"text\" class=\"add-form-name\" placeholder=\"Введите логин\">\r\n                <input id=\"password\" type=\"password\" class=\"add-form-text\" placeholder=\"Введите пароль\">\r\n                <div class=\"add-form-row\">\r\n                    <button id=\"sign-in\" class=\"add-form-button\">Авторизоватся</button>\r\n                </div>\r\n            </div>\r\n        </div>`;\r\n\r\n  initLoginListener();\r\n}\r\n\r\nfunction initLoginListener() {\r\n  const loginInput = document.querySelector(\"#login\");\r\n  const passwordInput = document.querySelector(\"#password\");\r\n  const signInButton = document.querySelector(\"#sign-in\");\r\n  signInButton.addEventListener(\"click\", () => {\r\n    if (loginInput.value.trim() === \"\" || passwordInput.value.trim() === \"\") {\r\n      alert(\"Пожалуйста, введите ваш логин или пароль!\");\r\n      return;\r\n    }\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)(loginInput.value, passwordInput.value)\r\n      .then((result) => {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.setUser)(result.user);\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.setToken)(result.user.token);\r\n        (0,_renderMainPage_js__WEBPACK_IMPORTED_MODULE_2__.renderMainPage)();\r\n      })\r\n      .catch((error) => {\r\n        alert(error.message);\r\n      });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/renderLogin.js?");

/***/ }),

/***/ "./modules/renderMainPage.js":
/*!***********************************!*\
  !*** ./modules/renderMainPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMainPage: () => (/* binding */ renderMainPage)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _renderForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderForm.js */ \"./modules/renderForm.js\");\n\r\n\r\n\r\nfunction renderMainPage() {\r\n  const container = document.querySelector(\".container\");\r\n  container.innerHTML = `<div class=\"text\" style=\"color:white\"></div>\r\n    <ul class=\"comments\" id=\"add-comment\">\r\n    Пожалуйста подождите, комментарии загружаются...\r\n    </ul>\r\n    <div class=\"form\" style=\"color:white\"></div>\r\n    `;\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.fetchGetCommentsData)();\r\n  (0,_renderForm_js__WEBPACK_IMPORTED_MODULE_1__.renderForm)();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/renderMainPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;