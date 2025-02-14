import { motion } from 'framer-motion';
import type { Project } from '../types';

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'A full-featured online shopping platform built with React and Node.js',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management tool with real-time updates',
      image:
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&h=500',
      tags: ['React', 'Firebase', 'Tailwind'],
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500',
      tags: ['TypeScript', 'React', 'D3.js'],
      link: 'https://example.com/project3',
    },
  ];

  return (
    <div className='min-h-screen pt-16 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            Meu Portfólio
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300'>
            Here are some of my recent projects
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 dark:text-blue-400 hover:underline'
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
