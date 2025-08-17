import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const phrases = [
    "Web & App Developer",
    "App Developer",
    "Graphics Designer",
    "Digital Marketer"
  ];

  useEffect(() => {
    if (isPaused) {
      // Pause for 2 seconds then resume typing/deleting
      const pauseTimeout = setTimeout(() => setIsPaused(false), 500);
      return () => clearTimeout(pauseTimeout);
    }

    const currentPhrase = phrases[currentPhraseIndex];
    const phraseLength = currentPhrase.length;

    // Calculate typing speed so that typing or deleting full phrase takes approx 4 seconds
    const typingSpeed = 4000 / phraseLength;

    const type = () => {
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }

      // Check if finished typing
      if (!isDeleting && typedText === currentPhrase) {
        // Pause for 2 seconds before deleting
        setIsPaused(true);
        setIsDeleting(true);
        return;
      }

      // Check if finished deleting
      if (isDeleting && typedText === "") {
        // Move to next phrase after pause
        setIsPaused(true);
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        return;
      }
    };

    const timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);

  }, [typedText, isDeleting, currentPhraseIndex, isPaused, phrases]);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-900/20 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Abdullah</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold flex items-center">
              <span>I'm a</span>
              <span className="text-primary ml-3 relative">
                {typedText}
                <span className="absolute right-[-8px] h-8 w-[2px] bg-primary animate-cursor-blink"></span>
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg">
              Crafting exceptional digital experiences through code, design, and strategic marketing. Let's bring your vision to life.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:text-primary hover:bg-white text-white hover-lift"
                asChild
                data-cursor="link"
                data-cursor-text="View Projects"
              >
                <Link to="/projects">View My Projects</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white hover-lift"
                asChild
                data-cursor="link"
                data-cursor-text="Let's Talk"
              >
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-full h-96 rounded-lg glass-morphism relative overflow-hidden">
              {/* Stylized avatar or image can go here */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold opacity-30">Aabi</div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute top-1/4 left-1/4 p-3 bg-black/50 rounded-lg rotate-12 animate-float">
                <code className="text-purple-400">&lt;code/&gt;</code>
              </div>
              <div className="absolute bottom-1/4 right-2/3 p-3 bg-black/50 rounded-lg -rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-green-400">&#123; design &#125;</span>
              </div>
              <div className="absolute top-1/2 right-[20%] p-3 bg-black/50 rounded-lg rotate-3 animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-blue-400">#marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

