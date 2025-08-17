
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Image, BarChart, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const serviceData = {
  'web-development': {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Web Development',
    heroImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    description: 'I provide comprehensive web development services, creating websites and web applications that are not only visually stunning but also high-performing, responsive, and user-friendly.',
    approach: 'My approach to web development focuses on creating solutions that are tailored to your specific needs and goals. I begin with a thorough planning phase, followed by design, development, testing, and deployment.',
    services: [
      {
        title: 'Front-end Development',
        description: 'Creating beautiful, responsive, and interactive user interfaces using modern technologies like React, Vue.js, and Angular.'
      },
      {
        title: 'Back-end Development',
        description: 'Building robust server-side applications using Node.js, Python, PHP, and other technologies to power your web applications.'
      },
      {
        title: 'E-commerce Solutions',
        description: 'Developing online stores with secure payment gateways, inventory management, and user-friendly shopping experiences.'
      },
      {
        title: 'Content Management Systems',
        description: 'Custom CMS development or implementation of existing platforms like WordPress, allowing easy content updates.'
      },
      {
        title: 'Progressive Web Apps',
        description: 'Creating web applications that offer app-like experiences with offline capabilities and fast loading times.'
      },
      {
        title: 'Website Optimization',
        description: 'Improving website performance, speed, and search engine visibility to enhance user experience and reach.'
      }
    ],
    technologies: ['HTML5/CSS3', 'JavaScript', 'React', 'Vue.js', 'Node.js', 'PHP', 'MongoDB', 'MySQL', 'WordPress', 'Woocommerce'],
    process: [
      { title: 'Discovery & Planning', description: 'Understanding your requirements, goals, and target audience.' },
      { title: 'Design & Wireframing', description: 'Creating visual concepts and wireframes for your approval.' },
      { title: 'Development', description: 'Writing clean, efficient code to bring designs to life.' },
      { title: 'Testing & QA', description: 'Thorough testing across devices and browsers to ensure quality.' },
      { title: 'Deployment', description: 'Launching your website with proper configurations.' },
      { title: 'Maintenance & Support', description: 'Ongoing support and updates to keep your site running smoothly.' }
    ]
  },
  'app-development': {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: 'App Development',
    heroImage: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356',
    description: 'I create mobile applications for iOS and Android platforms that are intuitive, feature-rich, and aligned with your business goals, helping you reach and engage users effectively.',
    approach: 'My approach to mobile app development focuses on creating user-centric experiences that are both functional and delightful. I prioritize performance, design, and usability to ensure your app stands out in the crowded marketplace.',
    services: [
      {
        title: 'Native iOS Development',
        description: 'Building iOS apps with Swift and Objective-C that take full advantage of Apple\'s ecosystem.'
      },
      {
        title: 'Native Android Development',
        description: 'Creating Android apps with Kotlin and Java that provide the best possible experience for Android users.'
      },
      {
        title: 'Cross-Platform Development',
        description: 'Developing apps for multiple platforms with frameworks like React Native, Flutter, or Ionic to maximize efficiency.'
      },
      {
        title: 'App UI/UX Design',
        description: 'Designing intuitive interfaces and user experiences that engage and delight your users.'
      },
      {
        title: 'App Maintenance & Updates',
        description: 'Providing ongoing support, updates, and feature enhancements to keep your app relevant and functional.'
      },
      {
        title: 'App Store Optimization',
        description: 'Improving your app\'s visibility and conversion rates in the App Store and Google Play Store.'
      }
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL', 'RESTful APIs', 'Android Studio', 'Xcode', 'App Store Connect'],
    process: [
      { title: 'Strategy & Planning', description: 'Defining app requirements, features, and technical approach.' },
      { title: 'UI/UX Design', description: 'Creating wireframes, prototypes, and visual designs.' },
      { title: 'Development', description: 'Building the app with clean, efficient code.' },
      { title: 'Testing', description: 'Comprehensive testing on multiple devices and scenarios.' },
      { title: 'Deployment', description: 'Publishing your app to the App Store and/or Google Play Store.' },
      { title: 'Post-Launch Support', description: 'Monitoring, maintaining, and updating your app based on user feedback.' }
    ]
  },
  'graphic-design': {
    icon: <Image className="h-12 w-12 text-primary" />,
    title: 'Graphic Design',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
    description: 'I create visually compelling designs that communicate your brand message effectively and leave a lasting impression on your audience, helping you stand out in today\'s competitive market.',
    approach: 'My approach to graphic design combines creativity with strategy to create visually striking designs that serve a purpose. I believe in understanding your brand, audience, and goals before beginning the creative process.',
    services: [
      {
        title: 'Brand Identity Design',
        description: 'Creating comprehensive brand identities including logos, color palettes, typography, and brand guidelines.'
      },
      {
        title: 'Print Design',
        description: 'Designing beautiful print materials like business cards, brochures, posters, packaging, and more.'
      },
      {
        title: 'Digital Graphics',
        description: 'Creating graphics for websites, social media, advertisements, and other digital platforms.'
      },
      {
        title: 'Illustration',
        description: 'Custom illustrations for various purposes including products, marketing materials, and publications.'
      },
      {
        title: 'UI/UX Design',
        description: 'Designing user interfaces and experiences for websites and applications.'
      },
      {
        title: 'Video Editing',
        description: 'Creating attractive and engaging video for your content creation as well as marketing basis.'
      },
      {
        title: 'Motion Graphics',
        description: 'Creating animated graphics and visual effects for digital media.'
      }
    ],
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe XD', 'Figma', 'Sketch', 'Adobe Premiere Pro', 'After Effects', 'Cinema 4D', 'Blender'],
    process: [
      { title: 'Research & Discovery', description: 'Understanding your brand, competitors, and target audience.' },
      { title: 'Conceptualization', description: 'Brainstorming ideas and developing initial concepts.' },
      { title: 'Design Creation', description: 'Transforming concepts into polished designs.' },
      { title: 'Presentation & Feedback', description: 'Presenting designs and incorporating your feedback.' },
      { title: 'Refinement', description: 'Fine-tuning designs to perfection.' },
      { title: 'Delivery', description: 'Providing files in all required formats for various applications.' }
    ]
  },
  'digital-marketing': {
    icon: <BarChart className="h-12 w-12 text-primary" />,
    title: 'Digital Marketing',
    heroImage: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0',
    description: 'I implement data-driven digital marketing strategies that help businesses increase their online visibility, engage their target audience, and drive meaningful growth through various digital channels.',
    approach: 'My approach to digital marketing is focused on creating strategies that align with your business objectives and deliver measurable results. I employ a mix of tactics tailored to your specific needs and continuously optimize based on performance data.',
    services: [
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'Improving your website\'s visibility in search engine results through on-page and off-page optimization.'
      },
      {
        title: 'Social Media Marketing',
        description: 'Developing and implementing strategies to grow and engage your audience on social media platforms.'
      },
      {
        title: 'Content Marketing',
        description: 'Creating valuable content that attracts and engages your target audience while promoting your brand.'
      },
      {
        title: 'Email Marketing',
        description: 'Designing and executing email campaigns that nurture leads and drive conversions.'
      },
      {
        title: 'Pay-Per-Click (PPC) Advertising',
        description: 'Managing ad campaigns on platforms like Google Ads and social media to drive targeted traffic.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Tracking, analyzing, and reporting on campaign performance to inform future strategies.'
      }
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads Manager', 'SEMrush', 'Ahrefs', 'Mailchimp', 'Hootsuite', 'Buffer', 'HubSpot', 'Moz'],
    process: [
      { title: 'Audit & Analysis', description: 'Reviewing your current digital presence and identifying opportunities.' },
      { title: 'Strategy Development', description: 'Creating a comprehensive marketing plan aligned with your goals.' },
      { title: 'Implementation', description: 'Executing marketing tactics across various channels.' },
      { title: 'Monitoring & Optimization', description: 'Continuously tracking performance and making data-driven adjustments.' },
      { title: 'Reporting', description: 'Providing regular reports with key metrics and insights.' },
      { title: 'Iteration', description: 'Refining strategies based on results and emerging trends.' }
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<any>(null);
  
  useEffect(() => {
    // Find the service by slug
    const currentService = serviceData[slug as keyof typeof serviceData];
    
    if (currentService) {
      setService(currentService);
      document.title = `${currentService.title} | Abdullah's Portfolio`;
    } else {
      // Redirect to services page if service not found
      navigate('/services');
    }
  }, [slug, navigate]);
  
  if (!service) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0 bg-black">
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative h-full flex items-center">
            <div className="max-w-3xl">
              <div className="flex items-center mb-4">
                <div className="bg-primary/20 p-4 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h1 className="text-4xl font-bold text-gradient">{service.title}</h1>
              </div>
              <p className="text-gray-300 text-xl">{service.description}</p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Approach */}
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">My Approach</h2>
                  <div className="glass-morphism border-primary/20 p-8 rounded-lg">
                    <p className="text-gray-300">{service.approach}</p>
                  </div>
                </div>
                
                {/* Services */}
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">What I Offer</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.services.map((item: any, index: number) => (
                      <div 
                        key={index} 
                        className="glass-morphism border-primary/20 p-6 rounded-lg hover-lift"
                      >
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Process */}
                <div className="animate-fade-in flex flex-col w-full">
                  <h2 className="text-2xl font-bold mb-6">My Process</h2>
                  <div className="glass-morphism border-primary/20 p-8 rounded-lg max-w-full">
                    <ol className="space-y-8">
                      {service.process.map((step: any, index: number) => (
                        <li key={index} className="flex">
                          <div className="mr-4">
                            <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center">
                              <span className="font-bold">{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10">
                {/* Technologies */}
                <div className="animate-fade-in">
                  <h2 className="text-xl font-bold mb-6">Technologies & Tools</h2>
                  <div className="glass-morphism border-primary/20 p-6 rounded-lg">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech: string, index: number) => (
                        <span 
                          key={index} 
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Why Choose Me */}
                <div className="animate-fade-in">
                  <h2 className="text-xl font-bold mb-6">Why Choose Me</h2>
                  <div className="glass-morphism border-primary/20 p-6 rounded-lg">
                    <ul className="space-y-4">
                      {[
                        'Results-driven approach',
                        'Attention to detail',
                        'Transparent communication',
                        'On-time delivery',
                        'Post-project support',
                        'Continuous learning'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="glass-morphism border-primary/20 p-6 rounded-lg text-center animate-fade-in">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-6">Let's discuss your project and how I can help you achieve your goals.</p>
                  <Button 
                    className="bg-primary hover:bg-primary/90 w-full"
                    asChild
                    data-cursor="link"
                  >
                    <Link to="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-10 text-center">Explore Other Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(serviceData)
                .filter(([key]) => key !== slug)
                .map(([key, value], index) => (
                  <Link 
                    key={key} 
                    to={`/services/${key}`}
                    className="glass-morphism border-primary/20 p-6 rounded-lg text-center hover-lift group"
                    data-cursor="link"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/20 p-4 rounded-lg group-hover:bg-primary/30 transition-colors">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-300 mb-4">{value.description.substring(0, 100)}...</p>
                    <span className="text-primary group-hover:underline">Learn More</span>
                  </Link>
                ))
              }
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
