const portfolio = {
  name: "Smriti Pandey",
  role: "Aspiring Data Analyst and Data Science Student",
  summary:
    "I am building my career through hands-on projects, practical problem-solving, and a strong interest in creating thoughtful digital experiences.",
  focus: {
    title: "Learning by building consistent, real-world work.",
    description:
      "This portfolio is designed as a living space for my projects, technical growth, and the kind of opportunities I want to grow into next."
  },
  highlights: [
    "Open to internships and entry-level roles",
    "Focused on web development and software fundamentals",
    "Actively building projects and improving every week"
  ],
  about:
    "I’m Smriti Pandey, a learner who wants to turn curiosity into practical software skills. I enjoy taking an idea from a rough concept to something people can actually use, and I’m especially interested in strengthening my frontend, programming, and problem-solving foundations. This first version of my portfolio gives me a space to show that growth clearly.",
  skills: [
    "HTML",
    "CSS",
    "Git & GitHub",
    "Python",
    "Pandas",
    "NumPy",
    "SQL",
    "Data Visualization",
    "Tableau",
    "Power BI",
    "Data Cleaning",
    "Exploratory Data Analysis",
    "Machine Learning Basics",
    "Critical Thinking",
    "Problem Solving",
    "Communication"
  ],
  projects: [
    {
      title: "Deepfake Detection System",
      description:
        "Developing an AI-based system capable of detecting and classifying deepfake content in images. The project adopts a multi-stream neural architecture, integrating spatial, temporal, and spectral features through vision transformers, 3D-CNNs, and self-supervised learning methods. The focus is on robust model generalization, capable of identifying GAN-generated and compressed fake content in real-world environments.",
      tag: "College Project",
      accent: "linear-gradient(135deg, #c8553d, #8e351f)"
    },
    {
      title: "Bengaluru House Prediction",
      description:
        "Developed a model achieving 90% accuracy for predicting price, locations and other parameters. Applied preprocessing, feature selection, and ensemble algorithms for optimization.",
      tag: "Prediction Model",
      accent: "linear-gradient(135deg, #7c966c, #49613b)"
    },
    {
      title: "OYO Case Study",
      description:
        "Developed a model achieving 85% accuracy for predicting the rise and fall of OYO in India and all over the world. Applied preprocessing, feature selection, and ensemble algorithms for optimization.",
      tag: "Case Study",
      accent: "linear-gradient(135deg, #f3af3d, #b96d00)"
    }
  ],
  education: [
    {
      title: "BTech in Data Science and Engineering",
      detail: "Data Science", institution: "Shri Ramswaroop Memorial College of Engineering and Management", graduationYear: "2026"
    }
  ],
  achievements: [
    "Data Science and Machine Learning through IBM Internship.",
    "Python Programming through IBM Internship.",
    "Data Analytics Job Simulation through Deloitte virtual Internship.",
    "Data Science with Python through SRDT Summer Internship.",
    "Certificate for being a Student Volunteer at the 11th IEEE UP Section International Conference.",
    "Certificate for organizing State Level Event as an Anchor."
  ],
  contact: {
    intro:
      "If you’d like to collaborate, discuss an internship, or just connect, I’d love to hear from you.",
    email: "smriti@example.com",
    linkedin: "https://www.linkedin.com/in/smriti-pandey-23093a2a2/",
    github: "https://github.com/Smriti-3018/"
  }
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

setText("hero-name", portfolio.name);
setText("hero-role", portfolio.role);
setText("hero-summary", portfolio.summary);
setText("focus-title", portfolio.focus.title);
setText("focus-description", portfolio.focus.description);
setText("about-text", portfolio.about);
setText("contact-text", portfolio.contact.intro);

const highlightContainer = document.getElementById("hero-highlights");
portfolio.highlights.forEach((item) => {
  const block = document.createElement("div");
  block.className = "highlight-item";
  block.textContent = item;
  highlightContainer.appendChild(block);
});

const skillContainer = document.getElementById("skills-list");
portfolio.skills.forEach((skill) => {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = skill;
  skillContainer.appendChild(chip);
});

const projectGrid = document.getElementById("project-grid");
portfolio.projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project-card reveal";
  article.innerHTML = `
    <div class="project-accent" style="background:${project.accent}"></div>
    <div class="project-copy">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <span class="project-tag">${project.tag}</span>
    </div>
  `;
  projectGrid.appendChild(article);
});

const educationList = document.getElementById("education-list");
portfolio.education.forEach((item) => {
  const block = document.createElement("div");
  block.innerHTML = `<h3>${item.title}</h3><p>${item.detail}</p>`;
  educationList.appendChild(block);
});

const achievementList = document.getElementById("achievement-list");
portfolio.achievements.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  achievementList.appendChild(listItem);
});

const emailLink = document.getElementById("email-link");
emailLink.textContent = portfolio.contact.email;
emailLink.href = `mailto:${portfolio.contact.email}`;

const linkedinLink = document.getElementById("linkedin-link");
linkedinLink.href = portfolio.contact.linkedin;

const githubLink = document.getElementById("github-link");
githubLink.href = portfolio.contact.github;
