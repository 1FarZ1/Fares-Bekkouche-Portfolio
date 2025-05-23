interface WorkExperience {
    title: string;
    period: string;
    description: string;
    achievements: string[];
  }
  
  export async function loadWorkExperience(): Promise<void> {
    try {

          // Check if we're on GitHub Pages or local development
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    // Use appropriate path based on environment
    const jsonPath = isGitHubPages 
      ? '/Fares-Bekkouche-Portfolio/data/work-experience.json' 
      : '/data/work-experience.json';
      const response = await fetch(jsonPath);

      console.log(response);
      
      if (!response.ok) {
        throw new Error(`Failed to load work experience data: ${response.status}`);
      }
      
      const workExperiences: WorkExperience[] = await response.json();
      
      // Get the work history wrapper element
      const workHistoryWrapper = document.getElementById('work-history-wrapper');
      
      if (!workHistoryWrapper) {
        throw new Error('Work history wrapper element not found');
      }
      
      // Clear existing content except the heading
      const heading = workHistoryWrapper.querySelector('h2');
      workHistoryWrapper.innerHTML = '';
      
      if (heading) {
        workHistoryWrapper.appendChild(heading);
      } else {
        const newHeading = document.createElement('h2');
        newHeading.textContent = 'Work History';
        workHistoryWrapper.appendChild(newHeading);
      }
      
      // Generate HTML for each work experience
      workExperiences.forEach(experience => {
        const card = document.createElement('div');
        card.className = 'card--work-history';
        
        const title = document.createElement('strong');
        title.textContent = experience.title;
        
        const period = document.createElement('p');
        period.textContent = experience.period;
        
        const description = document.createElement('p');
        description.textContent = experience.description;
        
        const achievementsList = document.createElement('ul');
        experience.achievements.forEach(achievement => {
          const item = document.createElement('li');
          item.textContent = achievement;
          achievementsList.appendChild(item);
        });
        
        card.appendChild(title);
        card.appendChild(period);
        card.appendChild(description);
        card.appendChild(achievementsList);
        
        workHistoryWrapper.appendChild(card);
      });
      
    } catch (error) {
      console.error('Error loading work experience:', error);
    }
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', loadWorkExperience);