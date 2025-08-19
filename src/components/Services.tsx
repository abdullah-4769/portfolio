
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Image, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive, fast, and user-friendly websites optimized for all devices using modern technologies.',
    icon: <Code className="text-primary h-10 w-10" />,
    slug: 'web-development',
  },
  {
    title: 'App Development',
    description: 'Building native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: <Smartphone className="text-primary h-10 w-10" />,
    slug: 'app-development',
  },
  {
    title: 'Graphic Design',
    description: 'Crafting stunning visuals that communicate your brand message effectively and leave lasting impressions.',
    icon: <Image className="text-primary h-10 w-10" />,
    slug: 'graphic-design',
  },
  {
    title: 'Digital Marketing',
    description: 'Implementing data-driven strategies to increase your online presence and drive meaningful growth.',
    icon: <BarChart className="text-primary h-10 w-10" />,
    slug: 'digital-marketing',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold text-gradient">My Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.slug}
              className="glass-morphism border-primary/20 p-6 overflow-hidden relative group hover-lift"
            >
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/50 transition-all duration-700"></div>
              <div 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/10"
                  asChild
                  data-cursor="link"
                >
                  <Link to={`/services/${service.slug}`}>Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
