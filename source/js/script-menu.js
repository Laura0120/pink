var header = document.querySelector(".page-header");
var navMain = header.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");

function addScriptMenuListeners() {
  var closed = "main-nav--closed";
  var headerOpened = "page-header--opened";
  var opened = "main-nav--opened";
  var nojs = "main-nav--nojs";

  var changeNavMainView = function (from, to) {
    navMain.classList.remove(from);
    navMain.classList.add(to);
  };

  header.classList.remove(headerOpened);
  navMain.classList.remove(nojs);
  changeNavMainView(opened, closed);

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains(closed)) {
      changeNavMainView(closed, opened);
      header.classList.add(headerOpened);
    } else {
      changeNavMainView(opened, closed);
      header.classList.remove(headerOpened);
    }
  });
}

addScriptMenuListeners();
