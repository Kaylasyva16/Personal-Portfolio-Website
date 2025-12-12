import { motion } from "motion/react";
import { Code, Palette, Sparkles, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting intuitive and visually stunning user interfaces",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Building robust, scalable, and maintainable applications",
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Putting users first in every design decision",
    },
    {
      icon: Sparkles,
      title: "Attention to Detail",
      description: "Obsessing over every pixel and interaction",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6DDEB] rounded-full blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#C9CFF8]/30 text-[#1D35BD] rounded-full text-sm mb-4">About Me</span>
          <h2 className="text-[#1D35BD] mb-6">Passionate About Creating Amazing Experiences</h2>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
            I’m a UI/UX Designer who focuses on creating seamless and thoughtful user experiences. With hands-on project experience, UI/UX competition achievements, and intensive bootcamp training, I bring a user-first mindset to every
            design I create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth border border-[#C9CFF8]/20 h-full">
                <div className="w-14 h-14 rounded-2xl gradient-lavender-blush flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <item.icon className="w-7 h-7 text-[#1D35BD]" />
                </div>
                <h3 className="text-[#1D35BD] mb-3">{item.title}</h3>
                <p className="text-[#4A5568]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-gradient-lavender-blush rounded-3xl p-12 shadow-soft-lg">
          <div className="grid md:grid-cols-1 gap-12">
            <div>
              <h3 className="text-[#1D35BD] mb-6">My Journey</h3>
              <div className="space-y-4 text-[#4A5568]">
                <p className="leading-relaxed">
                  My passion for design and development started during my college years when I built my first website. Since then, I've worked with startups, agencies, and enterprises to bring digital products to life.
                </p>
                <p className="leading-relaxed">I believe that great design is invisible - it just works. My approach combines user research, iterative design, and modern development practices to create experiences that users love.</p>
                <p className="leading-relaxed">When I'm not designing or coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the community.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
