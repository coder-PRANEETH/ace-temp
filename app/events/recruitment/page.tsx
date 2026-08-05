"use client";

import { motion } from "framer-motion";
import { ClusterCard } from "./ui/cluster-card";

const domains = [
  {
    title: "Web Development",
    imageUrl: "/images/Clusters/WD.png",
    applyLink: "https://forms.gle/VoiLdGGHWcHEuMZz6",
  },
  {
    title: "App Development",
    imageUrl: "/images/Clusters/AD.png",
    applyLink: "https://forms.gle/T8QCqHtj53VtuWCK8",
  },
  {
    title: "AI ML",
    imageUrl: "/images/Clusters/AIML.png",
    applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdsIh-J5g8gahux0vetnP8btHrr-Uy-w252bi9hrevFxQF5ag/viewform",
  },
  {
    title: "Cybersecurity",
    imageUrl: "/images/Clusters/cyber.png",
    applyLink: "https://forms.gle/CrdeYAokUyobELMz7",
  },
  {
    title: "IOT & Embedded Systems",
    imageUrl: "/images/Clusters/Iot.png",
    applyLink: "https://forms.gle/NySWLPWnwkpEbbpn6",
  },
  {
    title: "Competitive Programming",
    imageUrl: "/images/Clusters/CP.png",
    applyLink: "https://forms.gle/Ymaomo2dRwjufQ2d9",
  },
     {
    title: "OpCon & PR",
    imageUrl: "/images/Clusters/Opcon.png",
    applyLink: "https://forms.gle/qkGyi8igzVQkmHDCA",
  },
  {
    title: "Graphic Designing",
    imageUrl: "/images/Clusters/GD.png",
    applyLink: "https://forms.gle/2xEd5qPZA8fE3fts8",
  },
  {
    title: "Video Editing",
    imageUrl: "/images/Clusters/video.png",
    applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXtQr45rW2c0Lfvy6gd-Zo8H-7Bb4ds37u8-V8HYUgSdSktg/viewform?usp=publish-editor",
  },
  {
    title: "Content Writing",
    imageUrl: "/images/Clusters/CW.png",
    applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdv9-m-W8LBj4PVtXjWDWh8JBpZ2cSNgrXD6Gwm6zAsNF3KRg/viewform?usp=publish-editor",
  },
  {
    title: "Networks",
    imageUrl: "/images/Clusters/Networks.png",
    applyLink: "https://forms.gle/AYtQseYYb8G3wzFZA",
  }
 
];
export default function RecruitPage() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const cardsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.main
      className="min-h-screen bg-[#07152A] py-12 px-6"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <motion.h1
        className="text-white text-3xl font-bold text-center mb-10"
        variants={titleVariants}
      >
        ACE Club Recruitment Drive 2026
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={cardsVariants}
      >
        {domains.map((domain, idx) => (
          <ClusterCard
            key={idx}
            title={domain.title}
            imageUrl={domain.imageUrl}
            applyLink={domain.applyLink}
          />
        ))}
      </motion.div>
    </motion.main>
  );
}
