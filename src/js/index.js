import { getNews } from "./get-news-api.js";
import { getKeyword } from "./make-keyword.js";
 
let displayedArticles = 5;
let totalArticles = [];

const renderNews = (articles) => {
  const newsEl = document.querySelector(".news");

  newsEl.innerHTML = "";

  const articlesToDisplay = articles.slice(0, displayedArticles);

  articlesToDisplay.forEach((article) => {
    const articleEl = document.createElement("li");
    articleEl.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
    `;
    newsEl.append(articleEl);
  });

  const showMoreButton = document.querySelector("#show-more-btn");

  if (articles.length >= displayedArticles) {
    showMoreButton.style.display = "block"; 
  } else {
    showMoreButton.style.display = "none"; 
  }
};

const setupShowMoreButton = () => {
  const showMoreButton = document.querySelector("#show-more-btn");
  
  if (showMoreButton) {
    showMoreButton.addEventListener("click", () => {
      displayedArticles += 5; 
      renderNews(totalArticles);
    });
  }
};

const setupSearchButton = () => {
  const btn = document.querySelector("#search-news");

  btn.addEventListener("click", () => {
    const finalKeyword = getKeyword("#keyword"); 
    
    getNews(finalKeyword).then((data) => {
      totalArticles = data.articles; 
      displayedArticles = 5;
      renderNews(totalArticles); 
    });
  });
};

setupSearchButton();
setupShowMoreButton();
