const themes = document.getElementsByClassName("theme");
Array.from(themes).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        const target = e.target;
        const body = document.querySelector("body");
        if (body && target.dataset.theme) {
            body.setAttribute("data-theme", target.dataset.theme);
            localStorage.setItem("theme", target.dataset.theme);
        }
    });
});
function getThemeOnLoad() {
    const theme = localStorage.getItem("theme");
    console.log(theme);
    const body = document.querySelector("body");
    if (theme && body) {
        body.setAttribute("data-theme", theme);
    }
}
getThemeOnLoad();
