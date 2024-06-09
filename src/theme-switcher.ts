const themes: HTMLCollectionOf<Element> = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme: Element) => {
    theme.addEventListener("click", (e: Event) => {
        const target = (e as MouseEvent).target as HTMLElement;
        const body = document.querySelector("body");
        if (body && target.dataset.theme) {
            body.setAttribute("data-theme", target.dataset.theme);
            localStorage.setItem("theme", target.dataset.theme);
        }
    });
});

function getThemeOnLoad(): void {
    const theme: string | null = localStorage.getItem("theme");

    const body = document.querySelector("body");
    if(body){
        if (theme ) {
            body.setAttribute("data-theme", theme);
        }
        else {
            body.setAttribute("data-theme", "dark");
        }

    }
}

getThemeOnLoad();
