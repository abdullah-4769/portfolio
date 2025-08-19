import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectCategories = ["All", "Web Dev", "App Dev", "UI/UX", "Branding"];

const projectsData = [
  {
    title: "E-Commerce Website",
    category: "Web Dev",
    image:
      "https://imotana.com/cdn/shop/files/Photoroom-20241014_180133.png?v=1745908037&width=1800",
    description:
      "Modern e-commerce platform with advanced filtering and payment integration.",
    redirection: "https://imotana.com/",
  },
  {
    title: "Social E-commerce App",
    category: "App Dev",
    image:
      "https://images.unsplash.com/photo-1557189590-1a173a3efc12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Mobile application for pet products and socialization using videos and chatting.",
    redirection: "https://apps.apple.com/pk/app/clique-for-pets/id6744467640",
  },
  {
    title: "Game Accessories Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1646343253545-9171464ce425?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Complete brand identity for an upscale game accessories business.",
    redirection: "https://www.behance.net/gallery/220882953/Complete-Branding-From-Logo-To-Daily-Posting",
  },
  {
    title: "Card Game Crafter",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1570534202571-1b15d5df60a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Interactive dashboard for Card Game Designers to plan and create custom card games.",
    redirection: "https://www.figma.com/design/RXCsKSDeiXgxtjkgCa2B98/Card-Craft-Manufacturer?node-id=1807-2674&p=f&t=94W8uXquUWt2xsbc-0",
  },
  {
    title: "Salon App",
    category: "App Dev",
    image:
      "https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Feature-rich social networking application with real-time messaging.",
    redirection: "https://github.com/abdullah-4769/Salon-App-with-Admin-Panel",
  },
  {
    title: "Recycling Website Redesign",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1572964734607-0051976fac79?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Complete redesign of a recycling website improving UX and performance.",
    redirection: "https://boomerangwater.com/",
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold text-gradient">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work across different domains
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "bg-primary hover:bg-primary/90"
                    : "border-primary/20 text-gray-300 hover:border-primary hover:text-white"
                }`}
                data-cursor="link"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-morphism border-primary/20 overflow-hidden hover-lift group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor="link"
              data-cursor-text="View Project"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.redirection}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-primary hover:bg-primary/90">
                      View Project
                    </Button>
                  </a>
                </div>
              </div>
              <div className="p-5">
                <div className="text-sm text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
