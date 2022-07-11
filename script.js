const el_links = document.querySelector(".links");

const el_link = document.querySelectorAll(".links > ul > li");

const el_changeTheme = document.querySelector(".changeTheme");

const el_searchForm = document.querySelector("#searchbar");
const el_searchIcon = document.querySelector("#inputIcon");
const el_searchInput = document.querySelector("#searchInput");

const isValidURL = (string = "") => {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (res != null) {
    return true;
  }
  return false;
};

function onSearchSubmit(event) {
  event.preventDefault();
  let inputValue = el_searchInput.value;
  if (isValidURL(inputValue)) {
    if (!inputValue.startsWith("http://")) {
      inputValue = "http://" + inputValue;
    } else if (!inputValue.startsWith("http://www.")) {
      inputValue = "http://www." + inputValue;
    }
    window.location = inputValue;
  } else {
    window.location =
      "https://www.google.com/search?q=" + inputValue.replace(" ", "+");
  }
  console.log(el_searchInput.value);
}

el_searchIcon.addEventListener("click", (e) => {
  el_searchInput.focus();
});

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

getTheme();

el_link.forEach((element) => {
  element.querySelector("img").src =
    "./assets/icons_" + theme + "/" + element.className + ".png";
});

el_changeTheme.querySelector("img").src =
  "./assets/icons_" + iconTheme + "/theme.png";

el_changeTheme.addEventListener("click", updateTheme);
