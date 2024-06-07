const themes = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        document
            .querySelector("body")
            .setAttribute("data-theme", e.target.dataset.theme);
        localStorage.setItem("theme", e.target.dataset.theme);
    });
});

function getThemeOnLoad() {
    const theme = localStorage.getItem("theme");

    if (theme) {
        document.querySelector("body").setAttribute("data-theme", theme);
    }
}

getThemeOnLoad();


new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});