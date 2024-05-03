// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const container = document.querySelector(".coment_container");
const input = document.querySelector(".input_coment");
const button = document.querySelector(".button_coment");

button.addEventListener("click", function (e) {
  const text = input.value;
  if (text.length < 50 || text.length > 500) {
    throw new Error("Отзыв должен быть от 50 до 500 символов");
  } else {
    container.insertAdjacentHTML("beforeend", `<div>${text}</div>`);
    input.value = "";
  }
});
