import home from "./views/home.js";
import projects from "./views/projects.js";
import resume from "./views/resume.js";

const routes = {
  "/": { title: "Home", render: home },
  "/resume": { title: "Resume", render: resume },
  "/projects": { title: "Projects", render: projects }
};

function setActiveLink() {
  var navLinks = document.querySelectorAll(".nav-link");
  var currentPath = location.pathname;

  navLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

function router() {
  let view = routes[location.pathname];

  if (view) {
    document.title = view.title;
    app.innerHTML = view.render();
    setActiveLink();
  } else {
    history.replaceState("", "", "/");
    router();
  }
};

window.addEventListener("click", e => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

window.router = router;

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
