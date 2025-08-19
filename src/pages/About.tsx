
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SkillsSection from '@/components/SkillsSection';
import { Download } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "About | Abdullah's Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6 animate-fade-in">
                  <h1 className="text-4xl font-bold mb-4">About <span className="text-gradient">Abdullah</span></h1>
                  <p className="text-gray-300">
                    I'm a passionate digital creator with over 6+ years of experience specializing in web development, app design, graphic design, and digital marketing. My mission is to help businesses and individuals establish a strong digital presence through creative, functional, and user-centered solutions.
                  </p>
                  <p className="text-gray-300">
                    My approach combines technical expertise with creative thinking to deliver projects that not only look great but also perform exceptionally well. I believe in continuous learning and stay updated with the latest industry trends and technologies.
                  </p>
                  <p className="text-gray-300">
                    When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tutorials and articles.
                  </p>
                  
                  <div className="flex space-x-4">
                    <Button 
                      className="bg-primary hover:text-primary hover:bg-white "
                      data-cursor="link"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download CV
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      asChild
                      data-cursor="link"
                    >
                      <Link to="/contact">Contact Me</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="relative">
                  <div className="w-full aspect-square rounded-lg glass-morphism p-1 border-primary/20">
                    <div className="w-full h-full rounded-lg overflow-hidden relative">
                      {/* Avatar image goes here, using gradient placeholder for now */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-purple-900/30 to-background"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl font-bold text-primary/20">Aabi</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute lg:-bottom-8 lg:-left-8 lg:w-40 lg:h-40 rounded-lg glass-morphism p-4 border border-primary/30 z-10 left-[15%] h-28 -bottom-4 w-[70%]">
                    <div className="text-center">
                      <h3 className="font-bold text-lg">Experience</h3>
                      <p className="text-4xl font-bold text-gradient">6+</p>
                      <p className="text-sm text-gray-300">Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <SkillsSection />
        
        {/* Education & Experience */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gradient">Experience & Education</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary mr-3 flex items-center justify-center">
                    <span className="text-white font-bold">E</span>
                  </div>
                  Experience
                </h3>
                
                <div className="space-y-12 relative before:absolute before:left-3.5 before:top-0 before:h-full before:w-0.5 before:bg-primary/30">
                  {[
                    {
                      role: 'Lead Developer',
                      company: 'Tech Innovations Inc.',
                      period: '2023 - Present',
                      description: 'Leading web and mobile application development projects for enterprise clients.',
                    },
                    {
                      role: 'UI/UX Designer',
                      company: 'Creative Agency',
                      period: '2021 - 2023',
                      description: 'Designed user interfaces and experiences for websites and mobile applications.',
                    },
                    {
                      role: 'Digital Marketing Specialist',
                      company: 'Growth Hackers',
                      period: '2019 - 2021',
                      description: 'Implemented digital marketing strategies resulting in significant growth for clients.',
                    },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="pl-10 relative animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="absolute left-0 top-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                      <h4 className="text-xl font-bold">{item.role}</h4>
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>{item.company}</span>
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary mr-3 flex items-center justify-center">
                    <span className="text-white font-bold">E</span>
                  </div>
                  Education
                </h3>
                
                <div className="space-y-12 relative before:absolute before:left-3.5 before:top-0 before:h-full before:w-0.5 before:bg-primary/30">
                  {[
                    {
                      degree: 'Full Stack Development',
                      school: 'Facebook by Meta',
                      period: '2018 - 2020',
                      description: 'Specialized in Human-Computer Interaction and Advanced Web Technologies.',
                    },
                    {
                      degree: 'Bachelor of Design',
                      school: 'Design Institute',
                      period: '2021',
                      description: 'Focused on Digital Design and Interactive Media.',
                    },
                    {
                      degree: 'Digital Marketing Certification',
                      school: 'Marketing Academy',
                      period: '2019',
                      description: 'Comprehensive certification covering all aspects of digital marketing.',
                    },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="pl-10 relative animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="absolute left-0 top-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                      <h4 className="text-xl font-bold">{item.degree}</h4>
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>{item.school}</span>
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
