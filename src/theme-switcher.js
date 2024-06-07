var themes = document.getElementsByClassName("theme");
Array.from(themes).forEach(function (theme) {
    theme.addEventListener("click", function (e) {
        var target = e.target;
        var body = document.querySelector("body");
        if (body && target.dataset.theme) {
            body.setAttribute("data-theme", target.dataset.theme);
            localStorage.setItem("theme", target.dataset.theme);
        }
    });
});
function getThemeOnLoad() {
    var theme = localStorage.getItem("theme");
    console.log(theme);
    var body = document.querySelector("body");
    if (theme && body) {
        body.setAttribute("data-theme", theme);
    }
}
getThemeOnLoad();
