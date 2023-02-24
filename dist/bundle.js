(()=>{"use strict";const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const e=document.createElement("div");e.classList.add("homespan");const n=document.createElement("span");n.classList.add("homebar"),n.textContent="";const a=document.createElement("h4");a.classList.add("h4"),a.textContent="HELLO, NEW FRIEND",e.appendChild(n),e.appendChild(a);const s=document.createElement("p");s.classList.add("p"),s.textContent="Feels like Home,tastes like a Paradise.";const d=document.createElement("h3");return d.classList.add("home-restaurantReserve"),d.textContent="Reservation",t.appendChild(e),t.appendChild(s),t.appendChild(d),t}())},e=t=>{document.querySelectorAll("nav-button").forEach((t=>{void 0!==t&&t.classList.remove("active")})),t.classList.add("active")},n=()=>{const n=document.createElement("header");n.classList.add("header");const a=n.offsetTop;window.pageYOffset>a?n.classList.add("stickyHeader"):n.classList.remove("stickyHeader");const s=document.createElement("h1");s.classList.add("restaurantName"),s.textContent="African.D";const d=document.createElement("p");d.classList.add("restaurantMottor"),d.textContent="Good food favours the hungry heart";const c=document.createElement("h3");return c.classList.add("restaurantReserve"),c.textContent="Reservation",n.appendChild(s),s.appendChild(d),n.appendChild((()=>{const n=document.createElement("div");n.classList.add("navbarContainer");const a=document.createElement("nav");a.classList.add("nav");const s=document.createElement("button");s.classList.add("nav-button"),s.textContent="Home",s.addEventListener("click",(n=>{n.target.classList.contains("active")||(e(s),t())}));const d=document.createElement("button");d.classList.add("nav-button"),d.textContent="About",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(e(d),(()=>{const t=document.getElementById("main");t.textContent="",t.appendChild((()=>{const t=document.createElement("div");t.classList.add("about");const e=document.createElement("div");e.classList.add("about-container");const n=document.createElement("div");n.classList.add("about-text");const a=document.createElement("h5");a.classList.add("about-header"),a.textContent="READ OUR STORY";const s=document.createElement("h4");s.classList.add("about-subheader"),s.textContent="We have been making the delicious food since 1999";const d=document.createElement("p");d.classList.add("about-paragraph"),d.textContent="In todays global economy, the primary aim for production of any service or commodity is to ensure such reach the ultimate consumers across the global market.Reaching markets that transcends beyond local country of productions often presents multiple level of challenges in terms of distribution.";const c=document.createElement("p");c.classList.add("about-paragraph"),c.textContent="In todays global economy, the primary aim for production of any service or commodity is to ensure such reach the ultimate consumers across the global market.Reaching markets that transcends beyond local country of productions often presents multiple level of challenges in terms of distribution. ",n.appendChild(a),n.appendChild(s),n.appendChild(d),n.appendChild(c);const o=document.createElement("div");o.classList.add("about-imgcontainer");const i=document.createElement("img");return i.src="images/img3.jpg",i.alt="Chef",i.classList.add("about-image"),o.appendChild(i),e.appendChild(n),e.appendChild(o),t.appendChild(e),t})())})())}));const c=document.createElement("button");c.classList.add("nav-button"),c.textContent="Menu";const o=document.createElement("button");o.classList.add("nav-button"),o.textContent="Contact";const i=document.createElement("button");i.classList.add("nav-button"),i.textContent="Order",a.appendChild(s),a.appendChild(c),a.appendChild(i),a.appendChild(d),a.appendChild(o);const l=document.createElement("div");l.classList.add("mobileMenu");const r=document.createElement("span");r.classList.add("bar");const m=document.createElement("span");m.classList.add("bar");const u=document.createElement("span");u.classList.add("bar"),l.appendChild(r),l.appendChild(m),l.appendChild(u),n.appendChild(l),n.appendChild(a);const p=()=>{n.classList.toggle("is-active"),a.classList.toggle("active")};return n.addEventListener("click",p),a.addEventListener("click",p),n})()),n.appendChild(c),n};(()=>{const a=document.getElementById("content");a.appendChild(n()),a.appendChild((()=>{const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t})()),a.appendChild((()=>{const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.classList.add("footerp"),e.textContent=`Copyright © ${(new Date).getFullYear()} debbyblessing`;const n=document.createElement("a");n.href="https://github.com/ibukun53/";const a=document.createElement("i");a.classList.add("fab"),a.classList.add("fa-github");const s=document.createElement("a");s.href="https://www.linkedin.com/in/ibukun53/";const d=document.createElement("i");return d.classList.add("fab"),d.classList.add("fa-linkedin"),n.appendChild(a),s.appendChild(d),t.appendChild(e),t.appendChild(n),t.appendChild(s),t})()),e(document.querySelector(".nav-button")),t()})()})();