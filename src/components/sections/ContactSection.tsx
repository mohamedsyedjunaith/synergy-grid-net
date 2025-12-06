import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Globe, Terminal } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const contactInfo = [
  { icon: Phone, label: 'PHONE', value: '+91 8838354784' },
  { icon: Mail, label: 'EMAIL', value: 'syedjunaith455@gmail.com' },
  { icon: MapPin, label: 'LOCATION', value: 'Trichy, Tamil Nadu' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', url: '#', color: 'cyan' },
  { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'blue' },
  { icon: Code, label: 'LeetCode', url: '#', color: 'purple' },
  { icon: Globe, label: 'Portfolio', url: '#', color: 'green' },
];

const colorStyles = {
  cyan: 'border-primary/30 hover:border-primary hover:bg-primary/10 text-primary',
  blue: 'border-energy-blue/30 hover:border-energy-blue hover:bg-energy-blue/10 text-energy-blue',
  purple: 'border-accent/30 hover:border-accent hover:bg-accent/10 text-accent',
  green: 'border-energy-green/30 hover:border-energy-green hover:bg-energy-green/10 text-energy-green',
};

const ContactSection = () => {
  const terminalLines = [
    { prefix: '~', cmd: 'whoami', output: 'Mohamed Syed Junaith S B' },
    { prefix: '~', cmd: 'cat contact.txt', output: '' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <SectionTitle 
        icon={Mail} 
        title="CONTACT PANEL" 
        subtitle="// Communication Console" 
      />

      <div className="max-w-4xl mx-auto">
        {/* Terminal window */}
        <motion.div
          className="bg-card/90 backdrop-blur-sm rounded-lg border border-primary/30 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-energy-green/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="font-mono text-xs text-muted-foreground">
                contact_panel@grid:~
              </span>
            </div>
            <Terminal className="w-4 h-4 text-primary" />
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm">
            {/* Command lines */}
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">{line.prefix}</span>
                  <span className="text-energy-green">$</span>
                  <span>{line.cmd}</span>
                </div>
                {line.output && (
                  <p className="text-foreground pl-6 mb-4">{line.output}</p>
                )}
              </motion.div>
            ))}

            {/* Contact info display */}
            <motion.div
              className="space-y-4 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4 pl-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 w-24">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-primary text-xs">{info.label}:</span>
                    </div>
                    <span className="text-foreground">{info.value}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Blinking cursor */}
            <motion.div
              className="flex items-center gap-2 text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <span className="text-primary">~</span>
              <span className="text-energy-green">$</span>
              <span className="terminal-cursor" />
            </motion.div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-4 text-center">
            // NETWORK CONNECTIONS
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300 ${colorStyles[link.color as keyof typeof colorStyles]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-orbitron text-sm">{link.label}</span>
                  
                  {/* Pulse indicator */}
                  <motion.div
                    className="w-2 h-2 rounded-full bg-current"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Name display */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="font-orbitron text-3xl lg:text-4xl font-bold text-foreground glow-text-subtle mb-2">
            Mohamed Syed Junaith S B
          </h2>
          <p className="font-mono text-primary">
            ASPIRING SOFTWARE ENGINEER
          </p>
          
          {/* Grid network footer visualization */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
