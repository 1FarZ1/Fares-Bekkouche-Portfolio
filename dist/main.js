import { projects } from "./projects.js";
import { initializeSwiper } from './swiper-init.js';
function loadProject(projectKey) {
    const project = projects[projectKey];
    let contentContainer = document.getElementById("project-content");
    if (!project) {
        if (contentContainer) {
            contentContainer.innerHTML = "<h1>Project Not Found</h1>";
        }
    }
    const sourceLink = project.sourceType === "open" ? `<a href="${project.codeLink}">Source Code</a>` : '<span class="locked">Source Code (Closed)</span>';
    const demoLink = project.hasDemo ? `<a href="${project.demoLink}">Live Demo</a>` : '<span class="locked">Live Demo (Not Available)</span>';
    const content = `
        <h1>${project.title}</h1>
        <ul>
            <li>${demoLink}</li>
            <li>${sourceLink}</li>
        </ul>
        <p>${project.description}</p>
        <ul>
            ${project.details.map((detail) => `<li>${detail}</li>`).join('')}
        </ul>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                ${project.images.map((image) => `<div class="swiper-slide"><img src="../assets/apps/${image}" alt="Project Image"></div>`).join('')}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;
    if (contentContainer) {
        contentContainer.innerHTML = content;
    }
}
const projectKey = window.location.hash.substring(1);
loadProject(projectKey);
setTimeout(initializeSwiper, 2000);
