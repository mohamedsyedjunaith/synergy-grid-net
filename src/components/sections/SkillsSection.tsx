import { motion } from 'framer-motion';
import { Cpu, Code, Layout, Server, Database, Wrench } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming',
    skills: ['C', 'Java', 'JavaScript', 'Python'],
    color: 'cyan',
  },
  {
    icon: Layout,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React'],
    color: 'purple',
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Spring Boot'],
    color: 'green',
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
    color: 'blue',
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['GitHub', 'VS Code', 'Postman', 'IntelliJ IDEA', 'Vercel', 'Docker'],
    color: 'cyan',
  },
];

const colorStyles = {
  cyan: {
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    text: 'text-primary',
    glow: 'shadow-[0_0_15px_hsl(var(--primary)/0.3)]',
    bar: 'bg-primary',
  },
  purple: {
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    text: 'text-accent',
    glow: 'shadow-[0_0_15px_hsl(var(--accent)/0.3)]',
    bar: 'bg-accent',
  },
  green: {
    bg: 'bg-energy-green/10',
    border: 'border-energy-green/30',
    text: 'text-energy-green',
    glow: 'shadow-[0_0_15px_hsl(var(--energy-green)/0.3)]',
    bar: 'bg-energy-green',
  },
  blue: {
    bg: 'bg-energy-blue/10',
    border: 'border-energy-blue/30',
    text: 'text-energy-blue',
    glow: 'shadow-[0_0_15px_hsl(var(--energy-blue)/0.3)]',
    bar: 'bg-energy-blue',
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <SectionTitle 
        icon={Cpu} 
        title="SKILL TRANSFORMERS" 
        subtitle="// Technical Capabilities" 
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          const styles = colorStyles[category.color as keyof typeof colorStyles];

          return (
            <motion.div
              key={category.title}
              className={`relative p-6 rounded-lg bg-card/80 backdrop-blur-sm border ${styles.border} transition-all duration-300 hover:${styles.glow}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${styles.bg} ${styles.border} border`}>
                  <Icon className={`w-6 h-6 ${styles.text}`} />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  // Generate random-ish but consistent energy levels
                  const energyLevel = 70 + ((skillIndex * 17 + categoryIndex * 13) % 30);

                  return (
                    <motion.div
                      key={skill}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + skillIndex * 0.1 }}
                    >
                      {/* Skill capsule */}
                      <div className="flex items-center gap-3">
                        {/* Energy indicator dot */}
                        <motion.div
                          className={`w-2 h-2 rounded-full ${styles.bar}`}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            delay: skillIndex * 0.2 
                          }}
                        />

                        {/* Skill name */}
                        <span className="font-mono text-sm text-foreground flex-1">
                          {skill}
                        </span>

                        {/* Energy level bar */}
                        <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${styles.bar} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${energyLevel}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 + skillIndex * 0.1 }}
                          />
                        </div>

                        {/* Energy percentage */}
                        <span className={`font-mono text-xs ${styles.text} w-10 text-right`}>
                          {energyLevel}%
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                <span className="font-mono text-xs text-muted-foreground">
                  TRANSFORMER {categoryIndex + 1}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1.5 h-3 rounded-sm ${styles.bg}`}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${styles.border} rounded-tr-lg`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
