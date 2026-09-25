const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const glow = $(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  $(".progress").style.width = `${max ? (scrollY / max) * 100 : 0}%`;
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.12});

$$(".reveal").forEach(el => revealObserver.observe(el));

const menu = $(".nav-links");
$(".menu-toggle").addEventListener("click", () => menu.classList.toggle("open"));
$$(".nav-links a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});

const sections = $$("main section[id]");
const navLinks = $$(".nav-links a");
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.style.color = "");
    const active = navLinks.find(a => a.getAttribute("href") === `#${entry.target.id}`);
    if (active) active.style.color = "#fff";
  });
}, {rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section => navObserver.observe(section));
