import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen pt-16 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex-1 text-center md:text-left'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Hi, I'm{' '}
              <span className='text-blue-600 dark:text-blue-400'>John Doe</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>
              Full Stack Developer & UI/UX Designer
            </p>
            <div className='flex justify-center md:justify-start space-x-4'>
              <a
                href='https://github.com/lucasgola'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'
              >
                <Github className='w-6 h-6' />
              </a>
              <a
                href='https://linkedin.com/in/LucasGola'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'
              >
                <Linkedin className='w-6 h-6' />
              </a>
              <a
                href='mailto:lucasgola@outlook.com'
                className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'
              >
                <Mail className='w-6 h-6' />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex-1'
          >
            <img
              src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&h=600'
              alt='Profile'
              className='rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-2xl'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
