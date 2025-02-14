import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Corp',
      position: 'Senior Frontend Developer',
      period: '2021 - Present',
      description:
        'Led the development of multiple React applications, improving performance and user experience.',
    },
    {
      company: 'Digital Solutions Inc',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      description:
        'Developed and maintained various web applications using React and Node.js.',
    },
    {
      company: 'StartUp Hub',
      position: 'Junior Developer',
      period: '2018 - 2019',
      description:
        'Worked on frontend development using React and collaborated with the design team.',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My professional journey
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute -left-3 top-0">
                <div className="bg-blue-600 dark:bg-blue-400 p-2 rounded-full">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {exp.company}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.period}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}