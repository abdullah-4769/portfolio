
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';

const categories = ["All", "Web Dev", "App Dev", "UI/UX", "Branding"];

const projectsData = [
  {
    title: "E-Commerce Website",
    category: "Web Dev",
    image:"https://imotana.com/cdn/shop/files/Photoroom-20241014_180133.png?v=1745908037&width=1800",
    description:"Modern e-commerce platform with advanced filtering and payment integration.",
    redirection: "https://imotana.com/",
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
  {
    title: "Healthcare App UI",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "User interface design for a healthcare management application."
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  useEffect(() => {
    // Update document title for SEO
    document.title = "Projects | Abdullah's Portfolio";
    
    // Filter projects based on active category
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">My <span className="text-gradient">Projects</span></h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my portfolio of work across web development, app development, UI/UX design, and branding.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category) => (
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
              <div
                key={project.title}
                className="glass-morphism border-primary/20 rounded-lg overflow-hidden hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-cursor="link"
                data-cursor-text="View Project"
              >
                <div className="relative h-64 overflow-hidden">
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
                      View Details
                    </Button>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">No projects found</h2>
              <p className="text-gray-300">No projects match the selected category. Please try another category.</p>
            </div>
          )}
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-6 mt-20">
          <div className="glass-morphism border-primary/20 p-8 md:p-12 rounded-lg text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Let's collaborate to create something amazing together. I'm always open to new opportunities and challenges.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white hover-lift"
              asChild
              data-cursor="link"
            >
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
