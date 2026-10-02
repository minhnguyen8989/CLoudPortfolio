// ========================================
// AWS Lambda Function URL
// ========================================

const API_URL =
    "https://j3vexe2ryvzfsfhp2ztxzujkau0drduw.lambda-url.us-east-1.on.aws/ ";


// ========================================
// Fetch Projects From AWS
// ========================================

async function loadProjects() {

    const container =
        document.getElementById("projects-container");

    // Show loading message
    container.innerHTML = `
        <div class="col-12 text-center">
            <p class="text-muted">
                Loading projects...
            </p>
        </div>
    `;

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status}`
            );
        }

        const projects = await response.json();

        displayProjects(projects);

    } catch (error) {

        console.error(
            "Error loading projects:",
            error
        );

        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-danger">
                    Unable to load projects.
                </div>
            </div>
        `;
    }
}


// ========================================
// Display Projects
// ========================================

function displayProjects(projectList) {

    const container =
        document.getElementById("projects-container");

    container.innerHTML = "";

    if (projectList.length === 0) {

        container.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">
                    No projects available.
                </p>
            </div>
        `;

        return;
    }

    projectList.forEach(project => {

        const technologies =
            project.technologies
                .map(technology => `
                    <span class="badge bg-secondary me-1 mb-1">
                        ${technology}
                    </span>
                `)
                .join("");

        const projectCard = `

            <div class="col-12 col-md-6 col-lg-4">

                <div class="card h-100 shadow-sm project-card">

                    <div class="card-body d-flex flex-column">

                        <h4 class="card-title">
                            ${project.title}
                        </h4>

                        <p class="card-text text-muted">
                            ${project.description}
                        </p>

                        <div class="mb-3">
                            ${technologies}
                        </div>

                        <p>
                            <strong>Status:</strong>
                            ${project.status}
                        </p>

                        <div class="mt-auto">

                            <a
                                href="${project.githubUrl}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-dark">

                                View GitHub

                            </a>

                        </div>

                    </div>

                </div>

            </div>
        `;

        container.insertAdjacentHTML(
            "beforeend",
            projectCard
        );
    });
}


// ========================================
// Start Application
// ========================================

loadProjects();