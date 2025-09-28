// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Contact form
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out! I'll reply soon.");
  e.target.reset();
});

// Explore More button functionality
document.getElementById("explore-btn").addEventListener("click", function() {
  const aboutSection = document.getElementById("about");
  const headerHeight = document.querySelector('header').offsetHeight;
  const aboutPosition = aboutSection.offsetTop - headerHeight;
  
  window.scrollTo({
    top: aboutPosition,
    behavior: "smooth"
  });
});

// Project data
const projectData = {
  "technopreneurship": {
    title: "Technopreneurship Project",
    image: "/assets/TECHNO (Copy).png",
    description: "A platform where you can order or reserve your grilled food and check the delivery rel-time. This project is a user-friendly interfaces to create a seamless automation experience.",
    technologies: ["HTML", "JavaScript", "CSS"],
    features: [
      "Smart ordering app automation with mobile app control",
      "Energy consumption monitoring and optimization",
      "Real-time notifications and alerts",
      "Cross-platform compatibility"
    ],
    timeline: "5 months (January 2024 - April 2025)"
  },
  "vision-drive": {
    title: "OJT Project - Vision Drive",
    image: "/assets/Vision Drive.png",
    description: "Vision Drive is an innovative platform that showcases modern responsive design principles while providing valuable insights into driving behavior and safety. This project was developed during my On-the-Job Training.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    features: [
      "Fully responsive design for all devices",
      "Interactive data visualization dashboards",
      "Real-time driving analytics",
      "User profile management system",
      "Social sharing capabilities"
    ],
    timeline: "2 months (July 2023 - August 2024)"
  },
  "pending": {
    title: "Pending Projects",
    image: "/assets/IOT.jpg",
    description: "I'm currently working on several exciting IOT and Web design projects that push the boundaries of technology and design. These include AI-powered applications, Arduino, and innovative web platforms that aim to solve real-world problems.",
    technologies: ["AI/ML", "Arduino IDE", "Visual Studio"],
    features: [
      "Artificial intelligence integration",
      "Artificial intelligence automation",
      "Cross-platform mobile applications",
      "Cloud-native architecture",
      "Advanced data analytics"
    ],
    timeline: "Ongoing (Expected completion: Still in progress)"
  }
};

// Project Modal functionality
const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechnologies = document.getElementById("modal-technologies");
const modalFeatures = document.getElementById("modal-features");
const modalTimeline = document.getElementById("modal-timeline");
const closeModal = document.querySelector(".close-modal");

// Add click event to all "Know More" buttons
document.querySelectorAll('.know-more-btn').forEach(button => {
  button.addEventListener('click', function() {
    const projectCard = this.closest('.project-card');
    const projectId = projectCard.dataset.project;
    const project = projectData[projectId];
    
    // Set modal content
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTimeline.textContent = project.timeline;
    
    // Set technologies
    modalTechnologies.innerHTML = '';
    project.technologies.forEach(tech => {
      const techTag = document.createElement('span');
      techTag.className = 'tech-tag';
      techTag.textContent = tech;
      modalTechnologies.appendChild(techTag);
    });
    
    // Set features
    modalFeatures.innerHTML = '';
    project.features.forEach(feature => {
      const featureItem = document.createElement('li');
      featureItem.textContent = feature;
      modalFeatures.appendChild(featureItem);
    });
    
    // Show modal
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
});

// Close modal when clicking the X
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }
});

// Animated shapes background
const canvas = document.getElementById("shapes-bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

let shapes = [];
for (let i = 0; i < 25; i++) { // Reduced number of shapes for better performance
  shapes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 30 + 15, // Smaller shapes
    dx: (Math.random() - 0.5) * 0.8, // Slower movement
    dy: (Math.random() - 0.5) * 0.8,
    type: Math.random() > 0.5 ? "circle" : "square",
    opacity: Math.random() * 0.3 + 0.1 // Lower opacity
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  shapes.forEach(s => {
    ctx.fillStyle = `rgba(249, 178, 51, ${s.opacity})`;
    
    if (s.type === "circle") {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(s.x - s.size/2, s.y - s.size/2, s.size, s.size);
    }

    s.x += s.dx;
    s.y += s.dy;

    if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
    if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
  });

  requestAnimationFrame(animate);
}

// Start animation only when the page is loaded
window.addEventListener('load', () => {
  animate();
});

window.addEventListener("resize", () => {
  resizeCanvas();
});

// Header background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(26, 47, 59, 0.98)';
    header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.backgroundColor = 'rgba(26, 47, 59, 1)';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  }
});
