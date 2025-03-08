import { projects } from "./projects.js";
export function loadProjects() {
    try {
        // Get the projects section
        const projectsSection = document.querySelector('.section--page:last-of-type');
        if (!projectsSection) {
            throw new Error('Projects section not found');
        }
        // Keep the heading
        const heading = projectsSection.querySelector('h2');
        // Clear existing content except the heading
        projectsSection.innerHTML = '';
        if (heading) {
            projectsSection.appendChild(heading);
        }
        else {
            const newHeading = document.createElement('h2');
            newHeading.textContent = 'Projects & Accomplishments';
            projectsSection.appendChild(newHeading);
        }
        // Generate HTML for each project
        Object.entries(projects).forEach(([key, project]) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card--project';
            const link = document.createElement('a');
            link.href = `./views/project.html#${key}`;
            const trophy = document.createElement('span');
            trophy.textContent = '🏆 ';
            link.appendChild(trophy);
            link.appendChild(document.createTextNode(project.description));
            cardDiv.appendChild(link);
            projectsSection.appendChild(cardDiv);
        });
    }
    catch (error) {
        console.error('Error loading projects:', error);
    }
}
// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjects);
