const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const buttonFormat = document.querySelector(".controls__button--Format");
const buttonMinify = document.querySelector(".controls__button--minify");


buttonFormat.addEventListener("click", () => {
    const formater = JSON.stringify(JSON.parse(inputArea.value), null, 4);

    outputArea.value = formater;
});


buttonMinify.addEventListener("click", () => {
    const minify =  JSON.stringify(JSON.parse(inputArea.value));

    outputArea.value = minify;
})