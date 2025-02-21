import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();

  const experiences = t('career.experiences', { returnObjects: true });
  const education = t('career.education', { returnObjects: true });
  const certifications = t('career.certifications', { returnObjects: true });

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
          {/* Professional Experience */}
          <motion.section
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='mb-16'
          >
            <div className='flex items-center mb-8'>
              <Briefcase className='h-8 w-8 text-blue-600 dark:text-blue-400 mr-4' />
              <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'>
                Professional Experience
              </h2>
            </div>
            <div className='space-y-8'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                      {exp.title}
                    </h3>
                    <p className='text-blue-600 dark:text-blue-400 font-medium'>
                      {exp.company}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>
                      {exp.period}
                    </p>
                    <p className='text-gray-700 dark:text-gray-300'>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='mb-16'
          >
            <div className='flex items-center mb-8'>
              <GraduationCap className='h-8 w-8 text-purple-600 dark:text-purple-400 mr-4' />
              <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400'>
                Education
              </h2>
            </div>
            <div className='space-y-8'>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                      {edu.degree}
                    </h3>
                    <p className='text-purple-600 dark:text-purple-400 font-medium'>
                      {edu.school}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>
                      {edu.period}
                    </p>
                    <p className='text-gray-700 dark:text-gray-300'>
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <div className='flex items-center mb-8'>
              <Award className='h-8 w-8 text-pink-600 dark:text-pink-400 mr-4' />
              <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400'>
                Certifications
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative'>
                    <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>
                      {cert.name}
                    </h3>
                    <p className='text-pink-600 dark:text-pink-400'>
                      {cert.issuer}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      {cert.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Career;
