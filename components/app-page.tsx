'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Code, Wrench, PenTool, Rocket, Brain, Eye, BarChart, Cog, Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Page() {
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const currentPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && currentPosition >= element.offsetTop && currentPosition < element.offsetTop + element.offsetHeight) {
          setCurrentSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-filter backdrop-blur-lg border-b border-gray-800">
        <ul className="flex justify-center space-x-6 py-4">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hover:text-purple-400 transition-colors ${
                  currentSection === item.toLowerCase() ? 'text-purple-400' : ''
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/stars.jpg')] bg-cover bg-center opacity-50"></div>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="rgba(147, 51, 234, 0.3)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
            />
          </svg>
        </div>
        <div className="text-center z-10">
          <motion.h1
            className="text-6xl font-bold mb-4 text-purple-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ARAGOG11
          </motion.h1>
          <motion.p
            className="text-2xl text-purple-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Robotics Engineer & Space Enthusiast
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-300">About Me</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-48 h-48 mx-auto bg-gray-900 rounded-full p-2">
                  <img 
                    src="/atul.png?height=192&width=192" 
                    alt="ARAGOG11" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-lg mb-4 text-gray-300">
                  Greetings, Earthlings! I&apos;m ARAGOG11, a robotics engineer with a passion for exploring the frontiers of
                  technology and space. My mission is to bridge the gap between science fiction and reality through innovative
                  robotics solutions.
                </p>
                <p className="text-lg text-gray-300">
                  With a background in AI and mechanical engineering, I specialize in creating autonomous systems that can
                  operate in extreme environments, from the depths of our oceans to the far reaches of space.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Maze Navigator',
                icon: <Cpu className="w-12 h-12 text-purple-400" />,
                description: 'An autonomous robot capable of navigating complex mazes using advanced algorithms and sensor fusion. This project showcases problem-solving in unknown environments.',
                link: null
              },
              {
                title: 'Line Follower Robot',
                icon: <Rocket className="w-12 h-12 text-purple-400" />,
                description: 'A PID-controlled robot that precisely follows line paths. This project demonstrates the application of control systems in robotics for smooth and accurate navigation.',
                link: 'https://github.com/ARAGOG11/Line_Follower_PID'
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      {project.icon}
                      <h3 className="text-lg font-semibold ml-3 text-purple-300">{project.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        View Project &rarr;
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'Robotics', icon: Cpu },
              { name: 'Embedded C', icon: Code },
              { name: 'Arduino', icon: Cog },
              { name: 'C++', icon: Code },
              { name: 'C', icon: Code },
              { name: 'AutoCAD', icon: PenTool },
              { name: 'Mechanical Engineering', icon: Wrench },
              { name: 'Embedded Systems', icon: Cpu },
              { name: 'Space Technology', icon: Rocket },
              { name: 'AI & Machine Learning', icon: Brain },
              { name: 'Computer Vision', icon: Eye },
              { name: 'Data Analysis', icon: BarChart },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-3 text-center">
                    <skill.icon className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                    <p className="text-xs font-medium text-gray-300">{skill.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-300">Connect With Me</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <div className="flex justify-center space-x-8">
                  {[
                    { icon: Github, href: 'https://github.com/ARAGOG11' },
                    { icon: Mail, href: 'mailto:01aragog@gmail.com' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/atul-khadwal-26196029a/' },
                    { icon: Instagram, href: 'https://instagram.com/_khadwal_' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <social.icon className="w-10 h-10" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} ARAGOG11. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Designed for the future, built for today.</p>
        </div>
      </footer>
    </div>
  )
}
