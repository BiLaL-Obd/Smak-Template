// header Section
let icon = document.querySelector("header .icon");
let navigation = document.querySelector("header .navigation");
icon.onclick = function (e) {
  navigation.classList.toggle("show");
  e.stopPropagation();
};

document.addEventListener("click", (e) => {
  if (e.target != icon && e.target != navigation) {
    if (navigation.classList.contains("show")) {
      navigation.classList.remove("show");
    }
  }
});

navigation.onclick = (e) => {
  e.stopPropagation();
};

// Works Section
// Filter
let switchFil = document.querySelectorAll(".content-work .shuffle li");
let imgs = Array.from(document.querySelectorAll(".work-image .image"));

switchFil.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

function removeActive() {
  switchFil.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.work).forEach((el) => {
    el.style.display = "block";
  });
}

// Team Section
let switchTeam = document.querySelectorAll(".team .team-profile .image");
let teamSkill = Array.from(document.querySelectorAll(".our-skills .box-skill"));

switchTeam.forEach((li) => {
  li.addEventListener("click", removeActiveImage);
  li.addEventListener("click", manageSkill);
});

function manageSkill() {
  teamSkill.forEach((team) => {
    team.style.display = "none";
  });
  document.querySelectorAll(this.dataset.skill).forEach((ele) => {
    ele.style.display = "block";
  });
}

function removeActiveImage() {
  switchTeam.forEach((team) => {
    team.classList.remove("active");
    this.classList.add("active");
  });
}

teamSkill.forEach((team) => {
  document.addEventListener("click", (e) => {
    // console.log(e.target.dataset.close);
    if (e.target.dataset.close == team.classList.value.split(" ")[1]) {
      team.style.display = "none";
    }
  });
});

// Window On Scroll
let goTop = document.querySelector(".scroll-top");
window.onscroll = function () {
  if (window.scrollY >= 400) {
    goTop.classList.add("show");
  } else {
    goTop.classList.remove("show");
  }
};
