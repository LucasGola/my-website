import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

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
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10 dark:opacity-20'>
          <div className='absolute inset-0 bg-grid-pattern transform rotate-45'></div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <motion.h1
              className='text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className='font-extrabold'>{t('home.greeting')}</span>
            </motion.h1>

            <motion.p
              className='text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t('home.role')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className='flex justify-center gap-4'
            >
              <a
                href='/portfolio'
                className='inline-flex items-center px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200'
              >
                {t('home.viewWork')}
                <ArrowRight className='ml-2 h-5 w-5' />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-1/4 left-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-1/4 right-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl'></div>
      </div>

      {/* Services Section */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'
      >
        <motion.h2
          variants={itemVariants}
          className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'
        >
          {t('home.activities')}
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            variants={itemVariants}
            className='group relative p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4'>
                <Code className='h-6 w-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
                {t('home.services.frontend.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t('home.services.frontend.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='group relative p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4'>
                <Server className='h-6 w-6 text-purple-600 dark:text-purple-400' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
                {t('home.services.backend.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t('home.services.backend.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='group relative p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-4'>
                <Palette className='h-6 w-6 text-pink-600 dark:text-pink-400' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
                {t('home.services.design.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t('home.services.design.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
