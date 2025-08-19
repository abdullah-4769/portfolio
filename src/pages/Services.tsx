
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Image, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Web Development',
    slug: 'web-development',
    shortDesc: 'Creating responsive, fast, and user-friendly websites optimized for all devices using modern technologies.',
    description: 'From simple landing pages to complex web applications, I deliver solutions that are not only visually appealing but also technically sound and optimized for performance.',
    features: [
      'Responsive website design & development',
      'E-commerce websites',
      'Content management systems',
      'Progressive web applications',
      'API development & integration',
      'Web performance optimization'
    ]
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: 'App Development',
    slug: 'app-development',
    shortDesc: 'Building native and cross-platform mobile applications that deliver exceptional user experiences.',
    description: 'I create mobile applications that provide seamless user experiences across different platforms while maintaining robust performance and functionality.',
    features: [
      'Native iOS & Android development',
      'Cross-platform development',
      'App UI/UX design',
      'App maintenance & updates',
      'App performance optimization',
      'In-app purchase integration'
    ]
  },
  {
    icon: <Image className="h-12 w-12 text-primary" />,
    title: 'Graphic Design',
    slug: 'graphic-design',
    shortDesc: 'Crafting stunning visuals that communicate your brand message effectively and leave lasting impressions.',
    description: 'My graphic design services help businesses establish a strong visual identity that resonates with their target audience and stands out in a competitive market.',
    features: [
      'Logo & brand identity design',
      'Marketing & promotional materials',
      'Social media graphics',
      'Product packaging design',
      'Print design',
      'Illustration & custom graphics'
    ]
  },
  {
    icon: <BarChart className="h-12 w-12 text-primary" />,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    shortDesc: 'Implementing data-driven strategies to increase your online presence and drive meaningful growth.',
    description: 'My digital marketing services help businesses reach their target audience, increase brand awareness, and drive conversions through effective online strategies.',
    features: [
      'Search engine optimization (SEO)',
      'Social media marketing',
      'Content marketing',
      'Email marketing campaigns',
      'Pay-per-click (PPC) advertising',
      'Analytics & performance tracking'
    ]
  }
];

const Services = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Services | Abdullah's Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      <Header />
      
      <main className="pt-24">
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">My <span className="text-gradient">Services</span></h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I offer a comprehensive range of services to help businesses and individuals establish a strong digital presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <div 
                  key={service.slug} 
                  className="grid grid-cols-1 md:grid-cols-5 gap-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                    <div className="glass-morphism border-primary/20 p-6 rounded-lg mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-300 mb-6 text-center md:text-left">{service.shortDesc}</p>
                    <Button 
                      className="bg-primary hover:text-primary hover:bg-white hover-lift"
                      asChild
                      data-cursor="link"
                    >
                      <Link to={`/services/${service.slug}`}>Learn More</Link>
                    </Button>
                  </div>
                  
                  <div className="col-span-1 md:col-span-3 glass-morphism border-primary/20 p-8 rounded-lg">
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <h3 className="text-xl font-medium mb-4">What I Offer</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-20 text-center glass-morphism border-primary/20 p-8 md:p-12 rounded-lg animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's collaborate to create something amazing for your business. Get in touch to discuss your project.
              </p>
              <Button 
                className="bg-primary hover:text-primary hover:bg-white"
                asChild
                data-cursor="link"
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
