const getLanguages = (): string[] => {
  const languages: string[] = [];
  const modules = import.meta.glob('../../locales/*.json', { eager: true });

  for (const path in modules) {
    const module = modules[path] as { language: string };
    languages.push(module.language);
  }

  return languages;
};

export default getLanguages;
