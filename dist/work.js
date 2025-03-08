export async function loadWorkExperience() {
    try {
        const response = await fetch('../data/work-experience.json');
        console.log(response);
        if (!response.ok) {
            throw new Error(`Failed to load work experience data: ${response.status}`);
        }
        const workExperiences = await response.json();
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
        }
        else {
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
    }
    catch (error) {
        console.error('Error loading work experience:', error);
    }
}
// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadWorkExperience);
