const e=document.querySelector("form"),t=document.querySelector("#search-input"),n=document.querySelector(".search-results"),s=document.querySelector("#show-more-button");let a="",l=1;const r=async()=>{try{a=t.value;let e=`https://api.unsplash.com/search/photos?page=${l}&query=${a}&client_id=${atob("TUQtY0pDbVJYRnBOVWUxcDdYRUpuVzl6WVlyVG9PUFJmRnZKcGV3cUVnNA==")}&per_page=12`,r=await fetch(e),o=await r.json(),i=o.results;if(console.log(o),!r.ok)throw Error("Network response was not ok");if(0===i.length)throw Error("No Results!");1===l&&(n.innerHTML=""),c(i),s.style.display="block",n.classList.remove("notFound")}catch(e){n.innerHTML=e.message,n.classList.add("notFound"),s.style.display="none"}},o=async()=>{let e=`https://api.unsplash.com/search/photos?page=${l}&query=all&client_id=${atob("TUQtY0pDbVJYRnBOVWUxcDdYRUpuVzl6WVlyVG9PUFJmRnZKcGV3cUVnNA==")}&per_page=15`,t=await fetch(e),s=(await t.json()).results;1===l&&(n.innerHTML=""),c(s)},c=async e=>await e.map(e=>{let t=document.createElement("div");t.classList.add("search-result");let s=document.createElement("img");s.src=e.urls.small,s.alt=e.alt_description;let a=document.createElement("a");a.href=e.links.html,a.target="_blank",a.innerHTML=e.alt_description,a.style.fontSize="10px",a.style.textAlign="center",a.appendChild(s),t.appendChild(a),n.appendChild(t)});e.addEventListener("submit",e=>{e.preventDefault(),l=1,r()}),s.addEventListener("click",()=>{l++,r()}),o();
//# sourceMappingURL=index.15c012e6.js.map