var power = document.getElementById("power")
var powerPic = document.getElementById("power-pic")
var chi = document.getElementById("chi")
var chiPic = document.getElementById("chi-pic")
var wire = document.getElementById("wire")
var wirePic = document.getElementById("wire-pic")
var snowfall = document.getElementById("snowfall")
var snowfallPic = document.getElementById("snowfall-pic")

power.addEventListener("click", function() {
  if (powerPic.className === "hide") {
    powerPic.className = "";
  } else {
    powerPic.className = "hide";
  }
});

chi.addEventListener("click", function() {
  if (chiPic.className === "hide") {
    chiPic.className = "";
  } else {
    chiPic.className = "hide";
  }
});

wire.addEventListener("click", function() {
  if (wirePic.className === "hide") {
    wirePic.className = "";
  } else {
    wirePic.className = "hide";
  }
});
snowfall.addEventListener("click", function() {
  if (snowfallPic.className === "hide") {
    snowfallPic.className = "";
  } else {
    snowfallPic.className = "hide";
  }
});