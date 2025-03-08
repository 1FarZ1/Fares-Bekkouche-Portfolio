import { projects } from "./projects.js";

export function loadProjects(): void {
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
    } else {
      const newHeading = document.createElement('h2');
      newHeading.textContent = 'Projects & Accomplishments';
      projectsSection.appendChild(newHeading);
    }
    
    // Create grid container
    const gridContainer = document.createElement('div');
    gridContainer.className = 'projects-grid';
    projectsSection.appendChild(gridContainer);
    
    // Add CSS for grid layout to the document
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      
      .card--project {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
      }
      
      .card--project:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      }
      
      .card--project img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-bottom: 1px solid #eaeaea;
      }
      
      .card--project .project-content {
        padding: 15px;
      }
      
      .card--project a {
        color: inherit;
        text-decoration: none;
      }
      
      .card--project h3 {
        margin-top: 0;
        font-size: 18px;
      }
      
      .card--project p {
        margin: 10px 0;
        font-size: 14px;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Generate HTML for each project
    for (const key in projects) {
      if (projects.hasOwnProperty(key)) {
        const project = projects[key];
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card--project';
        
        // Create a link wrapper for the entire card
        const link = document.createElement('a');
        link.href = `./views/project.html#${key}`;
        
        // Add image
        const imageContainer = document.createElement('div');
        const img = document.createElement('img');
        
        // Use the first image from the images array or a placeholder
        if (project.images && project.images.length > 0 && project.images[0] !== "") {
          img.src = `./assets/apps/${project.images[0]}`;
        } else {
          img.src = "./assets/images/placeholder.png"; // Make sure to have a placeholder image
        }
        img.alt = project.title;
        imageContainer.appendChild(img);
        
        // Add content
        const contentDiv = document.createElement('div');
        contentDiv.className = 'project-content';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        // Add trophy icon
        const trophy = document.createElement('span');
        trophy.textContent = '🏆 ';
        title.insertBefore(trophy, title.firstChild);
        
        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        
        link.appendChild(imageContainer);
        link.appendChild(contentDiv);
        cardDiv.appendChild(link);
        
        gridContainer.appendChild(cardDiv);
      }
    }
    
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjects);