const projects = [
    {
        title: "DSA Search Engine",
        description: "A Python search engine built using core data structures and algorithms.",
        technologies: [
            "Python",
            "Pytest",
            "Data Structures",
            "Algorithms"
        ],
        githubUrl: "https://github.com/YOUR-USERNAME/DSASearchEngine"
    },
    {
        title: "DriveSafe Route Analyzer",
        description: "A route analysis web application that displays driving routes and checkpoints on an interactive map.",
        technologies: [
            "Python",
            "Flask",
            "Mapbox",
            "JavaScript"
        ],
        githubUrl: "https://github.com/YOUR-USERNAME/DriveSafeRouteAnalyzer"
    },
    {
        title: "Cloud Portfolio",
        description: "A responsive portfolio application using Bootstrap with a serverless AWS backend.",
        technologies: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "AWS"
        ],
        githubUrl: "https://github.com/YOUR-USERNAME/CloudPortfolio"
    }
];


function displayProjects(projectList) {

    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    projectList.forEach(project => {

        const technologies = project.technologies
            .map(technology =>
                `<span class="badge bg-secondary me-1 mb-1">
                    ${technology}
                </span>`
            )
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


displayProjects(projects);