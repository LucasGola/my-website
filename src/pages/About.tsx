import { motion } from 'framer-motion';
import { Github, Linkedin, Camera, Music, Book, Coffee } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0 bg-grid-pattern transform rotate-45"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          {/* About Me Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-96 w-full object-cover md:w-96"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Profile"
                />
              </div>
              <div className="p-8">
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">About Me</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
                    seamless user experiences. With several years of experience in web development,
                    I specialize in building modern, responsive applications using cutting-edge technologies.
                  </p>
                  <div className="flex space-x-4 mb-6">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-8"
            >
              Hobbies & Interests
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Camera, title: "Photography", desc: "Capturing moments and exploring visual storytelling", color: "blue" },
                { icon: Music, title: "Music", desc: "Playing guitar and discovering new genres", color: "purple" },
                { icon: Book, title: "Reading", desc: "Tech books and science fiction novels", color: "pink" },
                { icon: Coffee, title: "Coffee", desc: "Exploring different brewing methods", color: "amber" }
              ].map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  variants={itemVariants}
                  className="group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${hobby.color}-50 to-${hobby.color}-100 dark:from-${hobby.color}-900/20 dark:to-${hobby.color}-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full bg-${hobby.color}-100 dark:bg-${hobby.color}-900/50 flex items-center justify-center mb-4`}>
                      <hobby.icon className={`h-6 w-6 text-${hobby.color}-600 dark:text-${hobby.color}-400`} />
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{hobby.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{hobby.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;