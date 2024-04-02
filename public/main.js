import about from "./views/about.js";
import projects from "./views/projects.js";

const routes = {
  "/": { title: "About", render: about },
  "/projects": { title: "Projects", render: projects }
};

function router() {
  let view = routes[location.pathname];

  if (view) {
    document.title = view.title;
    app.innerHTML = view.render();
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

//router global funktion
window.router = router;

//uppdaterar router när spa sida laddas
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);