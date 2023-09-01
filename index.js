const btnToggleProfile = document.getElementById("toogle-profile");
const btnCloseDrawer = document.getElementById("close-drawer");
const drawerProfile = document.getElementById("drawer-profile");

btnToggleProfile.addEventListener("click", () => {
  drawerProfile.classList.toggle("-translate-x-full");
});

btnCloseDrawer.addEventListener("click", () => {
  drawerProfile.classList.toggle("-translate-x-full");
});
