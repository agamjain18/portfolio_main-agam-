"use client";

import { motion } from "framer-motion";
import { User, Code2, Rocket, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "1.5+ Years Experience",
      description: "Building scalable applications",
    },
    {
      icon: Rocket,
      title: "20+ Projects",
      description: "Delivered successfully",
    },
    {
      icon: Heart,
      title: "Open Source",
      description: "Active contributor",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-secondary/20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 text-primary">
            <User className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a dedicated full-stack developer with over 1.5 years of
              experience building impactful digital products. What began as a
              curiosity for how things work has grown into a passion for solving
              real-world problems through scalable, efficient, and user-focused
              applications. My journey spans AI-driven innovations,
              cross-platform mobile apps, and automation tools—all crafted with
              a mindset of continuous learning and purpose-driven development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building modern web applications using React and
              Next.js, developing cross-platform mobile apps with Flutter, and
              crafting robust backend systems with Node.js and cloud services.
              I&apos;m deeply enthusiastic about emerging technologies—particularly
              AI and continuously explore ways to integrate them into real-world
              solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I’m not coding, I actively contribute to open-source
              projects, mentor aspiring developers, and stay engaged with the
              latest advancements in technology. I’m a strong believer in
              continuous learning and sharing knowledge, always striving to grow
              with—and give back to—the developer community.
            </p>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <highlight.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
