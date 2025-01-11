const API_KEY = "cf6a9a908ca445faa636f104b2fd2266";

const getNews = (keyword) => {
    const API = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}&language=uk`;
    return fetch(API)
        .then((data) => data.json())
        .then((data) => console.log(data));
};
