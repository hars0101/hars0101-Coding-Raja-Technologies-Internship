let experienceCount = 1;
let educationCount = 1;
let skillsCount = 1;
let projectsCount = 1;

function addExperience() {
    experienceCount++;
    const experienceFields = document.getElementById('experienceFields');
    const newExperienceField = document.createElement('div');
    newExperienceField.classList.add('experienceField');
    newExperienceField.innerHTML = `
        <div class="experienceEntry">
            <label for="jobTitle${experienceCount}">Job Title:</label>
            <input type="text" id="jobTitle${experienceCount}">
            <label for="employer${experienceCount}">Employer:</label>
            <input type="text" id="employer${experienceCount}">
            <label for="startDate${experienceCount}">Start Date:</label>
            <input type="date" id="startDate${experienceCount}">
            <label for="endDate${experienceCount}">End Date:</label>
            <input type="date" id="endDate${experienceCount}">
            <label for="description${experienceCount}">Description:</label>
            <textarea id="description${experienceCount}"></textarea>
        </div>
    `;
    experienceFields.appendChild(newExperienceField);
}

function addEducation() {
    educationCount++;
    const educationFields = document.getElementById('educationFields');
    const newEducationField = document.createElement('div');
    newEducationField.classList.add('educationField');
    newEducationField.innerHTML = `
        <div class="educationEntry">
            <label for="education${educationCount}">Education:</label>
            <textarea id="education${educationCount}"></textarea>
        </div>
    `;
    educationFields.appendChild(newEducationField);
}

function addSkills() {
    skillsCount++;
    const skillsFields = document.getElementById('skillsFields');
    const newSkillsField = document.createElement('div');
    newSkillsField.classList.add('skillsField');
    newSkillsField.innerHTML = `
        <div class="skillsEntry">
            <label for="skills${skillsCount}">Skills:</label>
            <textarea id="skills${skillsCount}"></textarea>
        </div>
    `;
    skillsFields.appendChild(newSkillsField);
}

function addProjects() {
    projectsCount++;
    const projectsFields = document.getElementById('projectsFields');
    const newProjectsField = document.createElement('div');
    newProjectsField.classList.add('projectsField');
    newProjectsField.innerHTML = `
        <div class="projectsEntry">
            <label for="projects${projectsCount}">Projects:</label>
            <textarea id="projects${projectsCount}"></textarea>
        </div>
    `;
    projectsFields.appendChild(newProjectsField);
}

function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;

    let experience = '';
    for (let i = 1; i <= experienceCount; i++) {
        const jobTitle = document.getElementById(`jobTitle${i}`).value;
        const employer = document.getElementById(`employer${i}`).value;
        const startDate = document.getElementById(`startDate${i}`).value;
        const endDate = document.getElementById(`endDate${i}`).value;
        const description = document.getElementById(`description${i}`).value;

        experience += `
            <div class="experienceBlock">
                <h3>${jobTitle} at ${employer}</h3>
                <p>${startDate} - ${endDate}</p>
                <p>${description}</p>
            </div>
        `;
    }

    // CSS styles for the resume
    const resumeCSS = `
        <style>
            body {
                font-family: 'Arial', sans-serif;
            }
            .container {
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                text-align: center;
                color: #007bff;
            }
            .section {
                margin-bottom: 20px;
            }
            .experienceBlock {
                margin-bottom: 20px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 10px;
            }
            button {
                display: block;
                width: 100%;
                padding: 10px 20px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
                animation: fadeIn 1s ease;
            }
            button:hover {
                background-color: #0056b3;
            }
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        </style>
    `;

    // Concatenate the resumeHTML with the CSS styles
    const resumeHTML = `
        ${resumeCSS}
        <div class="container">
            <h1>${name}</h1>
            <div class="section">
                <h3>Work Experience</h3>
                ${experience}
            </div>
            <div class="section">
                <h3>Education</h3>
                <p>${education}</p>
            </div>
            <div class="section">
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
            <div class="section">
                <h3>Projects</h3>
                <p>${projects}</p>
            </div>
            <button onclick="window.print()">Download</button>
        </div>
    `;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(resumeHTML);
}
