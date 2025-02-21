import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        portfolio: 'Portfolio',
        home: 'Home',
        about: 'About',
        career: 'Career',
        contact: 'Contact',
      },
      home: {
        greeting: "Hi, I'm Lucas",
        role: 'Full Stack Developer | UI/UX Designer',
        viewWork: 'View My Work',
        services: {
          frontend: {
            title: 'Frontend Development',
            description: 'Creating beautiful, responsive user interfaces',
          },
          backend: {
            title: 'Backend Development',
            description: 'Building robust server-side applications',
          },
          design: {
            title: 'UI/UX Design',
            description: 'Crafting intuitive user experiences',
          },
        },
      },
      about: {
        title: 'About Me',
        description:
          "I'm a passionate Full Stack Developer with a keen eye for design and a love for creating seamless user experiences. With several years of experience in web development, I specialize in building modern, responsive applications using cutting-edge technologies.",
        hobbies: {
          title: 'Hobbies & Interests',
          music: {
            title: 'Musica',
            description: 'Playing guitar and discovering new genres',
          },
          games: {
            title: 'Games',
            description: 'Playing games',
          },
          whatching: {
            title: 'Whatching',
            description: 'Watching films',
          },
          programing: {
            title: 'Programing',
            description: 'Creating projects',
          },
        },
      },
      portfolio: {
        loading: 'Loading repositories...',
        tokenError:
          'GitHub token not found. Please add your token to the .env file.',
        title: 'My GitHub Projects',
        description: 'Here are my public repositories from GitHub',
        filtersTitle: 'Filter by Language',
        clearFilters: 'Clear Filters',
        noResults: 'No repositories found with the selected languages.',
      },
      career: {
        profissional: [
          {
            title: 'Junior Process Analyst',
            company: 'Guima Conseco',
            period: '2024 - Present',
            description: 'Guima Conseco',
          },
          {
            title: 'Computer Technician',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'Trainee',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: 'Junior Full Stack Developer',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'Junior Full Stack Developer',
          },
        ],
        studies: [
          {
            degree: 'Computer Engineering',
            school: 'Faculdade Impacta de Tecnologia',
            type: "Bachelor's Degree",
            period: '2021 - 2024',
            description: 'Computer Engineering',
          },
          {
            degree: 'Administration Technician',
            school: 'ETEC Parque da Juventude',
            type: 'Technical Degree',
            period: '2017 - 2019',
            description: 'Administration Technician',
          },
        ],
        certifications: [
          {
            name: 'AWS Certified Developer',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'Professional Scrum Master I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'React Advanced Certification',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'Get in Touch',
        description:
          'Have a question or want to work together? Feel free to contact me!',
        locationTitle: 'Location',
        location: 'São Paulo - SP',
        phoneTitle: 'Phone',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'Email',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          success: 'Message sent successfully!',
          failed: 'Failed to send message. Please try again.',
        },
      },
      footer: {
        contact: 'Contact',
        email: 'lucasgola@outlook.com',
        media: 'Social Media',
        links: {
          title: 'Quick Links',
          portfolio: 'Portfolio',
          about: 'About',
          contact: 'Contact',
        },
        rights: '2025 Lucas Gola da Silva. All rights reserved.',
      },
    },
  },
  pt: {
    translation: {
      nav: {
        portfolio: 'Portfólio',
        home: 'Início',
        about: 'Sobre',
        career: 'Carreira',
        contact: 'Contato',
      },
      home: {
        greeting: 'Olá, sou o Lucas',
        role: 'Desenvolvedor Full Stack | Designer UI/UX',
        viewWork: 'Veja Meu Trabalho',
        services: {
          frontend: {
            title: 'Desenvolvimento Frontend',
            description: 'Criando interfaces de usuário bonitas e responsivas',
          },
          backend: {
            title: 'Desenvolvimento Backend',
            description: 'Construindo aplicações robustas no lado do servidor',
          },
          design: {
            title: 'Design UI/UX',
            description: 'Criando experiências de usuário intuitivas',
          },
        },
      },
      about: {
        title: 'Sobre Mim',
        description:
          'Sou um Desenvolvedor Full Stack apaixonado com um olho atento para design e um amor por criar experiências de usuário perfeitas. Com vários anos de experiência em desenvolvimento web, eu me especializo em construir aplicações modernas e responsivas usando tecnologias de ponta.',
        hobbies: {
          title: 'Hobbies e Interesses',
          music: {
            title: 'Música',
            description: 'Tocando guitarra e descobrindo novos gêneros',
          },
          games: {
            title: 'Jogos',
            description: 'Jogando jogos',
          },
          watching: {
            title: 'Assistindo',
            description: 'Assistindo filmes',
          },
          programming: {
            title: 'Programação',
            description: 'Criando projetos',
          },
        },
      },
      portfolio: {
        loading: 'Carregando repositórios...',
        tokenError:
          'Token do GitHub não encontrado. Por favor, adicione seu token ao arquivo .env.',
        title: 'Meus Projetos no GitHub',
        description: 'Aqui estão meus repositórios públicos do GitHub',
        filtersTitle: 'Filtrar por Linguagem',
        clearFilters: 'Limpar Filtros',
        noResults:
          'Nenhum repositório encontrado com as linguagens selecionadas.',
      },
      career: {
        profissional: [
          {
            title: 'Analista de Processos Júnior',
            company: 'Guima Conseco',
            period: '2024 - Presente',
            description: 'Guima Conseco',
          },
          {
            title: 'Técnico de Computador',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'Estagiário',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: 'Desenvolvedor Full Stack Júnior',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'Desenvolvedor Full Stack Júnior',
          },
        ],
        studies: [
          {
            degree: 'Engenharia da Computação',
            school: 'Faculdade Impacta de Tecnologia',
            type: 'Bacharelado',
            period: '2021 - 2024',
            description: 'Engenharia da Computação',
          },
          {
            degree: 'Técnico em Administração',
            school: 'ETEC Parque da Juventude',
            type: 'Curso Técnico',
            period: '2017 - 2019',
            description: 'Técnico em Administração',
          },
        ],
        certifications: [
          {
            name: 'Desenvolvedor Certificado AWS',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'Scrum Master Profissional I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'Certificação Avançada em React',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'Entre em Contato',
        description:
          'Tem uma pergunta ou quer trabalhar junto? Fique à vontade para entrar em contato!',
        locationTitle: 'Localização',
        location: 'São Paulo - SP',
        phoneTitle: 'Telefone',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'Email',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'Nome',
          email: 'Email',
          message: 'Mensagem',
          success: 'Mensagem enviada com sucesso!',
          failed: 'Falha ao enviar mensagem. Por favor, tente novamente.',
        },
      },
      footer: {
        contact: 'Contato',
        email: 'lucasgola@outlook.com',
        media: 'Redes Sociais',
        links: {
          title: 'Links Rápidos',
          portfolio: 'Portfólio',
          about: 'Sobre',
          contact: 'Contato',
        },
        rights: '2025 Lucas Gola da Silva. Todos os direitos reservados.',
      },
    },
  },
  es: {
    translation: {
      nav: {
        portfolio: 'Portafolio',
        home: 'Inicio',
        about: 'Acerca de',
        career: 'Carrera',
        contact: 'Contacto',
      },
      home: {
        greeting: 'Hola, soy Lucas',
        role: 'Desarrollador Full Stack | Diseñador UI/UX',
        viewWork: 'Ver Mi Trabajo',
        services: {
          frontend: {
            title: 'Desarrollo Frontend',
            description: 'Creando interfaces de usuario hermosas y responsivas',
          },
          backend: {
            title: 'Desarrollo Backend',
            description:
              'Construyendo aplicaciones robustas del lado del servidor',
          },
          design: {
            title: 'Diseño UI/UX',
            description: 'Creando experiencias de usuario intuitivas',
          },
        },
      },
      about: {
        title: 'Acerca de Mí',
        description:
          'Soy un Desarrollador Full Stack apasionado con un ojo atento para el diseño y un amor por crear experiencias de usuario perfectas. Con varios años de experiencia en desarrollo web, me especializo en construir aplicaciones modernas y responsivas usando tecnologías de vanguardia.',
        hobbies: {
          title: 'Hobbies e Intereses',
          music: {
            title: 'Música',
            description: 'Tocar guitarra y descubrir nuevos géneros',
          },
          games: {
            title: 'Juegos',
            description: 'Jugar juegos',
          },
          watching: {
            title: 'Mirar',
            description: 'Mirar películas',
          },
          programming: {
            title: 'Programación',
            description: 'Crear proyectos',
          },
        },
      },
      portfolio: {
        loading: 'Cargando repositorios...',
        tokenError:
          'Token de GitHub no encontrado. Por favor, añade tu token al archivo .env.',
        title: 'Mis Proyectos en GitHub',
        description: 'Aquí están mis repositorios públicos de GitHub',
        filtersTitle: 'Filtrar por Lenguaje',
        clearFilters: 'Limpiar Filtros',
        noResults:
          'No se encontraron repositorios con los lenguajes seleccionados.',
      },
      career: {
        profissional: [
          {
            title: 'Analista de Procesos Junior',
            company: 'Guima Conseco',
            period: '2024 - Presente',
            description: 'Guima Conseco',
          },
          {
            title: 'Técnico de Computadora',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'Pasante',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: 'Desarrollador Full Stack Junior',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'Desarrollador Full Stack Junior',
          },
        ],
        studies: [
          {
            degree: 'Ingeniería Informática',
            school: 'Faculdade Impacta de Tecnologia',
            type: 'Licenciatura',
            period: '2021 - 2024',
            description: 'Ingeniería Informática',
          },
          {
            degree: 'Técnico en Administración',
            school: 'ETEC Parque da Juventude',
            type: 'Curso Técnico',
            period: '2017 - 2019',
            description: 'Técnico en Administración',
          },
        ],
        certifications: [
          {
            name: 'Desarrollador Certificado AWS',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'Scrum Master Profesional I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'Certificación Avanzada en React',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'Ponte en Contacto',
        description:
          '¿Tienes alguna pregunta o quieres trabajar juntos? ¡No dudes en contactarme!',
        locationTitle: 'Ubicación',
        location: 'São Paulo - SP',
        phoneTitle: 'Teléfono',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'Email',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'Nombre',
          email: 'Email',
          message: 'Mensaje',
          success: '¡Mensaje enviado con éxito!',
          failed: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        },
      },
      footer: {
        contact: 'Contacto',
        email: 'lucasgola@outlook.com',
        media: 'Redes Sociales',
        links: {
          title: 'Enlaces Rápidos',
          portfolio: 'Portafolio',
          about: 'Acerca de',
          contact: 'Contacto',
        },
        rights: '2025 Lucas Gola da Silva. Todos los derechos reservados.',
      },
    },
  },
  zh: {
    translation: {
      nav: {
        portfolio: '作品集',
        home: '主页',
        about: '关于',
        career: '职业',
        contact: '联系',
      },
      home: {
        greeting: '你好，我是 Lucas',
        role: '全栈开发者 | UI/UX 设计师',
        viewWork: '查看我的作品',
        services: {
          frontend: {
            title: '前端开发',
            description: '创建美观、响应迅速的用户界面',
          },
          backend: {
            title: '后端开发',
            description: '构建可靠的服务器端应用',
          },
          design: {
            title: 'UI/UX 设计',
            description: '打造直观的用户体验',
          },
        },
      },
      about: {
        title: '关于我',
        description:
          '我是一名热情的全栈开发者，对设计充满敏锐的洞察力，热爱创造无缝的用户体验。拥有多年的网页开发经验，我专注于使用尖端技术构建现代、响应式应用程序。',
        hobbies: {
          title: '爱好与兴趣',
          music: {
            title: '音乐',
            description: '弹吉他和发现新音乐类型',
          },
          games: {
            title: '游戏',
            description: '玩游戏',
          },
          watching: {
            title: '观看',
            description: '看电影',
          },
          programming: {
            title: '编程',
            description: '创建项目',
          },
        },
      },
      portfolio: {
        loading: '正在加载库...',
        tokenError: '未找到 GitHub 令牌。请将您的令牌添加到 .env 文件中。',
        title: '我的 GitHub 项目',
        description: '以下是我在 GitHub 上的公共库',
        filtersTitle: '按语言筛选',
        clearFilters: '清除筛选器',
        noResults: '未找到使用所选语言的库。',
      },
      career: {
        profissional: [
          {
            title: '初级流程分析师',
            company: 'Guima Conseco',
            period: '2024 - 现在',
            description: 'Guima Conseco',
          },
          {
            title: '计算机技术员',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: '实习生',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: '初级全栈开发者',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: '初级全栈开发者',
          },
        ],
        studies: [
          {
            degree: '计算机工程',
            school: 'Faculdade Impacta de Tecnologia',
            type: '学士学位',
            period: '2021 - 2024',
            description: '计算机工程',
          },
          {
            degree: '行政管理技术员',
            school: 'ETEC Parque da Juventude',
            type: '技术学位',
            period: '2017 - 2019',
            description: '行政管理技术员',
          },
        ],
        certifications: [
          {
            name: 'AWS 认证开发者',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: '专业 Scrum Master I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: '高级 React 认证',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: '取得联系',
        description: '有问题或想一起合作？欢迎随时联系我！',
        locationTitle: '位置',
        location: '圣保罗 - SP',
        phoneTitle: '电话',
        phone: '+55 (11) 99448-5761',
        emailTitle: '电子邮件',
        email: 'lucasgola@outlook.com',
        forms: {
          name: '姓名',
          email: '电子邮件',
          message: '消息',
          success: '消息发送成功！',
          failed: '消息发送失败。请重试。',
        },
      },
      footer: {
        contact: '联系',
        email: 'lucasgola@outlook.com',
        media: '社交媒体',
        links: {
          title: '快速链接',
          portfolio: '作品集',
          about: '关于',
          contact: '联系',
        },
        rights: '2025 Lucas Gola da Silva。版权所有。',
      },
    },
  },
  hi: {
    translation: {
      nav: {
        portfolio: 'पोर्टफोलियो',
        home: 'होम',
        about: 'के बारे में',
        career: 'करियर',
        contact: 'संपर्क',
      },
      home: {
        greeting: 'नमस्ते, मैं लुकास हूं',
        role: 'फुल स्टैक डेवलपर | UI/UX डिज़ाइनर',
        viewWork: 'मेरा काम देखें',
        services: {
          frontend: {
            title: 'फ्रंटेंड डेवलपमेंट',
            description: 'सुरुचिपूर्ण, उत्तरदायी उपयोगकर्ता इंटरफेस बनाना',
          },
          backend: {
            title: 'बैकेंड डेवलपमेंट',
            description: 'मजबूत सर्वर-साइड एप्लिकेशन बनाना',
          },
          design: {
            title: 'UI/UX डिज़ाइन',
            description: 'अनुभवपूर्ण उपयोगकर्ता अनुभव बनाना',
          },
        },
      },
      about: {
        title: 'मेरे बारे में',
        description:
          'मैं एक उत्साही फुल स्टैक डेवलपर हूं जो डिजाइन के लिए तीखी नजर और बिना किसी कठिनाई के उपयोगकर्ता अनुभव बनाने के प्रेम के साथ हूं। कई वर्षों के वेब डेवलपमेंट के अनुभव के साथ, मैं आधुनिक, उत्तरदायी एप्लिकेशन बनाने में विशेषज्ञ हूं जो अत्याधुनिक तकनीकों का उपयोग करते हैं।',
        hobbies: {
          title: 'शौक और रुचियाँ',
          music: {
            title: 'संगीत',
            description: 'गिटार बजाना और नए शैलियों को खोजना',
          },
          games: {
            title: 'गेम्स',
            description: 'गेम्स खेलना',
          },
          watching: {
            title: 'देखना',
            description: 'फिल्में देखना',
          },
          programming: {
            title: 'प्रोग्रामिंग',
            description: 'प्रोजेक्ट बनाना',
          },
        },
      },
      portfolio: {
        loading: 'रिपॉजिटरी लोड हो रहे हैं...',
        tokenError:
          'GitHub टोकन नहीं मिला। कृपया अपना टोकन .env फाइल में जोड़ें।',
        title: 'मेरे GitHub प्रोजेक्ट्स',
        description: 'यहाँ मेरे सार्वजनिक GitHub रिपॉजिटरी हैं',
        filtersTitle: 'भाषा के द्वारा फ़िल्टर करें',
        clearFilters: 'फ़िल्टर साफ़ करें',
        noResults: 'चयनित भाषाओं के साथ कोई रिपॉजिटरी नहीं मिली।',
      },
      career: {
        profissional: [
          {
            title: 'जूनियर प्रोसेस एनालिस्ट',
            company: 'Guima Conseco',
            period: '2024 - वर्तमान',
            description: 'Guima Conseco',
          },
          {
            title: 'कंप्यूटर तकनीशियन',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'प्रशिक्षु',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: 'जूनियर फुल स्टैक डेवलपर',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'जूनियर फुल स्टैक डेवलपर',
          },
        ],
        studies: [
          {
            degree: 'कंप्यूटर इंजीनियरिंग',
            school: 'Faculdade Impacta de Tecnologia',
            type: 'बैचलर डिग्री',
            period: '2021 - 2024',
            description: 'कंप्यूटर इंजीनियरिंग',
          },
          {
            degree: 'प्रशासन तकनीशियन',
            school: 'ETEC Parque da Juventude',
            type: 'टेक्निकल डिग्री',
            period: '2017 - 2019',
            description: 'प्रशासन तकनीशियन',
          },
        ],
        certifications: [
          {
            name: 'AWS प्रमाणित डेवलपर',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'प्रोफेशनल स्क्रम मास्टर I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'रीएक्ट एडवांस्ड प्रमाणपत्र',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'संपर्क करें',
        description:
          'कोई प्रश्न है या साथ काम करना चाहते हैं? कृपया मुझसे संपर्क करें!',
        locationTitle: 'स्थान',
        location: 'साओ पाउलो - एसपी',
        phoneTitle: 'फ़ोन',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'ईमेल',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'नाम',
          email: 'ईमेल',
          message: 'संदेश',
          success: 'संदेश सफलतापूर्वक भेजा गया!',
          failed: 'संदेश भेजने में विफल। कृपया पुनः प्रयास करें।',
        },
      },
      footer: {
        contact: 'संपर्क',
        email: 'lucasgola@outlook.com',
        media: 'सोशल मीडिया',
        links: {
          title: 'त्वरित लिंक',
          portfolio: 'पोर्टफोलियो',
          about: 'के बारे में',
          contact: 'संपर्क',
        },
        rights: '2025 Lucas Gola da Silva। सभी अधिकार सुरक्षित।',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        portfolio: 'المحفظة',
        home: 'الرئيسية',
        about: 'حول',
        career: 'المسار المهني',
        contact: 'اتصل',
      },
      home: {
        greeting: 'مرحبًا، أنا لوكاس',
        role: 'مطور متكامل | مصمم UI/UX',
        viewWork: 'عرض أعمالي',
        services: {
          frontend: {
            title: 'تطوير الواجهة الأمامية',
            description: 'إنشاء واجهات مستخدم جميلة وسريعة الاستجابة',
          },
          backend: {
            title: 'تطوير الخلفية',
            description: 'بناء تطبيقات قوية على الجانب الخادم',
          },
          design: {
            title: 'تصميم UI/UX',
            description: 'تصميم تجارب مستخدم بديهية',
          },
        },
      },
      about: {
        title: 'نبذة عني',
        description:
          'أنا مطور متكامل مفعم بالشغف ولدي عين ثاقبة للتصميم وحب لإنشاء تجارب مستخدم سلسة. مع سنوات عديدة من الخبرة في تطوير الويب، أختص في بناء تطبيقات حديثة وسريعة الاستجابة باستخدام تقنيات متطورة.',
        hobbies: {
          title: 'الهوايات والاهتمامات',
          music: {
            title: 'الموسيقى',
            description: 'عزف الجيتار واكتشاف أنواع جديدة',
          },
          games: {
            title: 'الألعاب',
            description: 'لعب الألعاب',
          },
          watching: {
            title: 'مشاهدة',
            description: 'مشاهدة الأفلام',
          },
          programming: {
            title: 'البرمجة',
            description: 'إنشاء المشاريع',
          },
        },
      },
      portfolio: {
        loading: 'جارٍ تحميل المستودعات...',
        tokenError:
          'لم يتم العثور على رمز GitHub. يرجى إضافة الرمز الخاص بك إلى ملف .env.',
        title: 'مشاريعي على GitHub',
        description: 'ها هي مستودعاتي العامة على GitHub',
        filtersTitle: 'تصفية حسب اللغة',
        clearFilters: 'مسح الفلاتر',
        noResults: 'لم يتم العثور على مستودعات باستخدام اللغات المحددة.',
      },
      career: {
        profissional: [
          {
            title: 'محلل عمليات مبتدئ',
            company: 'Guima Conseco',
            period: '2024 - الوقت الحالي',
            description: 'Guima Conseco',
          },
          {
            title: 'فني كمبيوتر',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'متدرب',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: 'مطور متكامل مبتدئ',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'مطور متكامل مبتدئ',
          },
        ],
        studies: [
          {
            degree: 'هندسة الحاسوب',
            school: 'Faculdade Impacta de Tecnologia',
            type: 'درجة البكالوريوس',
            period: '2021 - 2024',
            description: 'هندسة الحاسوب',
          },
          {
            degree: 'فني إدارة',
            school: 'ETEC Parque da Juventude',
            type: 'درجة فنية',
            period: '2017 - 2019',
            description: 'فني إدارة',
          },
        ],
        certifications: [
          {
            name: 'مطور معتمد من AWS',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'محترف Scrum Master I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'شهادة متقدمة في React',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'ابقى على تواصل',
        description:
          'هل لديك سؤال أو تريد العمل معًا؟ لا تتردد في التواصل معي!',
        locationTitle: 'الموقع',
        location: 'ساو باولو - إس بي',
        phoneTitle: 'الهاتف',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'البريد الإلكتروني',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          success: 'تم إرسال الرسالة بنجاح!',
          failed: 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
        },
      },
      footer: {
        contact: 'اتصل',
        email: 'lucasgola@outlook.com',
        media: 'وسائل التواصل الاجتماعي',
        links: {
          title: 'روابط سريعة',
          portfolio: 'المحفظة',
          about: 'حول',
          contact: 'اتصل',
        },
        rights: '2025 Lucas Gola da Silva. جميع الحقوق محفوظة.',
      },
    },
  },
  bn: {
    translation: {
      nav: {
        portfolio: 'পোর্টফোলিও',
        home: 'হোম',
        about: 'সম্পর্কে',
        career: 'ক্যারিয়ার',
        contact: 'যোগাযোগ',
      },
      home: {
        greeting: 'হ্যালো, আমি লুকাস',
        role: 'ফুল স্ট্যাক ডেভেলপার | ইউআই/ইউএক্স ডিজাইনার',
        viewWork: 'আমার কাজ দেখুন',
        services: {
          frontend: {
            title: 'ফ্রন্টেন্ড ডেভেলপমেন্ট',
            description:
              'সুন্দর, প্রতিক্রিয়াশীল ব্যবহারকারীর ইন্টারফেস তৈরি করা',
          },
          backend: {
            title: 'ব্যাকেন্ড ডেভেলপমেন্ট',
            description: 'দৃঢ় সার্ভার-সাইড অ্যাপ্লিকেশন তৈরি করা',
          },
          design: {
            title: 'ইউআই/ইউএক্স ডিজাইন',
            description: 'স্বজ্ঞাত ব্যবহারকারীর অভিজ্ঞতা তৈরি করা',
          },
        },
      },
      about: {
        title: 'আমার সম্পর্কে',
        description:
          'আমি একটি অনুরাগী ফুল স্ট্যাক ডেভেলপার যা ডিজাইনের জন্য তীক্ষ্ণ নজর এবং স্বতন্ত্র ব্যবহারকারীর অভিজ্ঞতা তৈরির প্রতি ভালোবাসা সহ। ওয়েব ডেভেলপমেন্টে কয়েক বছরের অভিজ্ঞতা সহ, আমি আধুনিক, প্রতিক্রিয়াশীল অ্যাপ্লিকেশন তৈরি করতে পারদর্শী যা সর্বাধুনিক প্রযুক্তি ব্যবহার করে।',
        hobbies: {
          title: 'শখ এবং আগ্রহ',
          music: {
            title: 'সঙ্গীত',
            description: 'গিটার বাজানো এবং নতুন শৈলীর আবিষ্কার করা',
          },
          games: {
            title: 'গেমস',
            description: 'গেমস খেলা',
          },
          watching: {
            title: 'দেখা',
            description: 'ফিল্ম দেখা',
          },
          programming: {
            title: 'প্রোগ্রামিং',
            description: 'প্রকল্প তৈরি করা',
          },
        },
      },
      portfolio: {
        loading: 'রিপোজিটরি লোড হচ্ছে...',
        tokenError:
          'GitHub টোকেন পাওয়া যায়নি। অনুগ্রহ করে আপনার টোকেন .env ফাইলে যোগ করুন।',
        title: 'আমার GitHub প্রকল্পগুলি',
        description: 'এখানে আমার পাবলিক GitHub রিপোজিটরিগুলি রয়েছে',
        filtersTitle: 'ভাষা দ্বারা ফিল্টার করুন',
        clearFilters: 'ফিল্টার মুছুন',
        noResults: 'নির্বাচিত ভাষা সহ কোনও রিপোজিটরি পাওয়া যায়নি।',
      },
      career: {
        profissional: [
          {
            title: 'জুনিয়র প্রসেস বিশ্লেষক',
            company: 'Guima Conseco',
            period: '2024 - বর্তমান',
            description: 'Guima Conseco',
          },
          {
            title: 'কম্পিউটার টেকনিশিয়ান',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'শিক্ষানবিস',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: 'জুনিয়র ফুল স্ট্যাক ডেভেলপার',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'জুনিয়র ফুল স্ট্যাক ডেভেলপার',
          },
        ],
        studies: [
          {
            degree: 'কম্পিউটার ইঞ্জিনিয়ারিং',
            school: 'Faculdade Impacta de Tecnologia',
            type: 'ব্যাচেলর ডিগ্রি',
            period: '2021 - 2024',
            description: 'কম্পিউটার ইঞ্জিনিয়ারিং',
          },
          {
            degree: 'প্রশাসন টেকনিশিয়ান',
            school: 'ETEC Parque da Juventude',
            type: 'টেকনিক্যাল ডিগ্রি',
            period: '2017 - 2019',
            description: 'প্রশাসন টেকনিশিয়ান',
          },
        ],
        certifications: [
          {
            name: 'AWS সার্টিফাইড ডেভেলপার',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'প্রফেশনাল স্ক্রাম মাস্টার I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'React অগ্রিম সার্টিফিকেশন',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'যোগাযোগ করুন',
        description:
          'কোন প্রশ্ন আছে অথবা একসাথে কাজ করতে চান? অনুগ্রহ করে আমার সাথে যোগাযোগ করুন!',
        locationTitle: 'অবস্থান',
        location: 'সাও পাওলো - এসপি',
        phoneTitle: 'ফোন',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'ইমেইল',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'নাম',
          email: 'ইমেইল',
          message: 'বার্তা',
          success: 'বার্তা সফলভাবে পাঠানো হয়েছে!',
          failed: 'বার্তা পাঠাতে ব্যর্থ। অনুগ্রহ করে পুনরায় চেষ্টা করুন।',
        },
      },
      footer: {
        contact: 'যোগাযোগ',
        email: 'lucasgola@outlook.com',
        media: 'সামাজিক মিডিয়া',
        links: {
          title: 'দ্রুত লিঙ্ক',
          portfolio: 'পোর্টফোলিও',
          about: 'সম্পর্কে',
          contact: 'যোগাযোগ',
        },
        rights: '2025 Lucas Gola da Silva. সর্বস্বত্ব সংরক্ষিত।',
      },
    },
  },
  ja: {
    translation: {
      nav: {
        portfolio: 'ポートフォリオ',
        home: 'ホーム',
        about: '私について',
        career: 'キャリア',
        contact: '連絡先',
      },
      home: {
        greeting: 'こんにちは、私はルーカスです',
        role: 'フルスタック開発者 | UI/UXデザイナー',
        viewWork: '私の仕事を見る',
        services: {
          frontend: {
            title: 'フロントエンド開発',
            description: '美しく、レスポンシブなユーザーインターフェースを作成',
          },
          backend: {
            title: 'バックエンド開発',
            description: '堅牢なサーバーサイドアプリケーションの構築',
          },
          design: {
            title: 'UI/UXデザイン',
            description: '直感的なユーザー体験の作成',
          },
        },
      },
      about: {
        title: '私について',
        description:
          '私はデザインに敏感な目を持ち、シームレスなユーザー体験を作り出すことを愛する情熱的なフルスタック開発者です。ウェブ開発の豊富な経験を持ち、最新技術を駆使してモダンでレスポンシブなアプリケーションを構築することを専門としています。',
        hobbies: {
          title: '趣味と興味',
          music: {
            title: '音楽',
            description: 'ギターを弾いたり、新しいジャンルを発見したり',
          },
          games: {
            title: 'ゲーム',
            description: 'ゲームをプレイ',
          },
          watching: {
            title: '鑑賞',
            description: '映画を鑑賞',
          },
          programming: {
            title: 'プログラミング',
            description: 'プロジェクトを作成',
          },
        },
      },
      portfolio: {
        loading: 'リポジトリを読み込み中...',
        tokenError:
          'GitHubトークンが見つかりません。トークンを.envファイルに追加してください。',
        title: '私のGitHubプロジェクト',
        description: 'こちらは私の公開GitHubリポジトリです',
        filtersTitle: '言語でフィルター',
        clearFilters: 'フィルターをクリア',
        noResults: '選択された言語のリポジトリは見つかりませんでした。',
      },
      career: {
        profissional: [
          {
            title: 'ジュニアプロセスアナリスト',
            company: 'Guima Conseco',
            period: '2024 - 現在',
            description: 'Guima Conseco',
          },
          {
            title: 'コンピュータ技術者',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'トレイニー',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: 'ジュニアフルスタック開発者',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'ジュニアフルスタック開発者',
          },
        ],
        studies: [
          {
            degree: 'コンピュータ工学',
            school: 'Faculdade Impacta de Tecnologia',
            type: '学士号',
            period: '2021 - 2024',
            description: 'コンピュータ工学',
          },
          {
            degree: '管理技術者',
            school: 'ETEC Parque da Juventude',
            type: '技術学位',
            period: '2017 - 2019',
            description: '管理技術者',
          },
        ],
        certifications: [
          {
            name: 'AWS認定開発者',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'プロフェッショナルスクラムマスターI',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'React上級認定',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'お問い合わせ',
        description:
          'ご質問や一緒に仕事をしたい場合は、どうぞお気軽にお問い合わせください！',
        locationTitle: '所在地',
        location: 'サンパウロ - SP',
        phoneTitle: '電話番号',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'メール',
        email: 'lucasgola@outlook.com',
        forms: {
          name: '名前',
          email: 'メール',
          message: 'メッセージ',
          success: 'メッセージが正常に送信されました！',
          failed: 'メッセージの送信に失敗しました。もう一度お試しください。',
        },
      },
      footer: {
        contact: '連絡先',
        email: 'lucasgola@outlook.com',
        media: 'ソーシャルメディア',
        links: {
          title: 'クイックリンク',
          portfolio: 'ポートフォリオ',
          about: '私について',
          contact: '連絡先',
        },
        rights: '2025 Lucas Gola da Silva. 全著作権所有。',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        portfolio: 'Portfolio',
        home: 'Accueil',
        about: 'À propos',
        career: 'Carrière',
        contact: 'Contact',
      },
      home: {
        greeting: 'Bonjour, je suis Lucas',
        role: 'Développeur Full Stack | Designer UI/UX',
        viewWork: 'Voir mon travail',
        services: {
          frontend: {
            title: 'Développement Frontend',
            description:
              'Création d’interfaces utilisateur belles et réactives',
          },
          backend: {
            title: 'Développement Backend',
            description: 'Construction d’applications robustes côté serveur',
          },
          design: {
            title: 'Conception UI/UX',
            description: 'Création d’expériences utilisateur intuitives',
          },
        },
      },
      about: {
        title: 'À propos de moi',
        description:
          'Je suis un développeur Full Stack passionné, avec un œil attentif pour le design et une passion pour la création d’expériences utilisateur fluides. Avec plusieurs années d’expérience dans le développement web, je me spécialise dans la création d’applications modernes et réactives utilisant des technologies de pointe.',
        hobbies: {
          title: 'Loisirs et Intérêts',
          music: {
            title: 'Musique',
            description: 'Jouer de la guitare et découvrir de nouveaux genres',
          },
          games: {
            title: 'Jeux',
            description: 'Jouer à des jeux',
          },
          watching: {
            title: 'Regarder',
            description: 'Regarder des films',
          },
          programming: {
            title: 'Programmation',
            description: 'Créer des projets',
          },
        },
      },
      portfolio: {
        loading: 'Chargement des dépôts...',
        tokenError:
          'Jeton GitHub non trouvé. Veuillez ajouter votre jeton au fichier .env.',
        title: 'Mes projets GitHub',
        description: 'Voici mes dépôts publics de GitHub',
        filtersTitle: 'Filtrer par langue',
        clearFilters: 'Effacer les filtres',
        noResults: 'Aucun dépôt trouvé avec les langues sélectionnées.',
      },
      career: {
        profissional: [
          {
            title: 'Analyste de processus junior',
            company: 'Guima Conseco',
            period: '2024 - Présent',
            description: 'Guima Conseco',
          },
          {
            title: 'Technicien en informatique',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'Stagiaire',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: 'Développeur Full Stack junior',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'Développeur Full Stack junior',
          },
        ],
        studies: [
          {
            degree: 'Génie informatique',
            school: 'Faculdade Impacta de Tecnologia',
            type: 'Licence',
            period: '2021 - 2024',
            description: 'Génie informatique',
          },
          {
            degree: 'Technicien en administration',
            school: 'ETEC Parque da Juventude',
            type: 'Diplôme technique',
            period: '2017 - 2019',
            description: 'Technicien en administration',
          },
        ],
        certifications: [
          {
            name: 'Développeur certifié AWS',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'Scrum Master professionnel I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'Certification avancée React',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'Contactez-moi',
        description:
          'Vous avez une question ou voulez travailler ensemble? N’hésitez pas à me contacter!',
        locationTitle: 'Localisation',
        location: 'São Paulo - SP',
        phoneTitle: 'Téléphone',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'Email',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'Nom',
          email: 'Email',
          message: 'Message',
          success: 'Message envoyé avec succès!',
          failed: 'Échec de l’envoi du message. Veuillez réessayer.',
        },
      },
      footer: {
        contact: 'Contact',
        email: 'lucasgola@outlook.com',
        media: 'Réseaux sociaux',
        links: {
          title: 'Liens rapides',
          portfolio: 'Portfolio',
          about: 'À propos',
          contact: 'Contact',
        },
        rights: '2025 Lucas Gola da Silva. Tous droits réservés.',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
