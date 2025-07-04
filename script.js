// Projects data
const projects = [
  {
    title: "ChronoDiag (MonProjetFinEtud)",
    period: "2024-2025",
    description:
      "Application web de gestion du diagnostic médical avec frontend/backend complet - Projet de fin d'études",
    technologies: ["PHP", "SQL", "HTML/CSS", "JavaScript"],
    github: "https://github.com/oussama-achiban/MonProjetFinEtud",
    type: "Web Application",
    status: "Projet de Fin d'Études",
  },
  {
    title: "Système de Gestion Mozeria",
    period: "2024 - En cours",
    description: "Application desktop Python pour la gestion complète d'un restaurant avec interface graphique",
    technologies: ["Python", "Tkinter", "Base de données"],
    github: "https://github.com/oussama-achiban/mozeria",
    type: "Desktop Application",
    status: "En développement",
  },
  {
    title: "Système de Gestion d'Étudiants",
    period: "2023-2024",
    description: "Application console en C pour la gestion complète des données étudiants avec structures optimisées",
    technologies: ["C", "Structures de données", "Gestion fichiers", "Makefile"],
    github: "https://github.com/oussama-achiban/ProjetGestionEtudiants-c-",
    type: "Console Application",
    status: "Terminé",
  },
  {
    title: "SpaceHTML",
    period: "2024",
    description: "Projet web avec focus sur le design et les animations CSS pour une expérience utilisateur immersive",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/oussama-achiban/spaceHTML",
    type: "Web Design",
    status: "Terminé",
  },
  {
    title: "Manipulation des Pointeurs",
    period: "2024",
    description: "Exercices et exemples pratiques sur la manipulation des pointeurs en langage C",
    technologies: ["C", "Pointeurs", "Gestion mémoire"],
    github: "https://github.com/oussama-achiban/manipulation-des-pointeurs",
    type: "Exercices Pratiques",
    status: "Terminé",
  },
  {
    title: "TP Programmation C",
    period: "2024",
    description: "Travaux pratiques et exercices de programmation en langage C couvrant les concepts fondamentaux",
    technologies: ["C", "Algorithmes", "Structures de données"],
    github: "https://github.com/oussama-achiban/TP-programmation-c",
    type: "Travaux Pratiques",
    status: "Terminé",
  },
  {
    title: "PHP TP1",
    period: "2024",
    description: "Premier travail pratique en PHP - Introduction au développement web côté serveur",
    technologies: ["PHP", "HTML", "Web Development"],
    github: "https://github.com/oussama-achiban/php_TP1",
    type: "Travaux Pratiques",
    status: "Terminé",
  },
]

// DOM Elements
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const projectsGrid = document.getElementById("projects-grid")

// Mobile Navigation Toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Smooth scrolling and active navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Update active navigation on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })

  // Navbar background on scroll
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
  }
})

// Load projects
function loadProjects() {
  projectsGrid.innerHTML = ""

  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = "card project-card"

    projectCard.innerHTML = `
            <div class="project-header">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="badge">${project.period}</span>
                </div>
                <span class="project-type">${project.type}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map((tech) => `<span class="tag">${tech}</span>`).join("")}
            </div>
            <div class="project-footer">
                <span class="project-status">${project.status}</span>
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                    Voir le code
                    <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i>
                </a>
            </div>
        `

    projectsGrid.appendChild(projectCard)
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadProjects()

  // Add fade-in animation to cards
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.classList.add("fade-in")
    observer.observe(card)
  })

  // Add fade-in animation to sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })
})

// Add some interactive effects
document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    } else {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
    }
  })
})

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 150)
  }
})
