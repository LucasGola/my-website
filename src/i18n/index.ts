import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        portfolio: "Portfolio",
        home: "Home",
        about: "About",
        career: "Career",
        contact: "Contact",
      },
      home: {
        greeting: "Hi, I'm Lucas",
        role: "Full Stack Developer | UI/UX Designer",
        viewWork: "View My Work",
        services: {
          frontend: {
            title: "Frontend Development",
            description: "Creating beautiful, responsive user interfaces",
          },
          backend: {
            title: "Backend Development",
            description: "Building robust server-side applications",
          },
          design: {
            title: "UI/UX Design",
            description: "Crafting intuitive user experiences",
          },
        },
      },
      about: {
        description:
          "I'm a passionate Full Stack Developer with a keen eye for design and a love for creating seamless user experiences. With several years of experience in web development, I specialize in building modern, responsive applications using cutting-edge technologies.",
        hobbies: {
          music: {
            title: "Musica",
            description: "Playing guitar and discovering new genres",
          },
          games: {
            title: "Games",
            description: "Playing games",
          },
          whatching: {
            title: "Whatching",
            description: "Watching films",
          },
        },
      },
      portfolio: {
        description: "Here are my public repositories from GitHub",
        filtersTitle: "Filter by Language",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "Junior Process Analyst",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "Present",
            description: "Guima Conseco",
          },
          rmts: {
            role: "Computer Technician",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "Trainee",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "Junior Full Stack Developer",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "Junior Full Stack Developer",
          },
        },
        studies: {
          impacta: {
            course: "Computer Engineering",
            university: "Faculdade Impacta de Tecnologia",
            type: "Bachelor's Degree",
            startDate: "2021",
            endDate: "2024",
            description: "Computer Engineering",
          },
          etec: {
            course: "Administration Technician",
            university: "ETEC Parque da Juventude",
            type: "Technical Degree",
            startDate: "2017",
            endDate: "2019",
            description: "Administration Technician",
          },
        },
        contact: {
          description:
            "Have a question or want to work together? Feel free to contact me!",
          locationTitle: "Location",
          location: "São Paulo - SP",
          phoneTitle: "Phone",
          phone: "+55 (11) 99448-5761",
          emailTitle: "Email",
          email: "lucasgola@outlook.com",
          forms: {
            name: "Name",
            email: "Email",
            message: "Message",
          },
        },
      },
      footer: {
        contact: "Contact",
        email: "lucasgola@outlook.com",
        media: "Social Media",
        link: {
          portfolio: "Portfolio",
          about: "About",
          contact: "Contact",
        },
        rights: "2025 Lucas Gola da Silva. All rights reserved.",
      },
    },
  },
  pt: {
    translation: {
      nav: {
        portfolio: "Portfólio",
        home: "Início",
        about: "Sobre",
        career: "Carreira",
        contact: "Contato",
      },
      home: {
        greeting: "Oi, eu sou Lucas",
        role: "Desenvolvedor Full Stack | Designer UI/UX",
        viewWork: "Veja Meu Trabalho",
        services: {
          frontend: {
            title: "Desenvolvimento Frontend",
            description: "Criando interfaces de usuário bonitas e responsivas",
          },
          backend: {
            title: "Desenvolvimento Backend",
            description: "Construindo aplicações robustas do lado do servidor",
          },
          design: {
            title: "Design UI/UX",
            description: "Criando experiências de usuário intuitivas",
          },
        },
      },
      about: {
        description:
          "Sou um desenvolvedor Full Stack apaixonado com um olho para o design e um amor por criar experiências de usuário perfeitas. Com vários anos de experiência em desenvolvimento web, especializo-me em construir aplicações modernas e responsivas usando tecnologias de ponta.",
        hobbies: {
          music: {
            title: "Música",
            description: "Tocando guitarra e descobrindo novos gêneros",
          },
          games: {
            title: "Jogos",
            description: "Jogando videogames",
          },
          watching: {
            title: "Assistir",
            description: "Assistindo filmes",
          },
        },
      },
      portfolio: {
        description: "Aqui estão meus repositórios públicos do GitHub",
        filtersTitle: "Filtrar por Linguagem",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "Analista de Processos Júnior",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "Presente",
            description: "Guima Conseco",
          },
          rmts: {
            role: "Técnico em Informática",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "Estagiário",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "Desenvolvedor Full Stack Júnior",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "Desenvolvedor Full Stack Júnior",
          },
        },
        studies: {
          impacta: {
            course: "Engenharia da Computação",
            university: "Faculdade Impacta de Tecnologia",
            type: "Bacharelado",
            startDate: "2021",
            endDate: "2024",
            description: "Engenharia da Computação",
          },
          etec: {
            course: "Técnico em Administração",
            university: "ETEC Parque da Juventude",
            type: "Técnico",
            startDate: "2017",
            endDate: "2019",
            description: "Técnico em Administração",
          },
        },
        contact: {
          description:
            "Tem alguma dúvida ou quer trabalhar junto? Fique à vontade para me contatar!",
          locationTitle: "Localização",
          location: "São Paulo - SP",
          phoneTitle: "Telefone",
          phone: "+55 (11) 99448-5761",
          emailTitle: "Email",
          email: "lucasgola@outlook.com",
          forms: {
            name: "Nome",
            email: "Email",
            message: "Mensagem",
          },
        },
      },
      footer: {
        contact: "Contato",
        email: "lucasgola@outlook.com",
        media: "Mídia Social",
        link: {
          portfolio: "Portfólio",
          about: "Sobre",
          contact: "Contato",
        },
        rights: "2025 Lucas Gola da Silva. Todos os direitos reservados.",
      },
    },
  },
  es: {
    translation: {
      nav: {
        portfolio: "Portafolio",
        home: "Inicio",
        about: "Acerca de",
        career: "Carrera",
        contact: "Contacto",
      },
      home: {
        greeting: "Hola, soy Lucas",
        role: "Desarrollador Full Stack | Diseñador UI/UX",
        viewWork: "Ver Mi Trabajo",
        services: {
          frontend: {
            title: "Desarrollo Frontend",
            description: "Creando interfaces de usuario hermosas y responsivas",
          },
          backend: {
            title: "Desarrollo Backend",
            description:
              "Construyendo aplicaciones robustas del lado del servidor",
          },
          design: {
            title: "Diseño UI/UX",
            description: "Creando experiencias de usuario intuitivas",
          },
        },
      },
      about: {
        description:
          "Soy un desarrollador Full Stack apasionado con buen ojo para el diseño y un amor por crear experiencias de usuario perfectas. Con varios años de experiencia en desarrollo web, me especializo en construir aplicaciones modernas y responsivas utilizando tecnologías de vanguardia.",
        hobbies: {
          music: {
            title: "Música",
            description: "Tocando guitarra y descubriendo nuevos géneros",
          },
          games: {
            title: "Juegos",
            description: "Jugando videojuegos",
          },
          watching: {
            title: "Viendo",
            description: "Viendo películas",
          },
        },
      },
      portfolio: {
        description: "Aquí están mis repositorios públicos de GitHub",
        filtersTitle: "Filtrar por Lenguaje",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "Analista de Procesos Junior",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "Presente",
            description: "Guima Conseco",
          },
          rmts: {
            role: "Técnico en Informática",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "Becario",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "Desarrollador Full Stack Junior",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "Desarrollador Full Stack Junior",
          },
        },
        studies: {
          impacta: {
            course: "Ingeniería Informática",
            university: "Faculdade Impacta de Tecnología",
            type: "Licenciatura",
            startDate: "2021",
            endDate: "2024",
            description: "Ingeniería Informática",
          },
          etec: {
            course: "Técnico en Administración",
            university: "ETEC Parque da Juventude",
            type: "Técnico",
            startDate: "2017",
            endDate: "2019",
            description: "Técnico en Administración",
          },
        },
        contact: {
          description:
            "¿Tienes alguna pregunta o quieres trabajar juntos? ¡No dudes en contactarme!",
          locationTitle: "Ubicación",
          location: "São Paulo - SP",
          phoneTitle: "Teléfono",
          phone: "+55 (11) 99448-5761",
          emailTitle: "Correo electrónico",
          email: "lucasgola@outlook.com",
          forms: {
            name: "Nombre",
            email: "Correo electrónico",
            message: "Mensaje",
          },
        },
      },
      footer: {
        contact: "Contacto",
        email: "lucasgola@outlook.com",
        media: "Redes Sociales",
        link: {
          portfolio: "Portafolio",
          about: "Acerca de",
          contact: "Contacto",
        },
        rights: "2025 Lucas Gola da Silva. Todos los derechos reservados.",
      },
    },
  },
  zh: {
    translation: {
      nav: {
        portfolio: "作品集",
        home: "首页",
        about: "关于",
        career: "职业",
        contact: "联系",
      },
      home: {
        greeting: "你好，我是卢卡斯",
        role: "全栈开发人员 | UI/UX 设计师",
        viewWork: "查看我的作品",
        services: {
          frontend: {
            title: "前端开发",
            description: "创建美观、响应式的用户界面",
          },
          backend: {
            title: "后端开发",
            description: "构建强大的服务器端应用",
          },
          design: {
            title: "UI/UX 设计",
            description: "打造直观的用户体验",
          },
        },
      },
      about: {
        description:
          "我是一名热情的全栈开发人员，擅长设计并喜欢创建无缝的用户体验。拥有多年的网页开发经验，我专注于使用尖端技术构建现代、响应式应用。",
        hobbies: {
          music: {
            title: "音乐",
            description: "弹吉他和发现新音乐类型",
          },
          games: {
            title: "游戏",
            description: "玩电子游戏",
          },
          watching: {
            title: "观看",
            description: "看电影",
          },
        },
      },
      portfolio: {
        description: "这里是我在 GitHub 上的公共仓库",
        filtersTitle: "按语言过滤",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "初级过程分析师",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "现在",
            description: "Guima Conseco",
          },
          rmts: {
            role: "计算机技术员",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "实习生",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "初级全栈开发人员",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "初级全栈开发人员",
          },
        },
        studies: {
          impacta: {
            course: "计算机工程",
            university: "Impacta 科技大学",
            type: "学士学位",
            startDate: "2021",
            endDate: "2024",
            description: "计算机工程",
          },
          etec: {
            course: "行政技术员",
            university: "ETEC 青年公园",
            type: "技术学位",
            startDate: "2017",
            endDate: "2019",
            description: "行政技术员",
          },
        },
        contact: {
          description: "有问题或想一起工作吗？欢迎随时联系我！",
          locationTitle: "位置",
          location: "圣保罗 - SP",
          phoneTitle: "电话",
          phone: "+55 (11) 99448-5761",
          emailTitle: "电子邮件",
          email: "lucasgola@outlook.com",
          forms: {
            name: "姓名",
            email: "电子邮件",
            message: "留言",
          },
        },
      },
      footer: {
        contact: "联系",
        email: "lucasgola@outlook.com",
        media: "社交媒体",
        link: {
          portfolio: "作品集",
          about: "关于",
          contact: "联系",
        },
        rights: "2025 Lucas Gola da Silva. 保留所有权利。",
      },
    },
  },
  hi: {
    translation: {
      nav: {
        portfolio: "पोर्टफोलियो",
        home: "होम",
        about: "परिचय",
        career: "करियर",
        contact: "संपर्क करें",
      },
      home: {
        greeting: "नमस्ते, मैं लुकास हूँ",
        role: "फुल स्टैक डेवलपर | UI/UX डिज़ाइनर",
        viewWork: "मेरा काम देखें",
        services: {
          frontend: {
            title: "फ्रंटएंड विकास",
            description: "सुनहरे और उत्तरदायी उपयोगकर्ता इंटरफ़ेस बनाना",
          },
          backend: {
            title: "बैकएंड विकास",
            description: "मजबूत सर्वर-साइड एप्लिकेशन बनाना",
          },
          design: {
            title: "UI/UX डिज़ाइन",
            description: "अंतर्ज्ञानी उपयोगकर्ता अनुभव तैयार करना",
          },
        },
      },
      about: {
        description:
          "मैं एक उत्साही फुल स्टैक डेवलपर हूँ, डिज़ाइन के लिए अच्छा दृष्टिकोण और निर्बाध उपयोगकर्ता अनुभव बनाने के लिए प्रेम हूँ। वेब विकास में कई वर्षों का अनुभव रखते हुए, मैं नवीनतम तकनीकों का उपयोग करके आधुनिक, उत्तरदायी एप्लिकेशन बनाने में विशेषज्ञता रखता हूँ।",
        hobbies: {
          music: {
            title: "संगीत",
            description: "गिटार बजाना और नई शैलियों की खोज करना",
          },
          games: {
            title: "खेल",
            description: "वीडियो गेम खेलना",
          },
          watching: {
            title: "देखना",
            description: "फिल्में देखना",
          },
        },
      },
      portfolio: {
        description: "यहाँ मेरे सार्वजनिक GitHub रिपॉजिटरीज़ हैं",
        filtersTitle: "भाषा द्वारा फ़िल्टर करें",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "जूनियर प्रोसेस एनालिस्ट",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "वर्तमान",
            description: "Guima Conseco",
          },
          rmts: {
            role: "कंप्यूटर तकनीशियन",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "प्रशिक्षु",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "जूनियर फुल स्टैक डेवलपर",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "जूनियर फुल स्टैक डेवलपर",
          },
        },
        studies: {
          impacta: {
            course: "कंप्यूटर इंजीनियरिंग",
            university: "फकल्टी इंफार्मेटिका द टेक्नोलॉजी",
            type: "स्नातक की डिग्री",
            startDate: "2021",
            endDate: "2024",
            description: "कंप्यूटर इंजीनियरिंग",
          },
          etec: {
            course: "प्रशासन तकनीशियन",
            university: "ETEC युवा पार्क",
            type: "तकनीकी डिग्री",
            startDate: "2017",
            endDate: "2019",
            description: "प्रशासन तकनीशियन",
          },
        },
        contact: {
          description:
            "कोई सवाल है या साथ में काम करना चाहते हैं? बेझिझक मुझसे संपर्क करें!",
          locationTitle: "स्थान",
          location: "साओ पाओलो - SP",
          phoneTitle: "फ़ोन",
          phone: "+55 (11) 99448-5761",
          emailTitle: "ईमेल",
          email: "lucasgola@outlook.com",
          forms: {
            name: "नाम",
            email: "ईमेल",
            message: "संदेश",
          },
        },
      },
      footer: {
        contact: "संपर्क करें",
        email: "lucasgola@outlook.com",
        media: "सोशल मीडिया",
        link: {
          portfolio: "पोर्टफोलियो",
          about: "परिचय",
          contact: "संपर्क करें",
        },
        rights: "2025 लुकास गोला दा सिल्वा। सर्वाधिकार सुरक्षित।",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        portfolio: "ملف",
        home: "الصفحة الرئيسية",
        about: "حول",
        career: "مهنة",
        contact: "اتصل",
      },
      home: {
        greeting: "مرحبًا، أنا لوكاس",
        role: "مطور Full Stack | مصمم UI/UX",
        viewWork: "عرض عملي",
        services: {
          frontend: {
            title: "تطوير الواجهة الأمامية",
            description: "إنشاء واجهات مستخدم جميلة ومتجاوبة",
          },
          backend: {
            title: "تطوير الواجهة الخلفية",
            description: "بناء تطبيقات قوية من جانب الخادم",
          },
          design: {
            title: "تصميم UI/UX",
            description: "تصميم تجارب مستخدم بديهية",
          },
        },
      },
      about: {
        description:
          "أنا مطور Full Stack شغوف ذو عين دقيقة للتصميم وحب لإنشاء تجارب مستخدم سلسة. مع عدة سنوات من الخبرة في تطوير الويب، أتخصص في بناء تطبيقات حديثة ومتجاوبة باستخدام أحدث التقنيات.",
        hobbies: {
          music: {
            title: "الموسيقى",
            description: "عزف الجيتار واكتشاف أنواع جديدة",
          },
          games: {
            title: "الألعاب",
            description: "لعب الألعاب",
          },
          watching: {
            title: "مشاهدة",
            description: "مشاهدة الأفلام",
          },
        },
      },
      portfolio: {
        description: "هنا مستودعاتي العامة على GitHub",
        filtersTitle: "تصفية حسب اللغة",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "محلل العمليات جونيور",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "الحاضر",
            description: "Guima Conseco",
          },
          rmts: {
            role: "فني كمبيوتر",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "متدرب",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "مطور Full Stack جونيور",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "مطور Full Stack جونيور",
          },
        },
        studies: {
          impacta: {
            course: "هندسة الحاسوب",
            university: "كلية إمباكتا للتكنولوجيا",
            type: "درجة البكالوريوس",
            startDate: "2021",
            endDate: "2024",
            description: "هندسة الحاسوب",
          },
          etec: {
            course: "فني إدارة",
            university: "ETEC منتزه الشباب",
            type: "درجة فنية",
            startDate: "2017",
            endDate: "2019",
            description: "فني إدارة",
          },
        },
        contact: {
          description:
            "هل لديك سؤال أو تريد العمل معًا؟ لا تتردد في الاتصال بي!",
          locationTitle: "الموقع",
          location: "ساو باولو - SP",
          phoneTitle: "الهاتف",
          phone: "+55 (11) 99448-5761",
          emailTitle: "البريد الإلكتروني",
          email: "lucasgola@outlook.com",
          forms: {
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "رسالة",
          },
        },
      },
      footer: {
        contact: "اتصل",
        email: "lucasgola@outlook.com",
        media: "وسائل التواصل الاجتماعي",
        link: {
          portfolio: "ملف",
          about: "حول",
          contact: "اتصل",
        },
        rights: "2025 لوكاس غولا دا سيلفا. جميع الحقوق محفوظة.",
      },
    },
  },
  bn: {
    translation: {
      nav: {
        portfolio: "পোর্টফোলিও",
        home: "হোম",
        about: "সম্পর্কিত",
        career: "ক্যারিয়ার",
        contact: "যোগাযোগ করুন",
      },
      home: {
        greeting: "হ্যালো, আমি লুকাস",
        role: "ফুল স্ট্যাক ডেভেলপার | UI/UX ডিজাইনার",
        viewWork: "আমার কাজ দেখুন",
        services: {
          frontend: {
            title: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
            description: "সুন্দর, প্রতিক্রিয়াশীল ব্যবহারকারী ইন্টারফেস তৈরি",
          },
          backend: {
            title: "ব্যাকএন্ড ডেভেলপমেন্ট",
            description: "শক্তিশালী সার্ভার-সাইড অ্যাপ্লিকেশন তৈরি",
          },
          design: {
            title: "UI/UX ডিজাইন",
            description: "ইউজার অভিজ্ঞতা তৈরি",
          },
        },
      },
      about: {
        description:
          "আমি একজন উত্সাহী ফুল স্ট্যাক ডেভেলপার, নকশার জন্য একটি প্রখর দৃষ্টি এবং নিখুঁত ব্যবহারকারী অভিজ্ঞতা তৈরি করার জন্য ভালবাসা সহ। ওয়েব ডেভেলপমেন্টের কয়েক বছরের অভিজ্ঞতা সহ, আমি আধুনিক, প্রতিক্রিয়াশীল অ্যাপ্লিকেশন তৈরি করতে অত্যাধুনিক প্রযুক্তি ব্যবহার করে বিশেষজ্ঞ।",
        hobbies: {
          music: {
            title: "সঙ্গীত",
            description: "গিটার বাজানো এবং নতুন জেনার আবিষ্কার করা",
          },
          games: {
            title: "গেমস",
            description: "গেমস খেলা",
          },
          watching: {
            title: "দেখা",
            description: "চলচ্চিত্র দেখা",
          },
        },
      },
      portfolio: {
        description: "এখানে আমার GitHub-এর পাবলিক রিপোজিটরি রয়েছে",
        filtersTitle: "ভাষা দ্বারা ফিল্টার করুন",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "জুনিয়র প্রসেস বিশ্লেষক",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "বর্তমান",
            description: "Guima Conseco",
          },
          rmts: {
            role: "কম্পিউটার প্রযুক্তিবিদ",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "ট্রেইনি",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "জুনিয়র ফুল স্ট্যাক ডেভেলপার",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "জুনিয়র ফুল স্ট্যাক ডেভেলপার",
          },
        },
        studies: {
          impacta: {
            course: "কম্পিউটার ইঞ্জিনিয়ারিং",
            university: "ইমপ্যাক্টা টেকনোলজি কলেজ",
            type: "ব্যাচেলর ডিগ্রী",
            startDate: "2021",
            endDate: "2024",
            description: "কম্পিউটার ইঞ্জিনিয়ারিং",
          },
          etec: {
            course: "প্রশাসন প্রযুক্তিবিদ",
            university: "ETEC যুব পার্ক",
            type: "প্রযুক্তিগত ডিগ্রী",
            startDate: "2017",
            endDate: "2019",
            description: "প্রশাসন প্রযুক্তিবিদ",
          },
        },
        contact: {
          description:
            "কোন প্রশ্ন আছে বা একসাথে কাজ করতে চান? নির্দ্বিধায় আমার সাথে যোগাযোগ করুন!",
          locationTitle: "অবস্থান",
          location: "সাও পাওলো - SP",
          phoneTitle: "ফোন",
          phone: "+55 (11) 99448-5761",
          emailTitle: "ইমেল",
          email: "lucasgola@outlook.com",
          forms: {
            name: "নাম",
            email: "ইমেল",
            message: "বার্তা",
          },
        },
      },
      footer: {
        contact: "যোগাযোগ করুন",
        email: "lucasgola@outlook.com",
        media: "সামাজিক মিডিয়া",
        link: {
          portfolio: "পোর্টফোলিও",
          about: "সম্পর্কিত",
          contact: "যোগাযোগ করুন",
        },
        rights: "2025 লুকাস গোলা দা সিলভা। সর্বাধিকার সংরক্ষিত।",
      },
    },
  },
  ja: {
    translation: {
      nav: {
        portfolio: "ポートフォリオ",
        home: "ホーム",
        about: "概要",
        career: "キャリア",
        contact: "連絡先",
      },
      home: {
        greeting: "こんにちは、私はルーカスです",
        role: "フルスタック開発者 | UI/UXデザイナー",
        viewWork: "私の仕事を見る",
        services: {
          frontend: {
            title: "フロントエンド開発",
            description: "美しく、レスポンシブなユーザーインターフェースの作成",
          },
          backend: {
            title: "バックエンド開発",
            description: "堅牢なサーバーサイドアプリケーションの構築",
          },
          design: {
            title: "UI/UXデザイン",
            description: "直感的なユーザーエクスペリエンスの作成",
          },
        },
      },
      about: {
        description:
          "私は、デザインにこだわり、シームレスなユーザーエクスペリエンスを作成することが好きな情熱的なフルスタック開発者です。ウェブ開発での数年の経験を持ち、最新技術を使用してモダンでレスポンシブなアプリケーションを構築することを専門としています。",
        hobbies: {
          music: {
            title: "音楽",
            description: "ギターを弾いて、新しいジャンルを発見する",
          },
          games: {
            title: "ゲーム",
            description: "ゲームをプレイする",
          },
          watching: {
            title: "視聴",
            description: "映画を観る",
          },
        },
      },
      portfolio: {
        description: "こちらが私のGitHubの公開リポジトリです",
        filtersTitle: "言語でフィルタリング",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "ジュニアプロセスアナリスト",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "現在",
            description: "Guima Conseco",
          },
          rmts: {
            role: "コンピュータ技術者",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "トレイニー",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "ジュニアフルスタック開発者",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "ジュニアフルスタック開発者",
          },
        },
        studies: {
          impacta: {
            course: "コンピュータ工学",
            university: "ファカルダードインパクタテクノロジー",
            type: "学士号",
            startDate: "2021",
            endDate: "2024",
            description: "コンピュータ工学",
          },
          etec: {
            course: "行政技術者",
            university: "ETECパルケダジュベントゥーデ",
            type: "技術学位",
            startDate: "2017",
            endDate: "2019",
            description: "行政技術者",
          },
        },
        contact: {
          description:
            "質問がある場合や一緒に働きたい場合は、遠慮なく連絡してください！",
          locationTitle: "場所",
          location: "サンパウロ - SP",
          phoneTitle: "電話",
          phone: "+55 (11) 99448-5761",
          emailTitle: "メール",
          email: "lucasgola@outlook.com",
          forms: {
            name: "名前",
            email: "メール",
            message: "メッセージ",
          },
        },
      },
      footer: {
        contact: "連絡先",
        email: "lucasgola@outlook.com",
        media: "ソーシャルメディア",
        link: {
          portfolio: "ポートフォリオ",
          about: "概要",
          contact: "連絡先",
        },
        rights: "2025 Lucas Gola da Silva. 全著作権所有。",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        portfolio: "Portfolio",
        home: "Accueil",
        about: "À propos",
        career: "Carrière",
        contact: "Contact",
      },
      home: {
        greeting: "Salut, je suis Lucas",
        role: "Développeur Full Stack | Designer UI/UX",
        viewWork: "Voir mon travail",
        services: {
          frontend: {
            title: "Développement Frontend",
            description: "Créer des interfaces utilisateur belles et réactives",
          },
          backend: {
            title: "Développement Backend",
            description: "Construire des applications robustes côté serveur",
          },
          design: {
            title: "Design UI/UX",
            description: "Concevoir des expériences utilisateur intuitives",
          },
        },
      },
      about: {
        description:
          "Je suis un développeur Full Stack passionné avec un œil pour le design et un amour pour créer des expériences utilisateur fluides. Avec plusieurs années d'expérience dans le développement web, je suis spécialisé dans la création d'applications modernes et réactives utilisant des technologies de pointe.",
        hobbies: {
          music: {
            title: "Musique",
            description: "Jouer de la guitare et découvrir de nouveaux genres",
          },
          games: {
            title: "Jeux",
            description: "Jouer à des jeux vidéo",
          },
          watching: {
            title: "Regarder",
            description: "Regarder des films",
          },
        },
      },
      portfolio: {
        description: "Voici mes dépôts publics sur GitHub",
        filtersTitle: "Filtrer par langue",
      },
      career: {
        profissional: {
          guimaConseco: {
            role: "Analyste de Processus Junior",
            company: "Guima Conseco",
            startDate: "2024",
            endDate: "Présent",
            description: "Guima Conseco",
          },
          rmts: {
            role: "Technicien en Informatique",
            company: "RMTS Informática",
            startDate: "2024",
            endDate: "2024",
            description: "RMTS Informática",
          },
          vivo: {
            role: "Stagiaire",
            company: "VIVO",
            startDate: "2022",
            endDate: "2023",
            description: "VIVO",
          },
          goAhead: {
            role: "Développeur Full Stack Junior",
            company: "Go Ahead",
            startDate: "2021",
            endDate: "2022",
            description: "Développeur Full Stack Junior",
          },
        },
        studies: {
          impacta: {
            course: "Génie Informatique",
            university: "Faculdade Impacta de Tecnologia",
            type: "Licence",
            startDate: "2021",
            endDate: "2024",
            description: "Génie Informatique",
          },
          etec: {
            course: "Technicien en Administration",
            university: "ETEC Parque da Juventude",
            type: "Diplôme Technique",
            startDate: "2017",
            endDate: "2019",
            description: "Technicien en Administration",
          },
        },
        contact: {
          description:
            "Vous avez une question ou vous voulez travailler ensemble ? N'hésitez pas à me contacter !",
          locationTitle: "Lieu",
          location: "São Paulo - SP",
          phoneTitle: "Téléphone",
          phone: "+55 (11) 99448-5761",
          emailTitle: "Email",
          email: "lucasgola@outlook.com",
          forms: {
            name: "Nom",
            email: "Email",
            message: "Message",
          },
        },
      },
      footer: {
        contact: "Contact",
        email: "lucasgola@outlook.com",
        media: "Réseaux Sociaux",
        link: {
          portfolio: "Portfolio",
          about: "À propos",
          contact: "Contact",
        },
        rights: "2025 Lucas Gola da Silva. Tous droits réservés.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
