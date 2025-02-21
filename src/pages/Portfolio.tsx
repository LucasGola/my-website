import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  languages_url: string;
  languages: { [key: string]: number };
}

const Portfolio = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers: HeadersInit = {
          'Accept': 'application/vnd.github.v3+json'
        };

        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch('https://api.github.com/users/lucasgola/repos', {
          headers
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const repos = await response.json();

        // Fetch languages for each repository
        const reposWithLanguages = await Promise.all(
          repos.map(async (repo: Repository) => {
            try {
              const languagesResponse = await fetch(repo.languages_url, {
                headers
              });
              
              if (!languagesResponse.ok) {
                throw new Error(`Failed to fetch languages for ${repo.name}`);
              }
              
              const languages = await languagesResponse.json();
              return { ...repo, languages };
            } catch (error) {
              console.error(`Error fetching languages for ${repo.name}:`, error);
              return { ...repo, languages: {} };
            }
          })
        );

        // Extract unique languages
        const languages = new Set<string>();
        reposWithLanguages.forEach(repo => {
          Object.keys(repo.languages).forEach(lang => languages.add(lang));
        });

        setAvailableLanguages(Array.from(languages).sort());
        setRepositories(reposWithLanguages);
        setError(null);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        setRepositories([]);
        setAvailableLanguages([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      TypeScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      Python: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      Java: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      HTML: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      CSS: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      PHP: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      Ruby: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      'C++': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      'C#': 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
      Go: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      Rust: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      Swift: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
      Kotlin: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200',
      Dart: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
    };
    return colors[language] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const filteredRepositories = repositories.filter(repo => {
    if (selectedLanguages.length === 0) return true;
    return selectedLanguages.some(lang => Object.keys(repo.languages).includes(lang));
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-colors duration-200">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading repositories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-colors duration-200">
        <div className="text-center text-red-600 dark:text-red-400">
          <p className="text-xl font-semibold mb-2">Error</p>
          <p>{error}</p>
          {!import.meta.env.VITE_GITHUB_TOKEN && (
            <p className="mt-4 text-sm">
              GitHub token not found. Please add your token to the .env file.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0 bg-grid-pattern transform rotate-45"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              My GitHub Projects
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-gray-600 dark:text-gray-300"
            >
              Here are my public repositories from GitHub
            </motion.p>
          </motion.div>

          {/* Language Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by Language</h3>
                <div className="flex flex-wrap gap-2">
                  {availableLanguages.map((language) => (
                    <motion.button
                      key={language}
                      variants={itemVariants}
                      onClick={() => toggleLanguage(language)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:-translate-y-1 ${
                        selectedLanguages.includes(language)
                          ? `${getLanguageColor(language)} ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-gray-900 shadow-md`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {language}
                      {selectedLanguages.includes(language) && (
                        <X className="h-3 w-3" />
                      )}
                    </motion.button>
                  ))}
                </div>
                {selectedLanguages.length > 0 && (
                  <motion.button
                    variants={itemVariants}
                    onClick={() => setSelectedLanguages([])}
                    className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    Clear filters
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Repository Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredRepositories.map((repo) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-y-auto">
                    {repo.description || 'No description available'}
                  </p>
                  
                  {Object.keys(repo.languages).length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {Object.keys(repo.languages).map((language) => (
                        <span
                          key={language}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getLanguageColor(language)}`}
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Star className="h-4 w-4 mr-1" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <GitFork className="h-4 w-4 mr-1" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredRepositories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-300">
                No repositories found with the selected languages.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;