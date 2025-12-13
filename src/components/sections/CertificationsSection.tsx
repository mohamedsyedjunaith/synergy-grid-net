import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const certifications = [
  {
    title: 'Certified Full-Stack Java Developer',
    issuer: 'DigiDARA Technologies',
    type: 'Professional Certification',
    color: 'cyan',
  },
  {
    title: 'Power BI',
    issuer: 'Microsoft',
    type: 'Data Visualization',
    color: 'purple',
  },
  {
    title: 'Full Stack Development',
    issuer: 'Industry Certification',
    type: 'Web Development',
    color: 'green',
  },
  {
    title: 'MySQL',
    issuer: 'Database Certification',
    type: 'Database Management',
    color: 'blue',
  },
  {
    title: 'Python',
    issuer: 'Programming Certification',
    type: 'Programming Language',
    color: 'cyan',
  },
];

const colorStyles = {
  cyan: {
    border: 'border-primary/30',
    bg: 'bg-primary/10',
    text: 'text-primary',
    glow: 'shadow-[0_0_20px_hsl(var(--primary)/0.2)]',
  },
  purple: {
    border: 'border-accent/30',
    bg: 'bg-accent/10',
    text: 'text-accent',
    glow: 'shadow-[0_0_20px_hsl(var(--accent)/0.2)]',
  },
  green: {
    border: 'border-energy-green/30',
    bg: 'bg-energy-green/10',
    text: 'text-energy-green',
    glow: 'shadow-[0_0_20px_hsl(var(--energy-green)/0.2)]',
  },
  blue: {
    border: 'border-energy-blue/30',
    bg: 'bg-energy-blue/10',
    text: 'text-energy-blue',
    glow: 'shadow-[0_0_20px_hsl(var(--energy-blue)/0.2)]',
  },
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="min-h-screen py-20 px-4">
      <SectionTitle 
        icon={Award} 
        title="CERTIFICATION GRID" 
        subtitle="// Professional Credentials" 
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => {
          const styles = colorStyles[cert.color as keyof typeof colorStyles];

          return (
            <motion.div
              key={cert.title}
              className={`group relative p-6 rounded-lg bg-card/80 backdrop-blur-sm border ${styles.border} transition-all duration-300 hover:${styles.glow}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Capacitor charging effect */}
              <motion.div
                className={`absolute inset-0 rounded-lg ${styles.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${styles.bg} ${styles.border} border`}>
                    <Award className={`w-6 h-6 ${styles.text}`} />
                  </div>
                  
                  <motion.div
                    className="flex items-center gap-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className={`w-4 h-4 ${styles.text}`} />
                    <span className={`font-mono text-xs ${styles.text}`}>VERIFIED</span>
                  </motion.div>
                </div>

                <h3 className="font-orbitron text-base font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                
                <p className={`font-mono text-xs ${styles.text}`}>
                  {cert.type}
                </p>

                {/* Power level indicator */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">POWER LEVEL</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-4 rounded-sm ${i < 4 ? styles.bg : 'bg-muted'}`}
                          animate={i < 4 ? { opacity: [0.5, 1, 0.5] } : {}}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing edges */}
              <motion.div
                className={`absolute inset-0 rounded-lg border-2 ${styles.border} opacity-0 group-hover:opacity-100`}
                animate={{
                  boxShadow: [
                    `0 0 5px hsl(var(--primary) / 0.3)`,
                    `0 0 20px hsl(var(--primary) / 0.5)`,
                    `0 0 5px hsl(var(--primary) / 0.3)`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationsSection;
