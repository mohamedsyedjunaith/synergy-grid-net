import { motion } from 'framer-motion';
import { Folder, Wifi, Eye, Trophy, Zap, Server, CreditCard } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const projects = [
  {
    title: 'SMART TIMETABLE BELL SYSTEM',
    subtitle: 'ESP32 + Node.js',
    description: 'IoT-based automated school bell system with real-time updates, WiFi sync, staff allocation, ESP32 LCD display, and Node.js backend.',
    features: ['Real-time Updates', 'WiFi Sync', 'Staff Allocation', 'ESP32 LCD Display', 'Node.js Backend'],
    icon: Wifi,
    color: 'cyan',
  },
  {
    title: 'AI-POWERED COCONUT SORTING',
    subtitle: 'YOLOv8 Computer Vision',
    description: 'YOLOv8-based real-time defect detection system for identifying cracked vs healthy coconuts, optimized for edge inference.',
    features: ['YOLOv8 Detection', 'Real-time Processing', 'Defect Classification', 'Edge Optimized'],
    icon: Eye,
    color: 'purple',
  },
  {
    title: 'DIGITAL TOURNAMENT PLATFORM',
    subtitle: 'React + Node + MongoDB',
    description: 'Full-stack tournament management platform with role-based access, participant handling, Razorpay payments, and hardware-based gateway.',
    features: ['Role-based Access', 'Participant Handling', 'Razorpay Payments', 'Hardware Gateway'],
    icon: Trophy,
    color: 'green',
  },
];

const colorStyles = {
  cyan: {
    border: 'border-primary/30',
    hoverBorder: 'hover:border-primary/60',
    bg: 'bg-primary/10',
    text: 'text-primary',
    glow: 'group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]',
  },
  purple: {
    border: 'border-accent/30',
    hoverBorder: 'hover:border-accent/60',
    bg: 'bg-accent/10',
    text: 'text-accent',
    glow: 'group-hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)]',
  },
  green: {
    border: 'border-energy-green/30',
    hoverBorder: 'hover:border-energy-green/60',
    bg: 'bg-energy-green/10',
    text: 'text-energy-green',
    glow: 'group-hover:shadow-[0_0_40px_hsl(var(--energy-green)/0.3)]',
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <SectionTitle 
        icon={Folder} 
        title="PROJECT SUBSTATIONS" 
        subtitle="// Featured Works" 
      />

      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const styles = colorStyles[project.color as keyof typeof colorStyles];

          return (
            <motion.div
              key={project.title}
              className={`group relative bg-card/80 backdrop-blur-sm rounded-lg border ${styles.border} ${styles.hoverBorder} transition-all duration-500 overflow-hidden ${styles.glow}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Animated border glow */}
              <motion.div
                className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  background: `linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)`,
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Header with icon */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`p-4 rounded-lg ${styles.bg} border ${styles.border}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className={`w-8 h-8 ${styles.text}`} />
                  </motion.div>

                  {/* Status indicator */}
                  <div className="flex items-center gap-2">
                    <motion.div
                      className={`w-2 h-2 rounded-full ${styles.bg.replace('/10', '')}`}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="font-mono text-xs text-muted-foreground">ONLINE</span>
                  </div>
                </div>

                <h3 className="font-orbitron text-lg font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className={`font-mono text-sm ${styles.text}`}>
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="px-6 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <motion.span
                      key={feature}
                      className={`px-3 py-1 rounded-full text-xs font-mono ${styles.bg} ${styles.text} border ${styles.border}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Energy ripple effect on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className={`absolute top-1/2 left-1/2 w-32 h-32 rounded-full ${styles.bg} -translate-x-1/2 -translate-y-1/2`}
                  animate={{
                    scale: [0.5, 2, 0.5],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Bottom status bar */}
              <div className="relative px-6 py-4 bg-muted/30 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className={`w-4 h-4 ${styles.text}`} />
                    <span className="font-mono text-xs text-muted-foreground">
                      SUBSTATION {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Power indicator bars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1 h-4 rounded-sm ${styles.bg}`}
                        animate={{
                          height: [16, 8, 16],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${styles.border} rounded-tl-lg`} />
              <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${styles.border} rounded-tr-lg`} />
              <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${styles.border} rounded-bl-lg`} />
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${styles.border} rounded-br-lg`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
