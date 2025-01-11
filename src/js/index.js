const getKeyword = (selector) => {
    const inputElement = document.querySelector(selector);
    return inputElement.value;
};

const setupSearchButton = () => {
    const btn = document.querySelector("#search-news");
    btn.addEventListener("click", () => {
        const finalKeyword = getKeyword("#keyword");
        getNews(finalKeyword);
    });
};

setupSearchButton();