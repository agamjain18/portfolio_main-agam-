"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Award,
  Users,
  Code,
} from "lucide-react";
import { Button } from "../components/ui/button";
import Image from "next/image";

type Position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform?: string;
};

// --------------------
// ✅ Shared Utilities
// --------------------

const positionPool: Position[] = [
  { top: "-30px", left: "-40px" },
  { top: "-20px", right: "-50px" },
  { top: "20px", right: "-45px" },
  { bottom: "-10px", right: "-40px" },
  { bottom: "30px", left: "-35px" },
  { top: "50%", left: "-55px", transform: "translateY(-50%)" },
  { top: "50%", right: "-60px", transform: "translateY(-50%)" },
  { top: "-35px", left: "50%", transform: "translateX(-50%)" },
  { bottom: "-35px", left: "50%", transform: "translateX(-50%)" },
  { top: "10px", left: "-30px" },
  { bottom: "10px", right: "-30px" },
  { top: "70%", left: "-45px" },
];

const checkOverlap = (pos1: Position, pos2: Position): boolean => {
  const getCoordinates = (pos: Position) => {
    let x = 0,
      y = 0;
    if (pos.left) x = Number.parseInt(pos.left);
    if (pos.right) x = -Number.parseInt(pos.right);
    if (pos.top) y = Number.parseInt(pos.top);
    if (pos.bottom) y = -Number.parseInt(pos.bottom);
    return { x, y };
  };

  const coord1 = getCoordinates(pos1);
  const coord2 = getCoordinates(pos2);
  const distance = Math.sqrt(
    Math.pow(coord1.x - coord2.x, 2) + Math.pow(coord1.y - coord2.y, 2)
  );
  return distance < 50;
};

const generateNonOverlappingPositions = (): Position[] => {
  const shuffled = [...positionPool].sort(() => Math.random() - 0.5);
  const selected: Position[] = [];

  for (let i = 0; i < shuffled.length && selected.length < 5; i++) {
    const candidate = shuffled[i];
    const overlaps = selected.some((pos) => checkOverlap(candidate, pos));
    if (!overlaps) selected.push(candidate);
  }

  while (selected.length < 5) {
    selected.push(shuffled[selected.length]);
  }

  return selected;
};

// --------------------
// ✅ Hero Component
// --------------------

const Hero = () => {
  const [skillPositions, setSkillPositions] = useState<Position[]>([]);

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Firebase", icon: "🔥" },
  ];

  const experienceStats = [
    {
      icon: Calendar,
      value: "1.5+",
      label: "Years Experience",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      value: "20+",
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      value: "10+",
      label: "Happy Clients",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      value: "15+",
      label: "Technologies",
      color: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    const newPositions = generateNonOverlappingPositions();
    setSkillPositions(newPositions);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-12"
        >
          <div className="relative p-10 inline-block">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl relative z-[110] ring-4 ring-primary/20">
                <Image
                  src="https://github.com/agamjain18.png"
                  alt="Profile"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-8 rounded-full border border-dotted border-primary/20"
              />
            </div>

            {/* Skills Orbiting */}
            {skillPositions.map((position, index) => (
              <motion.div
                key={`${skills[index].name}-${index}`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  y: {
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 12,
                  transition: { duration: 0.2 },
                }}
                className="absolute z-[120] cursor-pointer"
                style={position}
              >
                <div className="relative group">
                  <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-md border border-border flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="text-2xl relative z-10">
                      {skills[index].icon}
                    </span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    {skills[index].name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Name & Stats */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">Agam Jain</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
            Crafting exceptional digital experiences with modern web technologies.
          </p>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto"
        >
          {experienceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl bg-secondary/30 border border-border/50 backdrop-blur-sm hover:bg-secondary/50 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="rounded-full px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            <span className="mr-2">View My Work</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            {[ 
              { icon: Github, href: "https://github.com/agamjain18" },
              { icon: Linkedin, href: "https://linkedin.com/in/aagam-jain-919b4421" },
              { icon: Mail, href: "mailto:aagamjain152003@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12 hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-widest text-[10px]">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-border bg-background/50 backdrop-blur-sm"
          >
            <ArrowDown className="h-4 w-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
