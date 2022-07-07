const el_links = document.querySelector(".links");

const el_link = document.querySelectorAll(".links > ul > li");

const el_changeTheme = document.querySelector(".changeTheme");

let theme;
let iconTheme;

// for (i = 0; i < el_link.length; i++) {
//   el_link[i].addEventListener("click", (e) => {
//     window.location.href = e.currentTarget.dataset.link;
//   });
// }

// console.log(el_link[0].querySelector("img").src);

function setCacheObj(name = "", value = "") {
  localStorage.setItem(name, value);
}

let getCacheObj = (name = "") => {
  return localStorage.getItem(name);
};

let checkCacheObj = (name = "") => {
  let item = localStorage.getItem(name);
  if (item != null && item != "") {
    return true;
  }
  return false;
};

// localStorage.clear();
// console.log("Test");

function getTheme() {
  if (!checkCacheObj("theme")) {
    setCacheObj("theme", "normal");
  }

  theme = getCacheObj("theme");
  if (theme == "cloud") {
    iconTheme = "drawn";
  } else if (theme == "drawn") {
    iconTheme = "effect";
  } else if (theme == "effect") {
    iconTheme = "normal";
  } else if (theme == "normal") {
    iconTheme = "cloud";
  }
}

function updateTheme() {
  setCacheObj("theme", iconTheme);
  getTheme();

  el_link.forEach((element) => {
    element.querySelector("img").src =
      "./assets/icons_" + theme + "/" + element.className + ".png";
  });

  el_changeTheme.querySelector("img").src =
    "./assets/icons_" + iconTheme + "/theme.png";
}

window.addEventListener("load", () => {
  getTheme();

  el_link.forEach((element) => {
    element.querySelector("img").src =
      "./assets/icons_" + theme + "/" + element.className + ".png";
  });

  el_changeTheme.querySelector("img").src =
    "./assets/icons_" + iconTheme + "/theme.png";

  el_changeTheme.addEventListener("click", updateTheme);
});
