import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const [i18nInitialized, setI18nInitialized] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      await i18n.init();
      setI18nInitialized(true);
    };

    initializeI18n();
  }, []);

  const changeLanguage = (lng: string) => {
    if (i18nInitialized && lng !== i18n.language) {
      i18n.changeLanguage(lng);
    }
  };

  const links = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/portfolio', label: t('portfolio') },
    { to: '/experience', label: t('experience') },
    { to: '/contact', label: t('contact') },
  ];

  const languages: { code: string; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    {
      code: 'pt-br',
      name: 'Português',
      flag: 'https://flagcdn.com/w20/br.png',
    },
    { code: 'es', name: 'Espanhol', flag: 'https://flagcdn.com/w20/es.png' },
    { code: 'ar', name: 'عربى', flag: 'https://flagcdn.com/w20/sa.png' },
    { code: 'bn', name: 'বাংলা', flag: 'https://flagcdn.com/w20/bd.png' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
    { code: 'he', name: 'עברית', flag: 'https://flagcdn.com/w20/il.png' },
    { code: 'hi', name: 'हिंदी', flag: 'https://flagcdn.com/w20/in.png' },
    {
      code: 'id',
      name: 'Bahasa Indonesia',
      flag: 'https://flagcdn.com/w20/id.png',
    },
    { code: 'ja', name: '日本語', flag: 'https://flagcdn.com/w20/jp.png' },
    { code: 'ko', name: '한국어', flag: 'https://flagcdn.com/w20/kr.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w20/ru.png' },
    { code: 'ur', name: 'اردو', flag: 'https://flagcdn.com/w20/pk.png' },
    { code: 'zh', name: '中文', flag: 'https://flagcdn.com/w20/cn.png' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <nav className='fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='text-2xl font-bold text-gray-900 dark:text-white'
          >
            {t('websiteTitle')}
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {/* Language Selector Drop-down */}
            <motion.div>
              <motion.button
                key={'language'}
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-2'
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className='w-6 h-5'
                />
                <span>{currentLanguage.name}</span>
              </motion.button>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='absolute bg-white shadow-md rounded-md mt-2 z-10 max-h-80 overflow-y-auto'
                >
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full'
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className='w-6 h-5'
                      />
                      <span>{lang.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </motion.div>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='md:hidden'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {/* Mobile Language Selector */}
            <motion.div>
              <motion.button
                key={'language'}
                whileHover={{ scale: 1.1 }}
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-2'
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className='w-6 h-5'
                />
                <span>{currentLanguage.name}</span>
              </motion.button>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='absolute bg-white shadow-md rounded-md mt-2 z-10 max-h-40 overflow-y-auto'
                >
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full'
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className='w-6 h-5'
                      />
                      <span>{lang.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </motion.div>
            <button
              onClick={toggleTheme}
              className='w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300'
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
