
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'CEO at TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'Abdullah delivered exceptional results for our website redesign. His attention to detail and creative approach significantly improved our user engagement metrics.',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder of AppLaunch',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
    content: 'Working with Abdullah on our mobile application was a game-changer. His technical skills and design sensibility created an app our users absolutely love.',
    stars: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    content: 'The digital marketing campaign Abdullah developed for us exceeded all our expectations. The ROI was impressive and his data-driven approach made all the difference.',
    stars: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    content: 'Abdullah created a stunning brand identity for my business that perfectly captures our values. His graphic design work continues to receive compliments from our customers.',
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-gradient">Client Testimonials</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it – here's what my clients have to say
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="glass-morphism border-primary/20 p-8 rounded-lg flex flex-col items-center text-center max-w-3xl mx-auto">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={18} fill="#9b87f5" className="text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg italic mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center text-white"
            aria-label="Previous testimonial"
            data-cursor="link"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center text-white"
            aria-label="Next testimonial"
            data-cursor="link"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i === currentIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
                data-cursor="link"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
