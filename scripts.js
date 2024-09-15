"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const experienceList = document.getElementById('experienceList');
    const addExperienceButton = document.getElementById('addExperienceButton');
    // Add a new experience input
    addExperienceButton.addEventListener('click', () => {
        var _a;
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = `
        <input type="text" name="experience" placeholder="Enter experience">
        <button type="button" class="remove-experience">-</button>
      `;
        experienceList === null || experienceList === void 0 ? void 0 : experienceList.insertBefore(experienceItem, addExperienceButton); // Insert new experience before the add button
        // Add event listener for removing experiences
        (_a = experienceItem.querySelector('.remove-experience')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            experienceItem.remove();
            updateExperienceNumbers();
        });
        updateExperienceNumbers();
    });
    // Function to update the experience numbers (if needed)
    const updateExperienceNumbers = () => {
        const experienceItems = experienceList === null || experienceList === void 0 ? void 0 : experienceList.querySelectorAll('.experience-item');
        experienceItems === null || experienceItems === void 0 ? void 0 : experienceItems.forEach((item, index) => {
            const input = item.querySelector('input');
            if (input) {
                input.setAttribute('placeholder', `Experience ${index + 1}`);
            }
        });
    };
    // Initialize with one experience field
    updateExperienceNumbers();
});
