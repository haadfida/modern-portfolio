import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "SprintTracker",
      description: "A comprehensive project management tool built with Ruby on Rails. Features sprint planning, task tracking, and team collaboration capabilities with 301+ commits showcasing iterative development.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["Ruby on Rails", "HTML", "JavaScript", "SCSS"],
      github: "https://github.com/haadfida/Sprint-Tracker",
      demo: "https://github.com/haadfida/Sprint-Tracker",
      isReal: true
    },
    {
      title: "Coming Soon",
      description: "New project in development. Check back soon for updates!",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["Coming Soon"],
      github: "#",
      demo: "#",
      isReal: false
    },
    {
      title: "Coming Soon",
      description: "Another exciting project in the works. Stay tuned!",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      tech: ["Coming Soon"],
      github: "#",
      demo: "#",
      isReal: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255,255,255,0.05)_1px,transparent_0)] bg-[length:50px_50px]"></div>
             <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-700/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-purple-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            
            <button
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 space-y-4"
            >
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-slate-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      
       <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
                         <h1 className="text-5xl md:text-7xl font-bold mb-6">
               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                 Haad Fida
               </span>
             </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Full Stack Developer experienced in Rails and React, with expertise in both mobile and web development using React and React Native
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                             <motion.button
                 onClick={() => scrollToSection('projects')}
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
               >
                 <span className="relative z-10">View My Work</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </motion.button>
               <motion.button
                 onClick={() => scrollToSection('contact')}
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-purple-400/25 relative overflow-hidden group"
               >
                 <span className="relative z-10">Get In Touch</span>
                 <div className="absolute inset-0 bg-purple-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
               </motion.button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/haadfida" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/haadfida" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:haad99@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="text-slate-400" size={32} />
          </motion.div>
        </div>
      </section>

      
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                             <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden group">
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shimmer transition-opacity duration-500"></div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm a Full Stack Developer with 4 years of professional experience building enterprise-grade applications at EZOfficeInventory. I've contributed to products like AssetSonar and EZO CMMS, serving hundreds of thousands of users across web and mobile platforms using React, React Native, and Ruby on Rails.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm passionate about creating scalable solutions and contributing to open source projects. When I'm not coding, I enjoy exploring new technologies and building demo projects to showcase different development approaches.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                                     <motion.div
                     whileHover={{ scale: 1.05 }}
                     className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all cursor-pointer"
                   >
                     <div className="text-2xl font-bold text-purple-400">100k+</div>
                     <div className="text-slate-400">Users Served</div>
                   </motion.div>
                   <motion.div
                     whileHover={{ scale: 1.05 }}
                     className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all cursor-pointer"
                   >
                     <div className="text-2xl font-bold text-pink-400">4+</div>
                     <div className="text-slate-400">Years Exp</div>
                   </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                                     {['React', 'React Native', 'Ruby on Rails', 'TypeScript', 'JavaScript', 'PostgreSQL', 'Git', 'Mobile Dev'].map((skill, index) => (
                     <motion.div 
                       key={skill}
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       whileHover={{ scale: 1.1, y: -5 }}
                       transition={{ delay: index * 0.1, duration: 0.3 }}
                       viewport={{ once: true }}
                       className="bg-slate-800/50 rounded-lg p-3 text-center text-slate-300 border border-slate-700/50 hover:border-purple-400/50 hover:bg-purple-500/10 cursor-pointer hover:text-white transition-all relative overflow-hidden group"
                     >
                       <span className="relative z-10">{skill}</span>
                       <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </motion.div>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <section id="projects" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                             <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 whileHover={{ y: -10, scale: 1.02 }}
                 transition={{ duration: 0.8, delay: index * 0.2 }}
                 viewport={{ once: true }}
                 className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all group hover:shadow-2xl hover:shadow-purple-500/10 relative"
               >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      {project.isReal ? (
                        <>
                          <a href={project.github} className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-slate-700 transition-colors">
                            <Github size={20} />
                          </a>
                          <a href={project.demo} className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-slate-700 transition-colors">
                            <ExternalLink size={20} />
                          </a>
                        </>
                      ) : (
                        <div className="p-2 bg-slate-800/80 rounded-full text-slate-400">
                          <span className="text-sm px-2">Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                    {!project.isReal && <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Coming Soon</span>}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your ideas to life.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-400">haad99@gmail.com</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <Github className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                <p className="text-slate-400">@haadfida</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-slate-400">@haadfida</p>
              </div>
            </div>

            <a
              href="mailto:haad99@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </a>
          </motion.div>
        </div>
      </section>

      
      <footer className="bg-slate-900/50 border-t border-slate-700/50 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/haadfida" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/haadfida" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:haad99@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-slate-400">
            © 2025 Haad Fida. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
