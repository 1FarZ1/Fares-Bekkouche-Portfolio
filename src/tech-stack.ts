interface TechItem {
    category: string;
    skills: string;
  }
  
  export const techStack: TechItem[] = [
    {
      category: "Languages",
      skills: "Dart, TypeScript, C#, Python"
    },
    {
      category: "Backend Frameworks",
      skills: "Express, NodeJS, NestJs, Asp.Net Core, FastApi, Firebase Services"
    },
    {
      category: "Mobile Tech",
      skills: "Flutter, Riverpod, Bloc, Hive"
    },
    {
      category: "Databases",
      skills: "Postgres, MongoDB, MySQL"
    },
    {
      category: "Tools",
      skills: "VS Code, Git, GitHub, Postman, Swagger"
    },
    {
      category: "Cloud & Hosting",
      skills: "Heroku, AWS, Google Cloud, VPS"
    },
    {
      category: "Methodologies",
      skills: "Agile, Scrum, Kanban"
    }
  ];
  
  export function loadTechStack(): void {
    try {
      // Find the tech stack section
      const techStackSection = document.getElementById('tech-stack-wrapper');

      
      if (!techStackSection) {
        throw new Error('Tech stack section not found');
      }
      
      // Keep the heading
      const heading = techStackSection.querySelector('h2');
      
      // Clear existing content except the heading
      techStackSection.innerHTML = '';
      
      if (heading) {
        techStackSection.appendChild(heading);
      } else {
        const newHeading = document.createElement('h2');
        newHeading.textContent = 'Tech stack';
        techStackSection.appendChild(newHeading);
      }
      
      // Create wrapper for tech stack items
      const wrapper = document.createElement('div');
      wrapper.id = 'wrapper--techstack__items';
      techStackSection.appendChild(wrapper);
      
      // Generate HTML for each tech stack item
      for (const item of techStack) {
        const card = document.createElement('div');
        card.className = 'card--techstack';
        
        const category = document.createElement('h3');
        category.textContent = item.category;
        
        const skills = document.createElement('span');
        skills.textContent = item.skills;
        
        card.appendChild(category);
        card.appendChild(skills);
        
        wrapper.appendChild(card);
      }
      
    } catch (error) {
      console.error('Error loading tech stack:', error);
    }
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', loadTechStack);