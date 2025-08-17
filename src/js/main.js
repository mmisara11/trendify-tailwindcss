document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

document.getElementById("toggle").addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // لو فيه هاش في اللينك
  if (window.location.hash) {
    // امسحه قبل ما المتصفح ينط
    history.replaceState(null, null, " ");

    // بعدها ارجع لأول سكشن
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  }
});
