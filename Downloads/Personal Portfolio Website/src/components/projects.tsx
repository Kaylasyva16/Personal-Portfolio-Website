import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import bisindoImg from 'figma:asset/70a2a105129babba0fbf97b0124149e2129a4f45.png';
import slimImg from 'figma:asset/036864b6c0d365f9ffa9b93a2d9d04f15cce6844.png';
import nutrimateImg from 'figma:asset/741fbc38d77b909609d8010a24530d5f7c023468.png';
import schoolWebsiteImg from 'figma:asset/7ee133970905a1344dbe380452d513b470a9cac0.png';

export function Projects() {
  const projects = [
    {
      title: 'BISINDO Learning App',
      description:
        'Inovasi Pembelajaran Digital BISINDO Berbasis AI untuk Meningkatkan Keterampilan Komunikasi Penyandang Disabilitas.',
      image: bisindoImg,
      tags: ['UI/UX', 'AI', 'Accessibility'],
      color: '#C9CFF8',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'SLIM: AI Lifestyle App',
      description:
        'Transformasi Gaya Hidup Berbasis Artificial Intelligence sebagai Upaya Pencegahan Obesitas.',
      image: slimImg,
      tags: ['Mobile', 'AI', 'Health'],
      color: '#F6DDEB',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Nutrimate',
      description:
        'Solusi Digital untuk Memotivasi Generasi Z Menjalani Pola Hidup Seimbang.',
      image: nutrimateImg,
      tags: ['UI/UX', 'Mobile', 'Wellness'],
      color: '#C9CFF8',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'SD Negeri 1 Ketintang Website',
      description:
        'Website redesign untuk Sekolah Dasar Negeri Terdepan di Ketintang dengan fokus pada user experience dan aksesibilitas.',
      image: schoolWebsiteImg,
      tags: ['Web Design', 'UI/UX', 'Education'],
      color: '#F6DDEB',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9CFF8] rounded-full blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#C9CFF8]/30 text-[#1D35BD] rounded-full text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-[#1D35BD] mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
            A selection of my recent work that showcases my design and development capabilities.
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-smooth border border-[#C9CFF8]/20">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-[#1D35BD] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#4A5568] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm text-[#1D35BD]"
                        style={{ backgroundColor: `${project.color}40` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1D35BD] text-white rounded-full hover:shadow-soft-lg transition-smooth hover:scale-105"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}