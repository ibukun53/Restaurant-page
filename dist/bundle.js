(()=>{"use strict";document.querySelectorAll("nav-button").forEach((t=>{void 0!==t?t.classList.remove("active"):t.classList.add("active")}));const t=()=>{const t=document.createElement("header");t.classList.add("header");const e=t.offsetTop;window.pageYOffset>e?t.classList.add("stickyHeader"):t.classList.remove("stickyHeader");const n=document.createElement("h1");n.classList.add("restaurantName"),n.textContent="African.D";const a=document.createElement("p");a.classList.add("restaurantMottor"),a.textContent="Good food favours the hungry heart";const d=document.createElement("h3");return d.classList.add("restaurantReserve"),d.textContent="Reservation",t.appendChild(n),n.appendChild(a),t.appendChild((()=>{const t=document.createElement("nav");t.classList.add("nav");const e=document.createElement("button");e.classList.add("nav-button"),e.textContent="Home";const n=document.createElement("button");n.classList.add("nav-button"),n.textContent="About";const a=document.createElement("button");a.classList.add("nav-button"),a.textContent="Menu";const d=document.createElement("button");d.classList.add("nav-button"),d.textContent="Contact";const s=document.createElement("button");s.classList.add("nav-button"),s.textContent="Order";const c=document.createElement("div");c.classList.add("mobileMenu");const o=document.createElement("span");o.classList.add("bar");const l=document.createElement("span");l.classList.add("bar");const i=document.createElement("span");i.classList.add("bar");const r=()=>{t.classList.toggle("is-active"),c.classList.toggle("active")};return t.addEventListener("click",r),c.addEventListener("click",r),c.appendChild(o),c.appendChild(l),c.appendChild(i),t.appendChild(c),t.appendChild(e),t.appendChild(a),t.appendChild(s),t.appendChild(n),t.appendChild(d),t})()),t.appendChild(d),t};window.onscroll=function(){t()},(()=>{const e=document.getElementById("content");e.appendChild(t()),e.appendChild((()=>{const t=document.createElement("main");return t.classList.add("main"),t})()),e.appendChild((()=>{const t=document.createElement("footet");t.classList.add("footer");const e=document.createElement("p");e.textContent=`Copyright © ${(new Date).getFullYear()} debbyblessing`;const n=document.createElement("a");n.href="https://github.com/ibukun53/";const a=document.createElement("i");a.classList.add("fab"),a.classList.add("fa-github");const d=document.createElement("a");d.href="https://www.linkedin.com/in/ibukun53/";const s=document.createElement("i");return s.classList.add("fab"),s.classList.add("fa-linkedin"),n.appendChild(a),d.appendChild(s),t.appendChild(e),t.appendChild(n),t.appendChild(d),t})())})()})();