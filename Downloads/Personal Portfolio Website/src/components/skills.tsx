import { motion } from 'motion/react';
import { Award, Trophy, Medal } from 'lucide-react';

export function Skills() {
  const awards = [
    {
      title: 'Juara 1 UI/UX Design',
      organizer: 'Universitas Trunojoyo Madura',
      achievement: '1st Place',
      year: '2024',
      description: 'First place winner for UI/UX Design Competition at Universitas Trunojoyo Madura',
      icon: Trophy,
      color: '#C9CFF8',
      behanceUrl: 'https://www.behance.net/gallery/225089679/MUSEUMGO-AR-BASED-MUSEUM-CASE-STUDY',
    },
    {
      title: 'Juara 2 UI/UX Design',
      organizer: 'Universitas Trunojoyo Madura',
      achievement: '2nd Place',
      year: '2025',
      description: 'Second place winner for UI/UX Design Competition at Universitas Trunojoyo Madura',
      icon: Award,
      color: '#F6DDEB',
      behanceUrl: 'https://www.behance.net/gallery/233053805/SLIM-AI-Lifestyle-untuk-Pencegahan-Obesitas',
    },
    {
      title: 'Juara 2 UI/UX Design',
      organizer: 'Universitas Muhammadiyah Ponorogo',
      achievement: '2nd Place',
      year: '2025',
      description: 'Second place winner for UI/UX Design Competition at Universitas Muhammadiyah Ponorogo',
      icon: Medal,
      color: '#C9CFF8',
      behanceUrl: 'https://www.behance.net/your-project-3', // Add your Behance URL here
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9CFF8] rounded-full blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#F6DDEB]/50 text-[#1D35BD] rounded-full text-sm mb-4">
            Achievements
          </span>
          <h2 className="text-[#1D35BD] mb-6">
            UI/UX Competition Awards
          </h2>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
            Honored to receive recognition from prestigious design competitions and university events.
            Click on each award to see the project overview.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => window.open(award.behanceUrl, '_blank')}
                className="w-full text-left bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth h-full border border-[#C9CFF8]/20 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth"
                    style={{ backgroundColor: `${award.color}40` }}
                  >
                    <award.icon className="w-10 h-10 text-[#1D35BD]" />
                  </div>
                  <span className="px-3 py-1 bg-[#1D35BD] text-white rounded-full text-sm mb-3">
                    {award.year}
                  </span>
                  <h3 className="text-[#1D35BD] mb-2">
                    {award.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm mb-2">{award.organizer}</p>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-sm text-[#1D35BD]"
                    style={{ backgroundColor: `${award.color}60` }}
                  >
                    {award.achievement}
                  </span>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed text-center">
                  {award.description}
                </p>
                <p className="text-[#1D35BD] text-sm mt-4 text-center group-hover:underline">
                  Click to view project →
                </p>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}