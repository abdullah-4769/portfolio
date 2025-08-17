
import React from 'react';
import { Progress } from '@/components/ui/progress';

const skillsData = [
  { name: 'HTML/CSS/JS', percentage: 95 },
  { name: 'Django/FastAPI/Node.js', percentage: 90 },
  { name: 'React/Vue/NextJs', percentage: 85 },
  { name: 'Flutter/Kotlin/Swift', percentage: 80 },
  { name: 'Branding Design', percentage: 85 },
  { name: 'Graphic Design', percentage: 90 },
  { name: 'SEO & Marketing', percentage: 85 },
  { name: 'Video & Animation', percentage: 75 },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-gradient">Skills & Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've developed a diverse set of skills across development, design, and marketing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-primary">{skill.percentage}%</span>
              </div>
              <Progress 
                value={skill.percentage} 
                className="h-2 bg-gray-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
