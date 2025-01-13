const e=e=>fetch(`https://newsapi.org/v2/everything?q=${e}&apiKey=cf6a9a908ca445faa636f104b2fd2266&language=uk`).then(e=>e.json()).then(e=>(console.log(e),e)),t=e=>document.querySelector(e).value;let n=5,c=[];const l=e=>{let t=document.querySelector(".news");t.innerHTML="",e.slice(0,n).forEach(e=>{let n=document.createElement("li");n.innerHTML=`
      <h2>${e.title}</h2>
      <p>${e.description}</p>
    `,t.append(n)});let c=document.querySelector("#show-more-btn");e.length>=n?c.style.display="block":c.style.display="none"};document.querySelector("#search-news").addEventListener("click",()=>{e(t("#keyword")).then(e=>{c=e.articles,n=5,l(c)})}),(()=>{let e=document.querySelector("#show-more-btn");e&&e.addEventListener("click",()=>{n+=5,l(c)})})();
//# sourceMappingURL=index.1a58b031.js.map
