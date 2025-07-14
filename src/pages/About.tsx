import { motion } from 'framer-motion';
import { Code, Gamepad, Github, Linkedin, Monitor, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Me from '../assets/me.jpg';

const About = () => {
  const { t } = useTranslation();
  const items = t('about.hobbies.items', { returnObjects: true }) as {
    id: string;
    title: string;
    description: string;
  }[];

  const hobbyConfig = [
    { id: 'music', icon: Music, color: 'purple' },
    { id: 'gaming', icon: Gamepad, color: 'blue' },
    { id: 'series', icon: Monitor, color: 'pink' },
    { id: 'coding', icon: Code, color: 'amber' },
  ];

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
    <div className='min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200'>
      <div className='relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10 dark:opacity-20'>
          <div className='absolute inset-0 bg-grid-pattern transform rotate-45'></div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-1/4 left-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-1/4 right-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative'>
          {/* About Me Section */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl'
          >
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-96 w-full object-cover md:w-96'
                  src={Me}
                  alt='Profile'
                />
              </div>
              <div className='p-8'>
                <motion.div variants={itemVariants}>
                  <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4'>
                    {t('about.title')}
                  </h2>
                  <p className='text-gray-600 dark:text-gray-300 mb-6'>
                    {t('about.description')}
                  </p>
                  <div className='flex space-x-4 mb-6'>
                    <a
                      href='https://github.com/lucasgola'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
                    >
                      <Github className='h-6 w-6' />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/lucasgola/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
                    >
                      <Linkedin className='h-6 w-6' />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='mt-12'
          >
            <motion.h3
              variants={itemVariants}
              className='text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-8'
            >
              {t('about.hobbies.title')}
            </motion.h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {items.map((item, index) => {
                const config =
                  hobbyConfig.find((c) => c.id === item.id) || hobbyConfig[0];

                return (
                  <motion.div
                    key={`${item.id}-${index}`} // Chave única com id + index
                    variants={itemVariants}
                    className='group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${config.color}-50 to-${config.color}-100 dark:from-${config.color}-900/20 dark:to-${config.color}-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <div className='relative'>
                      <div
                        className={`w-12 h-12 rounded-full bg-${config.color}-100 dark:bg-${config.color}-900/50 flex items-center justify-center mb-4`}
                      >
                        <config.icon
                          className={`h-6 w-6 text-${config.color}-600 dark:text-${config.color}-400`}
                        />
                      </div>
                      <h4 className='font-semibold mb-2 text-gray-900 dark:text-white'>
                        {item.title}
                      </h4>
                      <p className='text-gray-600 dark:text-gray-300'>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
