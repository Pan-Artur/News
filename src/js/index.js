import { getNews } from "./get-news-api";
import { getKeyword } from "./make-keyword";

const setupSearchButton = () => {
    const btn = document.querySelector("#search-news");
    btn.addEventListener("click", () => {
        const finalKeyword = getKeyword("#keyword");
        getNews(finalKeyword);
    });
};

setupSearchButton();