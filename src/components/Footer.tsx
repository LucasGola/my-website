import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className='text-xl font-bold mb-4'>{t('footer.contact')}</h3>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <Mail className='h-5 w-5' />
                <a
                  href='mailto:your.email@example.com'
                  className='hover:text-gray-300 transition-colors'
                >
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className='text-xl font-bold mb-4'>{t('footer.media')}</h3>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/lucasgola'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300 transition-colors'
              >
                <Github className='h-6 w-6' />
              </a>
              <a
                href='https://linkedin.com/in/lucasgola'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300 transition-colors'
              >
                <Linkedin className='h-6 w-6' />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className='text-xl font-bold mb-4'>{t('footer.links.title')}</h3>{' '}
            <ul className='space-y-2'>
              <li>
                <a
                  href='/portfolio'
                  className='hover:text-gray-300 transition-colors'
                >
                  {t('footer.link.portfolio')}
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='hover:text-gray-300 transition-colors'
                >
                  {t('footer.link.about')}
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='hover:text-gray-300 transition-colors'
                >
                  {t('footer.link.contact')}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className='mt-8 pt-8 border-t border-gray-800 text-center'>
          <p>&copy; {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
