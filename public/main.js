import about from "./views/about.js";
import contact from "./views/contact.js";
import home from "./views/home.js"


const routes = {
  "/": { title: "Home", render: home },
  "/about": { title: "About", render: about },
  "/contact": { title: "Contact", render: contact }
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