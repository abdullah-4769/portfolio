
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 mt-20 py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-white text-2xl font-bold text-gradient"
              data-cursor="link"
              data-cursor-text="Home"
            >
              Abdullah
            </Link>
            <p className="text-gray-400 max-w-xs">
              Expert web & app developer, graphics designer, and digital marketer creating exceptional digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors link-underline"
                    data-cursor="link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'App Development', 'Graphic Design', 'Digital Marketing'].map((service) => (
                <li key={service}>
                  <Link 
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors link-underline"
                    data-cursor="link"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>abdullahcodesign@gmail.com</li>
              <li>+92 3182496393</li>
              <li>Karim Park, Ravi Road, Lahore.</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Abdullah. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { name: 'Twitter', url: 'https://x.com/aabi_developer' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-shahid4769/' },
              { name: 'GitHub', url: 'https://github.com/abdullah-4769' },
              { name: 'Behance', url: 'https://www.behance.net/abdullahshahid4769/projects' },
              { name: 'Upwork', url: 'https://upwork.com/freelancers/websitedesigner4769' }
            ].map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary px-2 rounded-full hover:text-primary hover:bg-white text-white transition-colors"
                data-cursor="link"
                data-cursor-text={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
