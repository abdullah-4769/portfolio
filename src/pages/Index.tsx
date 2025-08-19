
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import SkillsSection from '@/components/SkillsSection';
import Testimonials from '@/components/Testimonials';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Abdullah | Web & App Developer, Designer & Marketer";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional portfolio of Abdullah - Expert web developer, app developer, graphic designer and digital marketer creating exceptional digital experiences.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <CustomCursor />
      <Header />
      
      <main>
        <Hero />
        
        <Services />
        
        <Projects />
        
        <SkillsSection />
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="glass-morphism border-primary/20 p-8 md:p-12 rounded-lg text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Start Your Project?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's collaborate to bring your vision to life with cutting-edge technology and design.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:text-primary hover:bg-white text-white hover-lift"
                asChild
                data-cursor="link"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
