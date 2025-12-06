import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import EnergyBackground from '@/components/EnergyBackground';
import GridNavigation from '@/components/GridNavigation';
import AboutSection from '@/components/sections/AboutSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;

      const sections = ['about', 'achievements', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = mainRef.current.scrollTop + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element && mainRef.current) {
      mainRef.current.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="min-h-screen bg-background relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <EnergyBackground />
          
          <GridNavigation 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange} 
          />

          {/* Main content area */}
          <main
            ref={mainRef}
            className="ml-20 lg:ml-24 h-screen overflow-y-auto scroll-smooth"
          >
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
              {/* Hero header */}
              <motion.header
                className="pt-8 pb-4 mb-8 border-b border-border/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Logo/Brand */}
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center"
                        animate={{ boxShadow: ['0 0 10px hsl(var(--primary) / 0.3)', '0 0 20px hsl(var(--primary) / 0.5)', '0 0 10px hsl(var(--primary) / 0.3)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="font-orbitron text-lg font-bold text-primary">SG</span>
                      </motion.div>
                    </div>
                    
                    <div>
                      <h1 className="font-orbitron text-xl font-bold text-foreground">
                        SMART GRID NETWORK
                      </h1>
                      <p className="font-mono text-xs text-muted-foreground">
                        PORTFOLIO SYSTEM v2.0
                      </p>
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-energy-green"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="font-mono text-xs text-muted-foreground">SYSTEM ONLINE</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">NODES:</span>
                      <span className="font-mono text-xs text-primary">7/7</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">POWER:</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-3 bg-primary rounded-sm"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.header>

              {/* Sections */}
              <AboutSection />
              <AchievementsSection />
              <EducationSection />
              <SkillsSection />
              <ProjectsSection />
              <CertificationsSection />
              <ContactSection />

              {/* Footer */}
              <footer className="py-8 border-t border-border/30 text-center">
                <p className="font-mono text-xs text-muted-foreground">
                  © 2024 SMART GRID NETWORK | DESIGNED BY MSJ
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-primary">POWERED BY ENERGY GRID TECH</span>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </footer>
            </div>
          </main>
        </motion.div>
      )}
    </>
  );
};

export default Index;
