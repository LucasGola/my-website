import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/career', label: t('nav.career') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className='fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm transition-colors duration-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex-shrink-0'
          >
            <NavLink
              to='/'
              className='text-2xl font-bold text-gray-800 dark:text-white'
            >
              {t('nav.portfolio')}
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='flex items-baseline space-x-4'>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className='flex items-center space-x-2'>
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-4'>
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className='md:hidden'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900'>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
