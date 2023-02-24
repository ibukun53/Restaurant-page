(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("homespan");const n=document.createElement("span");n.classList.add("homebar"),n.textContent="";const a=document.createElement("h4");a.classList.add("h4"),a.textContent="HELLO, NEW FRIEND",t.appendChild(n),t.appendChild(a);const s=document.createElement("p");s.classList.add("p"),s.textContent="Feels like Home,tastes like a Paradise.";const d=document.createElement("h3");return d.classList.add("home-restaurantReserve"),d.textContent="Reservation",e.appendChild(t),e.appendChild(s),e.appendChild(d),e}())},t=e=>{document.querySelectorAll("nav-button").forEach((e=>{void 0!==e&&e.classList.remove("active")})),e.classList.add("active")},n=()=>{const n=document.createElement("header");n.classList.add("header");const a=n.offsetTop;window.pageYOffset>a?n.classList.add("stickyHeader"):n.classList.remove("stickyHeader");const s=document.createElement("h1");s.classList.add("restaurantName"),s.textContent="African.D";const d=document.createElement("p");d.classList.add("restaurantMottor"),d.textContent="Good food favours the hungry heart";const o=document.createElement("h3");return o.classList.add("restaurantReserve"),o.textContent="Reservation",n.appendChild(s),s.appendChild(d),n.appendChild((()=>{const n=document.createElement("div");n.classList.add("navbarContainer");const a=document.createElement("nav");a.classList.add("nav");const s=document.createElement("button");s.classList.add("nav-button"),s.textContent="Home",s.addEventListener("click",(n=>{n.target.classList.contains("active")||(t(s),e())}));const d=document.createElement("button");d.classList.add("nav-button"),d.textContent="About",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(t(d),(()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("about");const t=document.createElement("div");t.classList.add("about-container");const n=document.createElement("div");n.classList.add("about-text");const a=document.createElement("h5");a.classList.add("about-header"),a.textContent="READ OUR STORY";const s=document.createElement("h4");s.classList.add("about-subheader"),s.textContent="We have been making the delicious food since 1999";const d=document.createElement("p");d.classList.add("about-paragraph"),d.textContent="In todays global economy, the primary aim for production of any service or commodity is to ensure such reach the ultimate consumers across the global market.Reaching markets that transcends beyond local country of productions often presents multiple level of challenges in terms of distribution.";const o=document.createElement("p");o.classList.add("about-paragraph"),o.textContent="In todays global economy, the primary aim for production of any service or commodity is to ensure such reach the ultimate consumers across the global market.Reaching markets that transcends beyond local country of productions often presents multiple level of challenges in terms of distribution. ",n.appendChild(a),n.appendChild(s),n.appendChild(d),n.appendChild(o);const c=document.createElement("div");c.classList.add("about-imgcontainer");const i=document.createElement("img");return i.src="images/img3.jpg",i.alt="Chef",i.classList.add("about-image"),c.appendChild(i),t.appendChild(n),t.appendChild(c),e.appendChild(t),e})())})())}));const o=document.createElement("button");o.classList.add("nav-button"),o.textContent="Menu",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(t(o),(()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h3");t.classList.add("menu-title"),t.textContent="Our Menus",e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-container");const a=document.createElement("div");a.classList.add("menu-imagecontainer");const s=document.createElement("img");s.src="images/img3.jpg",s.alt="food",s.classList.add("menu-image"),a.appendChild(s);const d=document.createElement("img");d.src="images/img3.jpg",d.alt="food",d.classList.add("menu-image"),a.appendChild(d);const o=document.createElement("img");o.src="images/img3.jpg",o.alt="food",o.classList.add("menu-image"),a.appendChild(o);const c=document.createElement("img");c.src="images/img3.jpg",c.alt="food",c.classList.add("menu-image"),a.appendChild(c);const i=document.createElement("img");i.src="images/img3.jpg",i.alt="food",i.classList.add("menu-image"),a.appendChild(i);const l=document.createElement("img");l.src="images/img3.jpg",l.alt="food",l.classList.add("menu-image"),a.appendChild(l);const m=document.createElement("div");m.classList.add("menu-textcontainer");const r=document.createElement("h4");r.classList.add("menu-head"),r.textContent="Testimonials";const p=document.createElement("p");return p.classList.add("menu-paragraph"),p.textContent="In todays global economy, the primary aim for production of any service or commodity isIn todays global economy, the primary aim for production of any service or commodity isIn todays global economy, the primary aim for production of any service or commodity isIn todays global economy, the primary aim for production of any service or commodity iIn todays global economy, the primary aim for production of any service or commodity isIn todays global economy, the primary aim for production of any service or commodity i",m.appendChild(r),m.appendChild(p),n.appendChild(a),n.appendChild(m),e.appendChild(n),e})())})())}));const c=document.createElement("button");c.classList.add("nav-button"),c.textContent="Contact";const i=document.createElement("button");i.classList.add("nav-button"),i.textContent="Order",a.appendChild(s),a.appendChild(o),a.appendChild(i),a.appendChild(d),a.appendChild(c);const l=document.createElement("div");l.classList.add("mobileMenu");const m=document.createElement("span");m.classList.add("bar");const r=document.createElement("span");r.classList.add("bar");const p=document.createElement("span");p.classList.add("bar"),l.appendChild(m),l.appendChild(r),l.appendChild(p),n.appendChild(l),n.appendChild(a);const u=()=>{n.classList.toggle("is-active"),a.classList.toggle("active")};return n.addEventListener("click",u),a.addEventListener("click",u),n})()),n.appendChild(o),n};(()=>{const a=document.getElementById("content");a.appendChild(n()),a.appendChild((()=>{const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e})()),a.appendChild((()=>{const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.classList.add("footerp"),t.textContent=`Copyright © ${(new Date).getFullYear()} debbyblessing`;const n=document.createElement("a");n.href="https://github.com/ibukun53/";const a=document.createElement("i");a.classList.add("fab"),a.classList.add("fa-github");const s=document.createElement("a");s.href="https://www.linkedin.com/in/ibukun53/";const d=document.createElement("i");return d.classList.add("fab"),d.classList.add("fa-linkedin"),n.appendChild(a),s.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(s),e})()),t(document.querySelector(".nav-button")),e()})()})();