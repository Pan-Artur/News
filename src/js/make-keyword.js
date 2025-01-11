export const getKeyword = (selector) => {
    const inputElement = document.querySelector(selector);
    return inputElement.value;
};
