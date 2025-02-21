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
        activities: 'What I Do',
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
          items: [
            {
              title: 'Musica',
              description: 'Playing guitar and discovering new genres',
              color: 'blue',
            },
            {
              title: 'Games',
              description: 'Playing games',
              color: 'purple',
            },
            {
              title: 'Whatching',
              description: 'Watching films',
              color: 'pink',
            },
            {
              title: 'Programing',
              description: 'Creating projects',
              color: 'amber',
            },
          ],
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
        greeting: 'Oi, eu sou o Lucas',
        role: 'Desenvolvedor Full Stack | Designer UI/UX',
        viewWork: 'Veja Meu Trabalho',
        activities: 'O Que Eu Faço',
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
          'Sou um desenvolvedor Full Stack apaixonado, com um olhar atento para design e um amor por criar experiências de usuário perfeitas. Com vários anos de experiência em desenvolvimento web, eu me especializo em construir aplicações modernas e responsivas usando tecnologias de ponta.',
        hobbies: {
          title: 'Hobbies e Interesses',
          items: [
            {
              title: 'Música',
              description: 'Tocando guitarra e descobrindo novos gêneros',
              color: 'blue',
            },
            {
              title: 'Jogos',
              description: 'Jogando videogames',
              color: 'purple',
            },
            {
              title: 'Assistir',
              description: 'Assistindo filmes',
              color: 'pink',
            },
            {
              title: 'Programar',
              description: 'Criando projetos',
              color: 'amber',
            },
          ],
        },
      },
      portfolio: {
        loading: 'Carregando repositórios...',
        tokenError:
          'Token do GitHub não encontrado. Por favor, adicione seu token no arquivo .env.',
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
            title: 'Técnico de Informática',
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
          'Tem alguma dúvida ou quer trabalhar junto? Sinta-se à vontade para me contatar!',
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
          failed: 'Falha ao enviar a mensagem. Por favor, tente novamente.',
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
        activities: 'Lo Que Hago',
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
          'Soy un Desarrollador Full Stack apasionado, con un ojo atento para el diseño y un amor por crear experiencias de usuario perfectas. Con varios años de experiencia en desarrollo web, me especializo en construir aplicaciones modernas y responsivas utilizando tecnologías de punta.',
        hobbies: {
          title: 'Aficiones e Intereses',
          items: [
            {
              title: 'Música',
              description: 'Tocando guitarra y descubriendo nuevos géneros',
              color: 'blue',
            },
            {
              title: 'Juegos',
              description: 'Jugando videojuegos',
              color: 'purple',
            },
            {
              title: 'Ver',
              description: 'Viendo películas',
              color: 'pink',
            },
            {
              title: 'Programar',
              description: 'Creando proyectos',
              color: 'amber',
            },
          ],
        },
      },
      portfolio: {
        loading: 'Cargando repositorios...',
        tokenError:
          'Token de GitHub no encontrado. Por favor, agregue su token en el archivo .env.',
        title: 'Mis Proyectos en GitHub',
        description: 'Aquí están mis repositorios públicos de GitHub',
        filtersTitle: 'Filtrar por Idioma',
        clearFilters: 'Limpiar Filtros',
        noResults:
          'No se encontraron repositorios con los idiomas seleccionados.',
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
            title: 'Técnico de Informática',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'Becario',
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
            type: 'Grado en Ingeniería',
            period: '2021 - 2024',
            description: 'Ingeniería Informática',
          },
          {
            degree: 'Técnico en Administración',
            school: 'ETEC Parque da Juventude',
            type: 'Grado Técnico',
            period: '2017 - 2019',
            description: 'Técnico en Administración',
          },
        ],
        certifications: [
          {
            name: 'Desarrollador Certificado de AWS',
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
        emailTitle: 'Correo Electrónico',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'Nombre',
          email: 'Correo Electrónico',
          message: 'Mensaje',
          success: '¡Mensaje enviado con éxito!',
          failed:
            'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.',
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
        greeting: '你好，我是Lucas',
        role: '全栈开发者 | UI/UX设计师',
        viewWork: '查看我的工作',
        activities: '我做什么',
        services: {
          frontend: {
            title: '前端开发',
            description: '创建美丽、响应迅速的用户界面',
          },
          backend: {
            title: '后端开发',
            description: '构建强大的服务器端应用程序',
          },
          design: {
            title: 'UI/UX设计',
            description: '设计直观的用户体验',
          },
        },
      },
      about: {
        title: '关于我',
        description:
          '我是一名充满激情的全栈开发者，对设计有敏锐的洞察力，热爱创造无缝的用户体验。拥有多年的Web开发经验，擅长使用尖端技术构建现代、响应迅速的应用程序。',
        hobbies: {
          title: '爱好和兴趣',
          items: [
            {
              title: '音乐',
              description: '弹吉他和发现新的音乐流派',
              color: 'blue',
            },
            {
              title: '游戏',
              description: '玩电子游戏',
              color: 'purple',
            },
            {
              title: '观看',
              description: '看电影',
              color: 'pink',
            },
            {
              title: '编程',
              description: '创建项目',
              color: 'amber',
            },
          ],
        },
      },
      portfolio: {
        loading: '加载存储库...',
        tokenError: '找不到GitHub令牌。请将您的令牌添加到.env文件中。',
        title: '我的GitHub项目',
        description: '这是我的GitHub公共存储库',
        filtersTitle: '按语言过滤',
        clearFilters: '清除过滤器',
        noResults: '未找到具有选定语言的存储库。',
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
            degree: '管理技术员',
            school: 'ETEC Parque da Juventude',
            type: '技术学位',
            period: '2017 - 2019',
            description: '管理技术员',
          },
        ],
        certifications: [
          {
            name: 'AWS认证开发者',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: '专业Scrum Master I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'React高级认证',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: '取得联系',
        description: '有问题或想合作吗？随时与我联系！',
        locationTitle: '地点',
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
          failed: '消息发送失败。请再试一次。',
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
        home: 'मुख्य पृष्ठ',
        about: 'मेरे बारे में',
        career: 'करियर',
        contact: 'संपर्क करें',
      },
      home: {
        greeting: 'नमस्ते, मैं लुकास हूँ',
        role: 'पूर्ण स्टैक डेवलपर | यूआई/यूएक्स डिज़ाइनर',
        viewWork: 'मेरा कार्य देखें',
        activities: 'मैं क्या करता हूं',
        services: {
          frontend: {
            title: 'फ्रंटेंड डेवलपमेंट',
            description: 'सुंदर, उत्तरदायी यूजर इंटरफेस बनाना',
          },
          backend: {
            title: 'बैकएंड डेवलपमेंट',
            description: 'मजबूत सर्वर-साइड अनुप्रयोग बनाना',
          },
          design: {
            title: 'यूआई/यूएक्स डिज़ाइन',
            description: 'सीमलेस यूजर अनुभव तैयार करना',
          },
        },
      },
      about: {
        title: 'मेरे बारे में',
        description:
          'मैं एक जुनूनी पूर्ण स्टैक डेवलपर हूं, जो डिज़ाइन के लिए एक गहरी नजर रखता है और निर्बाध उपयोगकर्ता अनुभव बनाने के लिए प्यार करता है। कई वर्षों के वेब विकास के अनुभव के साथ, मैं आधुनिक, उत्तरदायी अनुप्रयोग बनाने में माहिर हूं जो नवीनतम तकनीकों का उपयोग करते हैं।',
        hobbies: {
          title: 'शौक और रुचियां',
          items: [
            {
              title: 'संगीत',
              description: 'गिटार बजाना और नए शैलियों की खोज करना',
              color: 'blue',
            },
            {
              title: 'खेल',
              description: 'वीडियो गेम खेलना',
              color: 'purple',
            },
            {
              title: 'देखना',
              description: 'फिल्में देखना',
              color: 'pink',
            },
            {
              title: 'प्रोग्रामिंग',
              description: 'प्रोजेक्ट बनाना',
              color: 'amber',
            },
          ],
        },
      },
      portfolio: {
        loading: 'भंडार लोड हो रहे हैं...',
        tokenError:
          'GitHub टोकन नहीं मिला। कृपया अपना टोकन .env फ़ाइल में जोड़ें।',
        title: 'मेरे GitHub प्रोजेक्ट्स',
        description: 'यहाँ मेरे सार्वजनिक GitHub भंडार हैं',
        filtersTitle: 'भाषा के अनुसार फ़िल्टर करें',
        clearFilters: 'फ़िल्टर साफ़ करें',
        noResults: 'चयनित भाषाओं के साथ कोई भंडार नहीं मिला।',
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
            title: 'जूनियर पूर्ण स्टैक डेवलपर',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: 'जूनियर पूर्ण स्टैक डेवलपर',
          },
        ],
        studies: [
          {
            degree: 'कंप्यूटर इंजीनियरिंग',
            school: 'Faculdade Impacta de Tecnologia',
            type: 'स्नातक की डिग्री',
            period: '2021 - 2024',
            description: 'कंप्यूटर इंजीनियरिंग',
          },
          {
            degree: 'प्रशासन तकनीशियन',
            school: 'ETEC Parque da Juventude',
            type: 'तकनीकी डिग्री',
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
            name: 'पेशेवर स्क्रम मास्टर I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'React एडवांस्ड प्रमाणपत्र',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'संपर्क करें',
        description:
          'कोई प्रश्न है या साथ काम करना चाहते हैं? मुझसे संपर्क करने में संकोच न करें!',
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
        contact: 'संपर्क करें',
        email: 'lucasgola@outlook.com',
        media: 'सोशल मीडिया',
        links: {
          title: 'त्वरित लिंक',
          portfolio: 'पोर्टफोलियो',
          about: 'मेरे बारे में',
          contact: 'संपर्क करें',
        },
        rights: '2025 लुकास गोला दा सिल्वा। सर्वाधिकार सुरक्षित।',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        portfolio: 'ملف الأعمال',
        home: 'الصفحة الرئيسية',
        about: 'معلومات عني',
        career: 'المسيرة المهنية',
        contact: 'التواصل',
      },
      home: {
        greeting: 'مرحباً، أنا لوكاس',
        role: 'مطور متكامل | مصمم واجهة المستخدم وتجربة المستخدم',
        viewWork: 'عرض أعمالي',
        activities: 'ما أقوم به',
        services: {
          frontend: {
            title: 'تطوير الواجهة الأمامية',
            description: 'إنشاء واجهات مستخدم جميلة ومتجاوبة',
          },
          backend: {
            title: 'تطوير الواجهة الخلفية',
            description: 'بناء تطبيقات قوية من جانب الخادم',
          },
          design: {
            title: 'تصميم واجهة المستخدم وتجربة المستخدم',
            description: 'تصميم تجارب مستخدم بديهية',
          },
        },
      },
      about: {
        title: 'معلومات عني',
        description:
          'أنا مطور متكامل شغوف ذو عين ثاقبة للتصميم وحب لخلق تجارب مستخدم سلسة. مع عدة سنوات من الخبرة في تطوير الويب، أتخصص في بناء تطبيقات حديثة ومتجاوبة باستخدام تقنيات متطورة.',
        hobbies: {
          title: 'الهوايات والاهتمامات',
          items: [
            {
              title: 'الموسيقى',
              description: 'عزف الغيتار واكتشاف أنواع جديدة',
              color: 'أزرق',
            },
            {
              title: 'الألعاب',
              description: 'لعب الألعاب',
              color: 'أرجواني',
            },
            {
              title: 'المشاهدة',
              description: 'مشاهدة الأفلام',
              color: 'وردي',
            },
            {
              title: 'البرمجة',
              description: 'إنشاء المشاريع',
              color: 'كهرماني',
            },
          ],
        },
      },
      portfolio: {
        loading: 'جاري تحميل المستودعات...',
        tokenError: 'رمز GitHub غير موجود. يرجى إضافة الرمز إلى ملف .env.',
        title: 'مشاريعي على GitHub',
        description: 'إليك مستودعاتي العامة من GitHub',
        filtersTitle: 'تصفية حسب اللغة',
        clearFilters: 'مسح التصفية',
        noResults: 'لم يتم العثور على مستودعات باللغات المحددة.',
      },
      career: {
        profissional: [
          {
            title: 'محلل عمليات مبتدئ',
            company: 'Guima Conseco',
            period: '2024 - إلى الآن',
            description: 'Guima Conseco',
          },
          {
            title: 'فني حاسوب',
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
            degree: 'فني الإدارة',
            school: 'ETEC Parque da Juventude',
            type: 'درجة فنية',
            period: '2017 - 2019',
            description: 'فني الإدارة',
          },
        ],
        certifications: [
          {
            name: 'مطور معتمد من AWS',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: 'مدير سكروم محترف I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'شهادة React المتقدمة',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'تواصل معي',
        description:
          'هل لديك سؤال أو ترغب في العمل معاً؟ لا تتردد في التواصل معي!',
        locationTitle: 'الموقع',
        location: 'ساو باولو - SP',
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
        contact: 'التواصل',
        email: 'lucasgola@outlook.com',
        media: 'وسائل التواصل الاجتماعي',
        links: {
          title: 'روابط سريعة',
          portfolio: 'ملف الأعمال',
          about: 'معلومات عني',
          contact: 'التواصل',
        },
        rights: '2025 لوكاس غولا دا سيلفا. جميع الحقوق محفوظة.',
      },
    },
  },
  bn: {
    translation: {
      nav: {
        portfolio: 'পোর্টফোলিও',
        home: 'প্রধান পাতা',
        about: 'আমাদের সম্পর্কে',
        career: 'পেশা',
        contact: 'যোগাযোগ',
      },
      home: {
        greeting: 'হাই, আমি লুকাস',
        role: 'ফুল স্ট্যাক ডেভেলপার | ইউআই/ইউএক্স ডিজাইনার',
        viewWork: 'আমার কাজ দেখুন',
        activities: 'আমি কি করি',
        services: {
          frontend: {
            title: 'ফ্রন্টএন্ড ডেভেলপমেন্ট',
            description: 'সুন্দর, প্রতিক্রিয়াশীল ইউজার ইন্টারফেস তৈরি করা',
          },
          backend: {
            title: 'ব্যাকএন্ড ডেভেলপমেন্ট',
            description: 'শক্তিশালী সার্ভার-সাইড অ্যাপ্লিকেশন নির্মাণ',
          },
          design: {
            title: 'ইউআই/ইউএক্স ডিজাইন',
            description: 'ইউজার ইন্টারফেস ও এক্সপিরিয়েন্স ডিজাইন করা',
          },
        },
      },
      about: {
        title: 'আমাদের সম্পর্কে',
        description:
          'আমি একজন উৎসাহী ফুল স্ট্যাক ডেভেলপার, যিনি ডিজাইনের জন্য একটি তীক্ষ্ণ দৃষ্টি এবং সুস্বাদু ইউজার এক্সপিরিয়েন্স তৈরির ভালোবাসা রয়েছে। ওয়েব ডেভেলপমেন্টে কয়েক বছরের অভিজ্ঞতা নিয়ে, আমি আধুনিক, প্রতিক্রিয়াশীল অ্যাপ্লিকেশন তৈরি করতে বিশেষজ্ঞ, যা কাটিং-এজ প্রযুক্তি ব্যবহার করে।',
        hobbies: {
          title: 'শখ ও আগ্রহ',
          items: [
            {
              title: 'সঙ্গীত',
              description: 'গিটার বাজানো এবং নতুন প্রকার আবিষ্কার করা',
              color: 'নীল',
            },
            {
              title: 'গেমস',
              description: 'গেম খেলা',
              color: 'বেগুনি',
            },
            {
              title: 'দেখা',
              description: 'ফিল্ম দেখা',
              color: 'গোলাপি',
            },
            {
              title: 'প্রোগ্রামিং',
              description: 'প্রকল্প তৈরি করা',
              color: 'ক্যাম্বার',
            },
          ],
        },
      },
      portfolio: {
        loading: 'রিপোজিটরিজ লোড হচ্ছে...',
        tokenError:
          'GitHub টোকেন পাওয়া যায়নি। দয়া করে আপনার টোকেন .env ফাইলে যোগ করুন।',
        title: 'আমার GitHub প্রকল্প',
        description: 'এখানে আমার পাবলিক রিপোজিটরিজ রয়েছে',
        filtersTitle: 'ভাষা অনুসারে ফিল্টার করুন',
        clearFilters: 'ফিল্টার মুছে ফেলুন',
        noResults: 'নির্বাচিত ভাষায় কোনো রিপোজিটরি পাওয়া যায়নি।',
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
            title: 'প্রশিক্ষণার্থী',
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
            degree: 'প্রশাসনিক টেকনিশিয়ান',
            school: 'ETEC Parque da Juventude',
            type: 'টেকনিক্যাল ডিগ্রি',
            period: '2017 - 2019',
            description: 'প্রশাসনিক টেকনিশিয়ান',
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
            name: 'React অ্যাডভান্সড সার্টিফিকেশন',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'যোগাযোগ করুন',
        description:
          'আপনার যদি কোনো প্রশ্ন থাকে বা একসাথে কাজ করতে চান? বিনা দ্বিধায় আমার সাথে যোগাযোগ করুন!',
        locationTitle: 'অবস্থান',
        location: 'সাও পাওলো - SP',
        phoneTitle: 'ফোন',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'ইমেইল',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'নাম',
          email: 'ইমেইল',
          message: 'বার্তা',
          success: 'বার্তা সফলভাবে পাঠানো হয়েছে!',
          failed: 'বার্তা পাঠাতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
        },
      },
      footer: {
        contact: 'যোগাযোগ',
        email: 'lucasgola@outlook.com',
        media: 'সামাজিক মিডিয়া',
        links: {
          title: 'দ্রুত লিঙ্ক',
          portfolio: 'পোর্টফোলিও',
          about: 'আমাদের সম্পর্কে',
          contact: 'যোগাযোগ',
        },
        rights: '2025 লুকাস গোলা দা সিলভা. সর্বস্বত্ব সংরক্ষিত।',
      },
    },
  },
  ja: {
    translation: {
      nav: {
        portfolio: 'ポートフォリオ',
        home: 'ホーム',
        about: '自己紹介',
        career: 'キャリア',
        contact: 'コンタクト',
      },
      home: {
        greeting: 'こんにちは、ルーカスです',
        role: 'フルスタック開発者 | UI/UXデザイナー',
        viewWork: '私の作品を見る',
        activities: '私がやること',
        services: {
          frontend: {
            title: 'フロントエンド開発',
            description:
              '美しく、レスポンシブなユーザーインターフェースを作成する',
          },
          backend: {
            title: 'バックエンド開発',
            description: '堅牢なサーバーサイドアプリケーションを構築する',
          },
          design: {
            title: 'UI/UXデザイン',
            description: '直感的なユーザー体験を設計する',
          },
        },
      },
      about: {
        title: '自己紹介',
        description:
          '私はデザインに鋭い目を持ち、シームレスなユーザー体験を作成することが大好きな熱心なフルスタック開発者です。ウェブ開発の数年間の経験を持ち、最先端の技術を使用してモダンでレスポンシブなアプリケーションを構築することを専門としています。',
        hobbies: {
          title: '趣味と興味',
          items: [
            {
              title: '音楽',
              description: 'ギターを弾いたり、新しいジャンルを発見すること',
              color: '青',
            },
            {
              title: 'ゲーム',
              description: 'ゲームをすること',
              color: '紫',
            },
            {
              title: '見ること',
              description: '映画を見ること',
              color: 'ピンク',
            },
            {
              title: 'プログラミング',
              description: 'プロジェクトを作成すること',
              color: 'アンバー',
            },
          ],
        },
      },
      portfolio: {
        loading: 'リポジトリを読み込んでいます...',
        tokenError:
          'GitHubトークンが見つかりません。トークンを.envファイルに追加してください。',
        title: '私のGitHubプロジェクト',
        description: 'こちらが私の公開リポジトリです',
        filtersTitle: '言語でフィルター',
        clearFilters: 'フィルターをクリア',
        noResults: '選択された言語のリポジトリが見つかりませんでした。',
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
            title: 'コンピュータテクニシャン',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: 'インターン',
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
            type: '技術者',
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
          '質問がある場合や一緒に仕事をしたい場合は、気軽に連絡してください!',
        locationTitle: '場所',
        location: 'サンパウロ - SP',
        phoneTitle: '電話',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'メール',
        email: 'lucasgola@outlook.com',
        forms: {
          name: '名前',
          email: 'メール',
          message: 'メッセージ',
          success: 'メッセージが正常に送信されました！',
          failed: 'メッセージの送信に失敗しました。再試行してください。',
        },
      },
      footer: {
        contact: 'コンタクト',
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
        greeting: 'Salut, je suis Lucas',
        role: 'Développeur Full Stack | Designer UI/UX',
        viewWork: 'Voir Mon Travail',
        activities: 'Ce que je fais',
        services: {
          frontend: {
            title: 'Développement Frontend',
            description: 'Création de belles interfaces utilisateur réactives',
          },
          backend: {
            title: 'Développement Backend',
            description: "Création d'applications robustes côté serveur",
          },
          design: {
            title: 'Conception UI/UX',
            description: "Création d'expériences utilisateur intuitives",
          },
        },
      },
      about: {
        title: 'À propos de moi',
        description:
          "Je suis un développeur Full Stack passionné avec un œil attentif pour le design et un amour pour créer des expériences utilisateur fluides. Avec plusieurs années d'expérience en développement web, je me spécialise dans la création d'applications modernes et réactives en utilisant des technologies de pointe.",
        hobbies: {
          title: 'Loisirs et intérêts',
          items: [
            {
              title: 'Musique',
              description:
                'Jouer de la guitare et découvrir de nouveaux genres',
              color: 'bleu',
            },
            {
              title: 'Jeux',
              description: 'Jouer à des jeux',
              color: 'violet',
            },
            {
              title: 'Regarder',
              description: 'Regarder des films',
              color: 'rose',
            },
            {
              title: 'Programmation',
              description: 'Créer des projets',
              color: 'ambre',
            },
          ],
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
            title: 'Technicien informatique',
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
            name: 'Professional Scrum Master I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'Certification avancée en React',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: 'Contactez-moi',
        description:
          "Vous avez une question ou souhaitez collaborer ? N'hésitez pas à me contacter !",
        locationTitle: 'Emplacement',
        location: 'São Paulo - SP',
        phoneTitle: 'Téléphone',
        phone: '+55 (11) 99448-5761',
        emailTitle: 'Email',
        email: 'lucasgola@outlook.com',
        forms: {
          name: 'Nom',
          email: 'Email',
          message: 'Message',
          success: 'Message envoyé avec succès !',
          failed: "Échec de l'envoi du message. Veuillez réessayer.",
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
  kr: {
    translation: {
      nav: {
        portfolio: '포트폴리오',
        home: '홈',
        about: '소개',
        career: '경력',
        contact: '연락처',
      },
      home: {
        greeting: '안녕하세요, 저는 루카스입니다',
        role: '풀 스택 개발자 | UI/UX 디자이너',
        viewWork: '내 작업 보기',
        activities: '내가 하는 일',
        services: {
          frontend: {
            title: '프론트엔드 개발',
            description: '아름답고 반응형 사용자 인터페이스 만들기',
          },
          backend: {
            title: '백엔드 개발',
            description: '강력한 서버 측 애플리케이션 구축',
          },
          design: {
            title: 'UI/UX 디자인',
            description: '직관적인 사용자 경험 설계',
          },
        },
      },
      about: {
        title: '소개',
        description:
          '저는 디자인에 민감하고 원활한 사용자 경험을 만들기를 좋아하는 열정적인 풀 스택 개발자입니다. 웹 개발에서 몇 년의 경험을 바탕으로, 최첨단 기술을 사용하여 현대적이고 반응형 애플리케이션을 구축하는 데 전문성을 가지고 있습니다.',
        hobbies: {
          title: '취미 및 관심사',
          items: [
            {
              title: '음악',
              description: '기타 연주 및 새로운 장르 발견',
              color: '파랑',
            },
            {
              title: '게임',
              description: '게임하기',
              color: '보라색',
            },
            {
              title: '감상하기',
              description: '영화 보기',
              color: '분홍색',
            },
            {
              title: '프로그래밍',
              description: '프로젝트 만들기',
              color: '호박색',
            },
          ],
        },
      },
      portfolio: {
        loading: '리포지토리를 로드 중...',
        tokenError:
          'GitHub 토큰을 찾을 수 없습니다. 토큰을 .env 파일에 추가해주세요.',
        title: '내 GitHub 프로젝트',
        description: '여기 내 공개 GitHub 리포지토리가 있습니다',
        filtersTitle: '언어별 필터',
        clearFilters: '필터 지우기',
        noResults: '선택한 언어로 리포지토리를 찾을 수 없습니다.',
      },
      career: {
        profissional: [
          {
            title: '주니어 프로세스 분석가',
            company: 'Guima Conseco',
            period: '2024 - 현재',
            description: 'Guima Conseco',
          },
          {
            title: '컴퓨터 기술자',
            company: 'RMTS Informática',
            period: '2024 - 2024',
            description: 'RMTS Informática',
          },
          {
            title: '인턴',
            company: 'VIVO',
            period: '2022 - 2023',
            description: 'VIVO',
          },
          {
            title: '주니어 풀 스택 개발자',
            company: 'Go Ahead',
            period: '2021 - 2022',
            description: '주니어 풀 스택 개발자',
          },
        ],
        studies: [
          {
            degree: '컴퓨터 공학',
            school: 'Faculdade Impacta de Tecnologia',
            type: '학사 학위',
            period: '2021 - 2024',
            description: '컴퓨터 공학',
          },
          {
            degree: '행정 기술자',
            school: 'ETEC Parque da Juventude',
            type: '기술 학위',
            period: '2017 - 2019',
            description: '행정 기술자',
          },
        ],
        certifications: [
          {
            name: 'AWS 인증 개발자',
            issuer: 'Amazon Web Services',
            year: '2022',
          },
          {
            name: '프로페셔널 스크럼 마스터 I',
            issuer: 'Scrum.org',
            year: '2021',
          },
          {
            name: 'React 고급 인증서',
            issuer: 'Meta',
            year: '2020',
          },
        ],
      },
      contact: {
        title: '연락하기',
        description:
          '질문이 있거나 함께 일하고 싶으신가요? 언제든지 연락 주세요!',
        locationTitle: '위치',
        location: '상파울루 - SP',
        phoneTitle: '전화',
        phone: '+55 (11) 99448-5761',
        emailTitle: '이메일',
        email: 'lucasgola@outlook.com',
        forms: {
          name: '이름',
          email: '이메일',
          message: '메시지',
          success: '메시지가 성공적으로 전송되었습니다!',
          failed: '메시지 전송 실패. 다시 시도해주세요.',
        },
      },
      footer: {
        contact: '연락처',
        email: 'lucasgola@outlook.com',
        media: '소셜 미디어',
        links: {
          title: '빠른 링크',
          portfolio: '포트폴리오',
          about: '소개',
          contact: '연락처',
        },
        rights: '2025 Lucas Gola da Silva. All rights reserved.',
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
