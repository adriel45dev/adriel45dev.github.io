const drawerProfile = document.getElementById("drawer-profile");
const actionProfile = document.querySelectorAll(".trigger-profile");

actionProfile.forEach((e) => {
  e.addEventListener("click", () => {
    drawerProfile.classList.toggle("-translate-x-full");
  });
});
