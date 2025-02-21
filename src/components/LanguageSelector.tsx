import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'zh', name: '中文' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ar', name: 'العربية' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'ja', name: '日本語' },
  { code: 'fr', name: 'Français' },
  { code: 'kr', name: '한국어' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className='relative group'>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
      >
        <Languages className='h-5 w-5 text-gray-700 dark:text-gray-200' />
      </motion.button>

      <div className='absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            whileHover={{ x: 5 }}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm ${
              i18n.language === lang.code
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            } transition-colors`}
          >
            {lang.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
