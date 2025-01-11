const e=e=>fetch(`https://newsapi.org/v2/everything?q=${e}&apiKey=cf6a9a908ca445faa636f104b2fd2266&language=uk`).then(e=>e.json()).then(e=>console.log(e)),n=e=>document.querySelector(e).value;document.querySelector("#search-news").addEventListener("click",()=>{e(n("#keyword"))});
//# sourceMappingURL=index.60be941f.js.map
