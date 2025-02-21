import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY',
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='text-center mb-12'
          >
            <motion.h2
              variants={itemVariants}
              className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'
            >
              {t('contact.title')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className='mt-4 text-gray-600 dark:text-gray-300'
            >
              {t('contact.description')}
            </motion.p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='space-y-6'
            >
              {[
                {
                  icon: MapPin,
                  title: t('contact.locationTitle'),
                  content: t('contact.location'),
                  color: 'blue',
                },
                {
                  icon: Phone,
                  title: t('contact.phoneTitle'),
                  content: t('contact.phone'),
                  color: 'purple',
                },
                {
                  icon: Mail,
                  title: t('contact.emailTitle'),
                  content: t('contact.email'),
                  color: 'pink',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className='group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-900/20 dark:to-${item.color}-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className='relative flex items-center space-x-4'>
                    <div
                      className={`w-12 h-12 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/50 flex items-center justify-center`}
                    >
                      <item.icon
                        className={`h-6 w-6 text-${item.color}-600 dark:text-${item.color}-400`}
                      />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 dark:text-white'>
                        {item.title}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300'>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='group relative p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative'>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className='space-y-6'
                >
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                    >
                      {t('contact.forms.name')}
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      className='mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                    >
                      {t('contact.forms.email')}
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      required
                      className='mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                    >
                      {t('contact.forms.message')}
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      required
                      className='mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                    ></textarea>
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full flex justify-center items-center px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 disabled:opacity-50'
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className='ml-2 h-4 w-4' />
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <p className='text-green-600 dark:text-green-400 text-center'>
                      {t('contact.forms.success')}
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className='text-red-600 dark:text-red-400 text-center'>
                      {t('contact.forms.failed')}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
