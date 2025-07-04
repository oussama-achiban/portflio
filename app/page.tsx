"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Calendar,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    programming: ["Java", "Python", "C++", "JavaScript", "PHP", "C", "SQL"],
    web: ["HTML/CSS", "JavaScript", "PHP", "Responsive Design"],
    concepts: ["POO", "Structures de données", "Algorithmes", "UML", "Merise"],
    tools: ["Git/GitHub", "Makefile", "Tkinter", "Base de données"],
  }

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
      description:
        "Projet web avec focus sur le design et les animations CSS pour une expérience utilisateur immersive",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">Oussama Achiban</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "education", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {section === "about"
                    ? "À propos"
                    : section === "education"
                      ? "Formation"
                      : section === "skills"
                        ? "Compétences"
                        : section === "projects"
                          ? "Projets"
                          : "Contact"}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {["about", "education", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 capitalize"
                >
                  {section === "about"
                    ? "À propos"
                    : section === "education"
                      ? "Formation"
                      : section === "skills"
                        ? "Compétences"
                        : section === "projects"
                          ? "Projets"
                          : "Contact"}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              OA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Oussama Achiban</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Étudiant en Mathématiques et Informatique</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>Marrakech, Maroc</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>Né le 17 Mars 2003</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <a href="mailto:o.achiban5855@uca.ac.ma" className="flex items-center gap-2">
                  <Mail size={16} />
                  Email
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+212601369950" className="flex items-center gap-2">
                  <Phone size={16} />
                  Téléphone
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/oussama-achiban"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://www.linkedin.com/in/oussama-achiban-a100772a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Étudiant passionné à la Faculté des Sciences Semlalia, spécialisé en Mathématiques et Informatique. Je
                souhaite développer mes compétences dans plusieurs domaines afin d'élargir mes horizons professionnels.
                Avec une solide base en programmation et une capacité d'apprentissage rapide, je suis toujours prêt à
                relever de nouveaux défis technologiques.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Formation</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Licence Science Mathématique et Informatique</span>
                  <Badge variant="secondary">2024-2025</Badge>
                </CardTitle>
                <CardDescription>Faculté des Sciences Semlalia</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>DEUG Science Mathématique et Informatique</span>
                  <Badge variant="secondary">2023-2024</Badge>
                </CardTitle>
                <CardDescription>Faculté des Sciences Semlalia</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>BAC Science Mathématique B</span>
                  <Badge variant="secondary">2021</Badge>
                </CardTitle>
                <CardDescription>Lycée Hassan 2 Marrakech</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Compétences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code size={20} />
                  Programmation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe size={20} />
                  Développement Web
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database size={20} />
                  Concepts Avancés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Langues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Arabe</span>
                  <Badge>Excellent</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Français</span>
                  <Badge variant="secondary">Intermédiaire</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Anglais</span>
                  <Badge variant="outline">Notions</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Projets</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {project.period}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {project.type}
                  </Badge>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Badge className="mb-3 w-fit">{project.status}</Badge>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Voir le code
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Contact</h2>
          <p className="text-lg text-gray-600 mb-8">
            N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:o.achiban5855@uca.ac.ma" className="text-blue-600 hover:underline">
                  o.achiban5855@uca.ac.ma
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <a href="tel:+212601369950" className="text-blue-600 hover:underline">
                  +212 601 369 950
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <a
                href="https://github.com/oussama-achiban"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://www.linkedin.com/in/oussama-achiban-a100772a3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Oussama Achiban. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
