import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

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
        activities: "What I Do",
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
        title: "About Me",
        description:
          "I'm Lucas Gola da Silva, a dedicated Full Stack Developer with a flair for both front-end and back-end development. I thrive on new technological adventures. My goal is to create seamless user experiences through modern, responsive applications built with cutting-edge technologies.\nI am extremely focused and committed to my work, always striving to achieve my objectives with determination. I have a forward-thinking approach, constantly seeking ways to improve efficiency and outcomes through innovative methods. My organizational skills enable me to optimize my time effectively.\nI excel in team settings, valuing diverse opinions and open discussions. I firmly believe that “two heads are better than one” and work well with others to achieve the best results. I embrace all perspectives and remain open to new ideas.",
        hobbies: {
          title: "Hobbies & Interests",
          items: [
            {
              title: "Musica",
              description: "I'm almost always listening to music",
              color: "blue",
            },
            {
              title: "Games",
              description:
                "I really like playing games, especially strategy and RPG games.",
              color: "purple",
            },
            {
              title: "Whatching",
              description: "I like watching films, series and animations.",
              color: "pink",
            },
            {
              title: "Programing",
              description:
                "I often find myself thinking about projects to improve my daily tasks.",
              color: "amber",
            },
          ],
        },
      },
      portfolio: {
        loading: "Loading repositories...",
        tokenError:
          "GitHub token not found. Please add your token to the .env file.",
        title: "My GitHub Projects",
        description: "Here are my public repositories from GitHub",
        filtersTitle: "Filter by Language",
        clearFilters: "Clear Filters",
        noResults: "No repositories found with the selected languages.",
      },
      career: {
        profissional: [
          {
            title: "Junior Process Analyst",
            company: "Guima Conseco",
            period: "2024 - Present",
            description: "Guima Conseco",
          },
          {
            title: "Computer Technician",
            company: "RMTS Informática",
            period: "2024 - 2024",
            description: "RMTS Informática",
          },
          {
            title: "Trainee",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "Junior Full Stack Developer",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "Junior Full Stack Developer",
          },
        ],
        studies: [
          {
            degree: "Computer Engineering",
            school: "Faculdade Impacta de Tecnologia",
            type: "Bachelor's Degree",
            period: "2021 - 2024",
            description: "Computer Engineering",
          },
          {
            degree: "Administration Technician",
            school: "ETEC Parque da Juventude",
            type: "Technical Degree",
            period: "2017 - 2019",
            description: "Administration Technician",
          },
        ],
        certifications: [
          {
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            year: "2022",
          },
          {
            name: "Professional Scrum Master I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "React Advanced Certification",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "Get in Touch",
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
          success: "Message sent successfully!",
          failed: "Failed to send message. Please try again.",
        },
      },
      footer: {
        contact: "Contact",
        email: "lucasgola@outlook.com",
        media: "Social Media",
        links: {
          title: "Quick Links",
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
        viewWork: "Ver Meu Trabalho",
        activities: "O Que Eu Faço",
        services: {
          frontend: {
            title: "Desenvolvimento Frontend",
            description: "Criando interfaces de usuário bonitas e responsivas",
          },
          backend: {
            title: "Desenvolvimento Backend",
            description: "Construindo aplicações robustas no lado do servidor",
          },
          design: {
            title: "Design UI/UX",
            description: "Criando experiências de usuário intuitivas",
          },
        },
      },
      about: {
        title: "Sobre Mim",
        description:
          "Sou Lucas Gola da Silva, um Desenvolvedor Full Stack dedicado com um talento para desenvolvimento front-end e back-end. Eu prospero em novas aventuras tecnológicas. Meu objetivo é criar experiências de usuário perfeitas através de aplicações modernas e responsivas, construídas com tecnologias de ponta.\nSou extremamente focado e comprometido com meu trabalho, sempre buscando atingir meus objetivos com determinação. Tenho uma abordagem voltada para o futuro, constantemente buscando maneiras de melhorar a eficiência e os resultados através de métodos inovadores. Minhas habilidades organizacionais me permitem otimizar meu tempo de forma eficaz.\nEu me destaco em ambientes de equipe, valorizando opiniões diversas e discussões abertas. Eu acredito firmemente que “duas cabeças pensam melhor do que uma” e trabalho bem com os outros para alcançar os melhores resultados. Eu abraço todas as perspectivas e permaneço aberto a novas ideias.",
        hobbies: {
          title: "Hobbies e Interesses",
          items: [
            {
              title: "Música",
              description: "Estou quase sempre ouvindo música",
              color: "azul",
            },
            {
              title: "Jogos",
              description:
                "Eu gosto muito de jogar, especialmente jogos de estratégia e RPG.",
              color: "roxo",
            },
            {
              title: "Assistir",
              description: "Eu gosto de assistir filmes, séries e animações.",
              color: "rosa",
            },
            {
              title: "Programar",
              description:
                "Frequentemente me pego pensando em projetos para melhorar minhas tarefas diárias.",
              color: "âmbar",
            },
          ],
        },
      },
      portfolio: {
        loading: "Carregando repositórios...",
        tokenError:
          "Token do GitHub não encontrado. Por favor, adicione seu token ao arquivo .env.",
        title: "Meus Projetos no GitHub",
        description: "Aqui estão meus repositórios públicos do GitHub",
        filtersTitle: "Filtrar por Linguagem",
        clearFilters: "Limpar Filtros",
        noResults:
          "Nenhum repositório encontrado com as linguagens selecionadas.",
      },
      career: {
        profissional: [
          {
            title: "Analista de Processos Júnior",
            company: "Guima Conseco",
            period: "2024 - Presente",
            description: "Guima Conseco",
          },
          {
            title: "Técnico de Informática",
            company: "RMTS Informática",
            period: "2024 - 2024",
            description: "RMTS Informática",
          },
          {
            title: "Estagiário",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "Desenvolvedor Full Stack Júnior",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "Desenvolvedor Full Stack Júnior",
          },
        ],
        studies: [
          {
            degree: "Engenharia da Computação",
            school: "Faculdade Impacta de Tecnologia",
            type: "Bacharelado",
            period: "2021 - 2024",
            description: "Engenharia da Computação",
          },
          {
            degree: "Técnico em Administração",
            school: "ETEC Parque da Juventude",
            type: "Técnico",
            period: "2017 - 2019",
            description: "Técnico em Administração",
          },
        ],
        certifications: [
          {
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            year: "2022",
          },
          {
            name: "Professional Scrum Master I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "Certificação Avançada em React",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "Entre em Contato",
        description:
          "Tem uma pergunta ou quer trabalhar junto? Sinta-se à vontade para me contactar!",
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
          success: "Mensagem enviada com sucesso!",
          failed: "Falha ao enviar a mensagem. Por favor, tente novamente.",
        },
      },
      footer: {
        contact: "Contato",
        email: "lucasgola@outlook.com",
        media: "Redes Sociais",
        links: {
          title: "Links Rápidos",
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
        activities: "Lo Que Hago",
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
        title: "Sobre Mí",
        description:
          "Soy Lucas Gola da Silva, un Desarrollador Full Stack dedicado con un talento para el desarrollo tanto front-end como back-end. Disfruto de nuevas aventuras tecnológicas. Mi objetivo es crear experiencias de usuario perfectas a través de aplicaciones modernas y responsivas, construidas con tecnologías de vanguardia.\nSoy extremadamente enfocado y comprometido con mi trabajo, siempre buscando alcanzar mis objetivos con determinación. Tengo un enfoque orientado hacia el futuro, buscando constantemente maneras de mejorar la eficiencia y los resultados a través de métodos innovadores. Mis habilidades organizacionales me permiten optimizar mi tiempo de manera eficaz.\nMe destaco en entornos de equipo, valorando opiniones diversas y discusiones abiertas. Creo firmemente que “dos cabezas piensan mejor que una” y trabajo bien con los demás para lograr los mejores resultados. Acojo todas las perspectivas y permanezco abierto a nuevas ideas.",
        hobbies: {
          title: "Pasatiempos e Intereses",
          items: [
            {
              title: "Música",
              description: "Casi siempre estoy escuchando música",
              color: "azul",
            },
            {
              title: "Juegos",
              description:
                "Me gusta mucho jugar, especialmente juegos de estrategia y RPG.",
              color: "morado",
            },
            {
              title: "Ver",
              description: "Me gusta ver películas, series y animaciones.",
              color: "rosa",
            },
            {
              title: "Programar",
              description:
                "Frecuentemente me encuentro pensando en proyectos para mejorar mis tareas diarias.",
              color: "ámbar",
            },
          ],
        },
      },
      portfolio: {
        loading: "Cargando repositorios...",
        tokenError:
          "Token de GitHub no encontrado. Por favor, añade tu token al archivo .env.",
        title: "Mis Proyectos en GitHub",
        description: "Aquí están mis repositorios públicos de GitHub",
        filtersTitle: "Filtrar por Lenguaje",
        clearFilters: "Limpiar Filtros",
        noResults:
          "No se encontraron repositorios con los lenguajes seleccionados.",
      },
      career: {
        profesional: [
          {
            title: "Analista de Procesos Junior",
            company: "Guima Conseco",
            period: "2024 - Presente",
            description: "Guima Conseco",
          },
          {
            title: "Técnico en Informática",
            company: "RMTS Informática",
            period: "2024 - 2024",
            description: "RMTS Informática",
          },
          {
            title: "Practicante",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "Desarrollador Full Stack Junior",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "Desarrollador Full Stack Junior",
          },
        ],
        studies: [
          {
            degree: "Ingeniería en Computación",
            school: "Faculdade Impacta de Tecnologia",
            type: "Licenciatura",
            period: "2021 - 2024",
            description: "Ingeniería en Computación",
          },
          {
            degree: "Técnico en Administración",
            school: "ETEC Parque da Juventude",
            type: "Técnico",
            period: "2017 - 2019",
            description: "Técnico en Administración",
          },
        ],
        certifications: [
          {
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            year: "2022",
          },
          {
            name: "Professional Scrum Master I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "Certificación Avanzada en React",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "Ponte en Contacto",
        description:
          "¿Tienes alguna pregunta o quieres trabajar juntos? ¡No dudes en contactarme!",
        locationTitle: "Ubicación",
        location: "São Paulo - SP",
        phoneTitle: "Teléfono",
        phone: "+55 (11) 99448-5761",
        emailTitle: "Correo Electrónico",
        email: "lucasgola@outlook.com",
        forms: {
          name: "Nombre",
          email: "Correo Electrónico",
          message: "Mensaje",
          success: "¡Mensaje enviado con éxito!",
          failed: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        },
      },
      footer: {
        contact: "Contacto",
        email: "lucasgola@outlook.com",
        media: "Redes Sociales",
        links: {
          title: "Enlaces Rápidos",
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
        home: "主页",
        about: "关于",
        career: "职业",
        contact: "联系",
      },
      home: {
        greeting: "你好，我是 Lucas",
        role: "全栈开发者 | UI/UX 设计师",
        viewWork: "查看我的工作",
        activities: "我做什么",
        services: {
          frontend: {
            title: "前端开发",
            description: "创建美观、响应迅速的用户界面",
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
        title: "关于我",
        description:
          "我是 Lucas Gola da Silva，一名专注于前端和后端开发的全栈开发者。我喜欢技术冒险。我的目标是通过前沿技术构建现代、响应迅速的应用，创造无缝的用户体验。\n我对工作非常专注和投入，总是努力实现自己的目标。我有一种面向未来的方法，不断寻找通过创新方法提高效率和结果的方法。我的组织能力使我能够有效地优化我的时间。\n我在团队环境中表现出色，重视多样化的意见和开放的讨论。我坚定地相信“两个头脑比一个好”，并与他人合作以实现最佳结果。我欢迎所有观点，并保持对新想法的开放态度。",
        hobbies: {
          title: "爱好与兴趣",
          items: [
            {
              title: "音乐",
              description: "我几乎总是在听音乐",
              color: "蓝色",
            },
            {
              title: "游戏",
              description: "我非常喜欢玩游戏，尤其是策略和 RPG 游戏。",
              color: "紫色",
            },
            {
              title: "看",
              description: "我喜欢看电影、电视剧和动画。",
              color: "粉色",
            },
            {
              title: "编程",
              description: "我经常想到一些项目来改进我的日常任务。",
              color: "琥珀色",
            },
          ],
        },
      },
      portfolio: {
        loading: "加载存储库...",
        tokenError: "未找到 GitHub 令牌。请将您的令牌添加到 .env 文件中。",
        title: "我的 GitHub 项目",
        description: "这里是我在 GitHub 上的公共存储库",
        filtersTitle: "按语言筛选",
        clearFilters: "清除筛选",
        noResults: "未找到选定语言的存储库。",
      },
      career: {
        profissional: [
          {
            title: "初级流程分析师",
            company: "Guima Conseco",
            period: "2024 - 至今",
            description: "Guima Conseco",
          },
          {
            title: "计算机技术员",
            company: "RMTS Informática",
            period: "2024 - 2024",
            description: "RMTS Informática",
          },
          {
            title: "实习生",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "初级全栈开发者",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "初级全栈开发者",
          },
        ],
        studies: [
          {
            degree: "计算机工程",
            school: "Faculdade Impacta de Tecnologia",
            type: "学士学位",
            period: "2021 - 2024",
            description: "计算机工程",
          },
          {
            degree: "行政技术员",
            school: "ETEC Parque da Juventude",
            type: "技术学位",
            period: "2017 - 2019",
            description: "行政技术员",
          },
        ],
        certifications: [
          {
            name: "AWS 认证开发者",
            issuer: "Amazon Web Services",
            year: "2022",
          },
          {
            name: "专业 Scrum Master I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "React 高级认证",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "取得联系",
        description: "有问题或想合作吗？随时与我联系！",
        locationTitle: "位置",
        location: "圣保罗 - SP",
        phoneTitle: "电话",
        phone: "+55 (11) 99448-5761",
        emailTitle: "电子邮件",
        email: "lucasgola@outlook.com",
        forms: {
          name: "姓名",
          email: "电子邮件",
          message: "消息",
          success: "消息发送成功！",
          failed: "消息发送失败。请再试一次。",
        },
      },
      footer: {
        contact: "联系",
        email: "lucasgola@outlook.com",
        media: "社交媒体",
        links: {
          title: "快速链接",
          portfolio: "作品集",
          about: "关于",
          contact: "联系",
        },
        rights: "2025 Lucas Gola da Silva。保留所有权利。",
      },
    },
  },
  hi: {
    translation: {
      nav: {
        portfolio: "पोर्टफोलियो",
        home: "होम",
        about: "परिचय",
        career: "कैरियर",
        contact: "संपर्क",
      },
      home: {
        greeting: "नमस्ते, मैं हूँ लुकास",
        role: "फुल स्टैक डेवलपर | UI/UX डिज़ाइनर",
        viewWork: "मेरा काम देखें",
        activities: "मैं क्या करता हूँ",
        services: {
          frontend: {
            title: "फ्रंटएंड डेवलपमेंट",
            description: "सुंदर, प्रतिक्रियाशील उपयोगकर्ता इंटरफेस बनाना",
          },
          backend: {
            title: "बैकएंड डेवलपमेंट",
            description: "मजबूत सर्वर-साइड अनुप्रयोग बनाना",
          },
          design: {
            title: "UI/UX डिज़ाइन",
            description: "सहज उपयोगकर्ता अनुभव तैयार करना",
          },
        },
      },
      about: {
        title: "मेरे बारे में",
        description:
          "मैं लुकास गोला दा सिल्वा हूँ, एक समर्पित फुल स्टैक डेवलपर हूँ, जिसमें फ्रंट-एंड और बैक-एंड विकास दोनों का प्रतिभा है। मुझे नई तकनीकी रोमांच पसंद हैं। मेरा लक्ष्य आधुनिक, प्रतिक्रियाशील अनुप्रयोगों के माध्यम से निर्बाध उपयोगकर्ता अनुभव बनाना है, जो नवीनतम तकनीकों के साथ बनाए जाते हैं।\nमैं अपने काम के प्रति अत्यंत ध्यान केंद्रित और प्रतिबद्ध हूँ, हमेशा दृढ़ संकल्प के साथ अपने लक्ष्यों को हासिल करने की कोशिश करता हूँ। मेरे पास एक अग्रणी दृष्टिकोण है, जो नवीन तरीकों के माध्यम से दक्षता और परिणामों को सुधारने के तरीकों की खोज में रहता है। मेरी संगठनात्मक कौशल मुझे अपने समय का प्रभावी ढंग से अनुकूलन करने की अनुमति देते हैं।\nमैं टीम सेटिंग्स में उत्कृष्ट हूँ, विविध राय और खुले विचार-विमर्श को महत्व देता हूँ। मुझे दृढ़ता से विश्वास है कि 'दो सिर एक से बेहतर होते हैं' और दूसरों के साथ मिलकर काम करता हूँ ताकि सर्वोत्तम परिणाम प्राप्त हो सके। मैं सभी दृष्टिकोणों को अपनाता हूँ और नई विचारों के लिए खुला रहता हूँ।",
        hobbies: {
          title: "शौक और रुचियाँ",
          items: [
            {
              title: "संगीत",
              description: "मैं लगभग हमेशा संगीत सुनता हूँ",
              color: "नीला",
            },
            {
              title: "खेल",
              description:
                "मुझे खेल खेलना बहुत पसंद है, विशेष रूप से रणनीति और आरपीजी खेल।",
              color: "बैंगनी",
            },
            {
              title: "देखना",
              description: "मुझे फिल्में, श्रृंखलाएँ और एनिमेशन देखना पसंद है।",
              color: "गुलाबी",
            },
            {
              title: "प्रोग्रामिंग",
              description:
                "मैं अक्सर अपनी दैनिक कार्यों को सुधारने के लिए परियोजनाओं के बारे में सोचता रहता हूँ।",
              color: "अंबर",
            },
          ],
        },
      },
      portfolio: {
        loading: "रिपॉजिटरी लोड हो रही है...",
        tokenError:
          "GitHub टोकन नहीं मिला। कृपया अपनी टोकन को .env फ़ाइल में जोड़ें।",
        title: "मेरे GitHub प्रोजेक्ट्स",
        description: "यहाँ मेरे GitHub के सार्वजनिक रिपॉजिटरी हैं",
        filtersTitle: "भाषा के अनुसार फ़िल्टर करें",
        clearFilters: "फ़िल्टर साफ़ करें",
        noResults: "चयनित भाषाओं के साथ कोई रिपॉजिटरी नहीं मिली।",
      },
      career: {
        profissional: [
          {
            title: "जूनियर प्रोसेस एनालिस्ट",
            company: "Guima Conseco",
            period: "2024 - वर्तमान",
            description: "Guima Conseco",
          },
          {
            title: "कंप्यूटर तकनीशियन",
            company: "RMTS Informática",
            period: "2024 - 2024",
            description: "RMTS Informática",
          },
          {
            title: "प्रशिक्षु",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "जूनियर फुल स्टैक डेवलपर",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "जूनियर फुल स्टैक डेवलपर",
          },
        ],
        studies: [
          {
            degree: "कंप्यूटर इंजीनियरिंग",
            school: "Faculdade Impacta de Tecnologia",
            type: "स्नातक की डिग्री",
            period: "2021 - 2024",
            description: "कंप्यूटर इंजीनियरिंग",
          },
          {
            degree: "प्रशासन तकनीशियन",
            school: "ETEC Parque da Juventude",
            type: "तकनीकी डिग्री",
            period: "2017 - 2019",
            description: "प्रशासन तकनीशियन",
          },
        ],
        certifications: [
          {
            name: "AWS प्रमाणित डेवलपर",
            issuer: "Amazon Web Services",
            year: "2022",
          },
          {
            name: "प्रोफेशनल स्क्रम मास्टर I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "React एडवांस्ड सर्टिफिकेशन",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "संपर्क करें",
        description:
          "क्या आपके पास कोई प्रश्न है या साथ काम करना चाहते हैं? मुझसे संपर्क करने में संकोच न करें!",
        locationTitle: "स्थान",
        location: "साओ पाउलो - एसपी",
        phoneTitle: "फोन",
        phone: "+55 (11) 99448-5761",
        emailTitle: "ईमेल",
        email: "lucasgola@outlook.com",
        forms: {
          name: "नाम",
          email: "ईमेल",
          message: "संदेश",
          success: "संदेश सफलतापूर्वक भेजा गया!",
          failed: "संदेश भेजने में विफल। कृपया पुन: प्रयास करें।",
        },
      },
      footer: {
        contact: "संपर्क",
        email: "lucasgola@outlook.com",
        media: "सोशल मीडिया",
        links: {
          title: "त्वरित लिंक",
          portfolio: "पोर्टफोलियो",
          about: "परिचय",
          contact: "संपर्क",
        },
        rights: "2025 Lucas Gola da Silva। सर्वाधिकार सुरक्षित।",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        portfolio: "المحفظة",
        home: "الصفحة الرئيسية",
        about: "حول",
        career: "المسيرة المهنية",
        contact: "اتصل",
      },
      home: {
        greeting: "مرحبا، أنا لوكاس",
        role: "مطور كامل المكدس | مصمم UI/UX",
        viewWork: "عرض عملي",
        activities: "ما أقوم به",
        services: {
          frontend: {
            title: "تطوير الواجهة الأمامية",
            description: "إنشاء واجهات مستخدم جميلة ومتجاوبة",
          },
          backend: {
            title: "تطوير الخلفية",
            description: "بناء تطبيقات جانب الخادم المتينة",
          },
          design: {
            title: "تصميم UI/UX",
            description: "صياغة تجارب مستخدم بديهية",
          },
        },
      },
      about: {
        title: "عنّي",
        description:
          'أنا لوكاس غولا دا سيلفا، مطور مكدس كامل ملتزم بتميز في تطوير الواجهات الأمامية والخلفية. أزدهر في مغامرات تكنولوجية جديدة. هدفي هو إنشاء تجارب مستخدم سلسة عبر تطبيقات حديثة ومتجاوبة مبنية بتقنيات متقدمة. \n أنا مركّز للغاية وملتزم بعملي، دائمًا ما أسعى لتحقيق أهدافي بعزيمة. لدي نهج مستقبلي، وأبحث باستمرار عن طرق لتحسين الكفاءة والنتائج من خلال أساليب مبتكرة. تمكّنني مهاراتي التنظيمية من تحسين وقتي بفعالية. \n أتفوق في بيئات الفريق، وأقدر الآراء المتنوعة والنقاشات المفتوحة. أعتقد بشدة أن "رأسين أفضل من رأس واحد" وأعمل بشكل جيد مع الآخرين لتحقيق أفضل النتائج. أحتضن جميع المنظورات وأظل مفتوحًا للأفكار الجديدة.',
        hobbies: {
          title: "الهوايات والاهتمامات",
          items: [
            {
              title: "الموسيقى",
              description: "أنا أستمع دائمًا تقريبًا إلى الموسيقى",
              color: "أزرق",
            },
            {
              title: "الألعاب",
              description:
                "أنا أحب جدًا لعب الألعاب، خاصة الألعاب الاستراتيجية وألعاب تقمص الأدوار.",
              color: "أرجواني",
            },
            {
              title: "المشاهدة",
              description: "أحب مشاهدة الأفلام والمسلسلات والرسوم المتحركة.",
              color: "وردي",
            },
            {
              title: "البرمجة",
              description:
                "أجد نفسي غالبًا أفكر في مشاريع لتحسين مهامي اليومية.",
              color: "كهرماني",
            },
          ],
        },
      },
      portfolio: {
        loading: "جارٍ تحميل المستودعات...",
        tokenError:
          "لم يتم العثور على رمز GitHub. يرجى إضافة الرمز إلى ملف .env.",
        title: "مشاريعي على GitHub",
        description: "هنا المستودعات العامة الخاصة بي على GitHub",
        filtersTitle: "التصفية حسب اللغة",
        clearFilters: "مسح التصفية",
        noResults: "لم يتم العثور على مستودعات باللغات المختارة.",
      },
      career: {
        profissional: [
          {
            title: "محلل عمليات مبتدئ",
            company: "Guima Conseco",
            period: "2024 - الحالي",
            description: "Guima Conseco",
          },
          {
            title: "فني حاسوب",
            company: "RMTS Informática",
            period: "2024 - 2024",
            description: "RMTS Informática",
          },
          {
            title: "متدرب",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "مطور مكدس كامل مبتدئ",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "مطور مكدس كامل مبتدئ",
          },
        ],
        studies: [
          {
            degree: "هندسة الحاسوب",
            school: "كلية إمباكتا للتكنولوجيا",
            type: "درجة البكالوريوس",
            period: "2021 - 2024",
            description: "هندسة الحاسوب",
          },
          {
            degree: "فني إدارة",
            school: "ETEC Parque da Juventude",
            type: "شهادة فنية",
            period: "2017 - 2019",
            description: "فني إدارة",
          },
        ],
        certifications: [
          {
            name: "مطوّر معتمد من AWS",
            issuer: "خدمات أمازون ويب",
            year: "2022",
          },
          {
            name: "مدير محترف لـ Scrum I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "شهادة React المتقدمة",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "ابقى على تواصل",
        description:
          "هل لديك سؤال أو ترغب في العمل معًا؟ لا تتردد في الاتصال بي!",
        locationTitle: "الموقع",
        location: "ساو باولو - SP",
        phoneTitle: "الهاتف",
        phone: "+55 (11) 99448-5761",
        emailTitle: "البريد الإلكتروني",
        email: "lucasgola@outlook.com",
        forms: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          message: "الرسالة",
          success: "تم إرسال الرسالة بنجاح!",
          failed: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        },
      },
      footer: {
        contact: "اتصل",
        email: "lucasgola@outlook.com",
        media: "وسائل التواصل الاجتماعي",
        links: {
          title: "روابط سريعة",
          portfolio: "المحفظة",
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
        home: "বাড়ি",
        about: "সম্পর্কিত",
        career: "পেশা",
        contact: "যোগাযোগ",
      },
      home: {
        greeting: "হ্যালো, আমি লুকাস",
        role: "পূর্ণ স্ট্যাক ডেভেলপার | ইউআই/ইউএক্স ডিজাইনার",
        viewWork: "আমার কাজ দেখুন",
        activities: "আমি কি করি",
        services: {
          frontend: {
            title: "ফ্রন্টেন্ড ডেভেলপমেন্ট",
            description:
              "সুন্দর, প্রতিক্রিয়াশীল ব্যবহারকারীর ইন্টারফেস তৈরি করা",
          },
          backend: {
            title: "ব্যাকেন্ড ডেভেলপমেন্ট",
            description: "মজবুত সার্ভার-সাইড অ্যাপ্লিকেশন নির্মাণ",
          },
          design: {
            title: "ইউআই/ইউএক্স ডিজাইন",
            description: "স্বজ্ঞাত ব্যবহারকারীর অভিজ্ঞতা তৈরি করা",
          },
        },
      },
      about: {
        title: "আমার সম্পর্কে",
        description:
          "আমি লুকাস গোলা দা সিলভা, একটি নিবেদিতপূর্ণ স্ট্যাক ডেভেলপার যার ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড উভয় ডেভেলপমেন্টের প্রতি ঝোঁক রয়েছে। আমি নতুন প্রযুক্তিগত অভিযানের মধ্যে ঝাঁপিয়ে পড়ি। আমার লক্ষ্য হল আধুনিক, প্রতিক্রিয়াশীল অ্যাপ্লিকেশনগুলির মাধ্যমে নিরবচ্ছিন্ন ব্যবহারকারীর অভিজ্ঞতা তৈরি করা, কাটিং-এজ প্রযুক্তি ব্যবহার করে নির্মিত।\nআমি আমার কাজে অত্যন্ত মনোযোগী এবং প্রতিশ্রুতিবদ্ধ, সবসময় নিষ্ঠার সাথে আমার উদ্দেশ্য অর্জনের চেষ্টা করি। আমার একটি অগ্রবর্তী চিন্তাভাবনা রয়েছে, যা দক্ষতা এবং ফলাফল উন্নত করার নতুন উপায় খুঁজে বের করার চেষ্টা করে। আমার সংগঠিত দক্ষতা আমাকে আমার সময় কার্যকরভাবে ব্যবহার করতে সক্ষম করে।\nআমি দলের মধ্যে এক্সেল করি, বিভিন্ন মতামত এবং খোলা আলোচনা মূল্যায়ন করি। আমি দৃঢ়ভাবে বিশ্বাস করি যে “দুটি মাথা একটি থেকে ভাল” এবং সেরা ফলাফল অর্জনের জন্য অন্যদের সাথে ভাল কাজ করি। আমি সমস্ত দৃষ্টিভঙ্গি গ্রহণ করি এবং নতুন ধারণার প্রতি খোলা মন রাখি।",
        hobbies: {
          title: "শখ ও আগ্রহ",
          items: [
            {
              title: "সংগীত",
              description: "আমি প্রায় সবসময়ই সংগীত শুনি",
              color: "নীল",
            },
            {
              title: "গেমস",
              description:
                "আমি গেম খেলতে সত্যিই পছন্দ করি, বিশেষ করে কৌশল এবং আরপিজি গেমগুলি।",
              color: "বেগুনি",
            },
            {
              title: "দেখা",
              description:
                "আমি চলচ্চিত্র, সিরিজ এবং অ্যানিমেশন দেখতে পছন্দ করি।",
              color: "গোলাপী",
            },
            {
              title: "প্রোগ্রামিং",
              description:
                "আমি প্রায়ই নিজেকে আমার দৈনন্দিন কাজগুলির উন্নতি করার জন্য প্রকল্পগুলির কথা ভাবি।",
              color: "অ্যাম্বার",
            },
          ],
        },
      },
      portfolio: {
        loading: "রিপোজিটরি লোড হচ্ছে...",
        tokenError:
          "গিটহাব টোকেন পাওয়া যায়নি। অনুগ্রহ করে আপনার টোকেন .env ফাইলে যুক্ত করুন।",
        title: "আমার গিটহাব প্রকল্পগুলি",
        description: "এগুলি আমার গিটহাব থেকে আমার প্রকাশ্য রিপোজিটরিগুলি",
        filtersTitle: "ভাষা দ্বারা ফিল্টার করুন",
        clearFilters: "ফিল্টার মুছুন",
        noResults: "নির্বাচিত ভাষাগুলির সাথে কোনো রিপোজিটরি পাওয়া যায়নি।",
      },
      career: {
        profissional: [
          {
            title: "জুনিয়র প্রক্রিয়া বিশ্লেষক",
            company: "গুইমা কনসেকো",
            period: "2024 - বর্তমান",
            description: "গুইমা কনসেকো",
          },
          {
            title: "কম্পিউটার টেকনিশিয়ান",
            company: "আরএমটিএস ইনফরমেটিকা",
            period: "2024 - 2024",
            description: "আরএমটিএস ইনফরমেটিকা",
          },
          {
            title: "শিক্ষানবিস",
            company: "ভিভো",
            period: "2022 - 2023",
            description: "ভিভো",
          },
          {
            title: "জুনিয়র পূর্ণ স্ট্যাক ডেভেলপার",
            company: "গো অ্যাহেড",
            period: "2021 - 2022",
            description: "জুনিয়র পূর্ণ স্ট্যাক ডেভেলপার",
          },
        ],
        studies: [
          {
            degree: "কম্পিউটার ইঞ্জিনিয়ারিং",
            school: "ফাকুলদাদ ইম্প্যাক্টা ডে টেকনোলজিয়া",
            type: "ব্যাচেলর ডিগ্রি",
            period: "2021 - 2024",
            description: "কম্পিউটার ইঞ্জিনিয়ারিং",
          },
          {
            degree: "প্রশাসন প্রযুক্তিবিদ",
            school: "ইটিইসি পার্ক দা জুভেন্তুদ",
            type: "প্রযুক্তিগত ডিগ্রি",
            period: "2017 - 2019",
            description: "প্রশাসন প্রযুক্তিবিদ",
          },
        ],
        certifications: [
          {
            name: "এডব্লিউএস সার্টিফাইড ডেভেলপার",
            issuer: "আমাজন ওয়েব সার্ভিসেস",
            year: "2022",
          },
          {
            name: "প্রফেশনাল স্ক্রাম মাস্টার I",
            issuer: "স্ক্রাম.অর্গ",
            year: "2021",
          },
          {
            name: "রিঅ্যাক্ট অ্যাডভান্সড সার্টিফিকেশন",
            issuer: "মেটা",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "যোগাযোগ করুন",
        description:
          "আপনার কি প্রশ্ন আছে বা একসাথে কাজ করতে চান? নির্দ্বিধায় আমার সাথে যোগাযোগ করুন!",
        locationTitle: "অবস্থান",
        location: "সাও পাওলো - এসপি",
        phoneTitle: "ফোন",
        phone: "+55 (11) 99448-5761",
        emailTitle: "ইমেইল",
        email: "lucasgola@outlook.com",
        forms: {
          name: "নাম",
          email: "ইমেইল",
          message: "বার্তা",
          success: "বার্তা সফলভাবে পাঠানো হয়েছে!",
          failed: "বার্তা পাঠাতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
        },
      },
      footer: {
        contact: "যোগাযোগ",
        email: "lucasgola@outlook.com",
        media: "সামাজিক মাধ্যম",
        links: {
          title: "দ্রুত লিঙ্কগুলি",
          portfolio: "পোর্টফোলিও",
          about: "সম্পর্কিত",
          contact: "যোগাযোগ",
        },
        rights: "2025 লুকাস গোলা দা সিলভা। সর্বস্বত্ব সংরক্ষিত।",
      },
    },
  },
  ja: {
    translation: {
      nav: {
        portfolio: "ポートフォリオ",
        home: "ホーム",
        about: "約",
        career: "キャリア",
        contact: "連絡先",
      },
      home: {
        greeting: "こんにちは、ルーカスです",
        role: "フルスタック開発者 | UI/UXデザイナー",
        viewWork: "私の作品を見る",
        activities: "私がやっていること",
        services: {
          frontend: {
            title: "フロントエンド開発",
            description: "美しく、レスポンシブなユーザーインターフェイスの作成",
          },
          backend: {
            title: "バックエンド開発",
            description: "堅牢なサーバーサイドアプリケーションの構築",
          },
          design: {
            title: "UI/UXデザイン",
            description: "直感的なユーザー体験の設計",
          },
        },
      },
      about: {
        title: "私について",
        description:
          "私はルーカス ゴラ ダ シルバです。フロントエンドとバックエンドの両方の開発に特化した献身的なフルスタック開発者です。新しい技術的冒険に飛び込みます。私の目標は、最新の技術を使用して構築されたモダンでレスポンシブなアプリケーションを通じてシームレスなユーザー体験を作り出すことです。\n私は自分の仕事に非常に集中し、誠実に目標を達成するよう努めています。効率と結果を改善する方法を常に模索する、前向きなアプローチを持っています。私の組織的なスキルにより、時間を効果的に活用することができます。\nチーム設定でのエクセルを実現し、多様な意見とオープンな議論を重視します。私がしっかりと信じているのは、「2つの頭は1つよりも良い」です。最高の結果を得るために他の人と良く仕事をします。すべての視点を受け入れ、新しいアイデアに対して開かれた心を持っています。",
        hobbies: {
          title: "趣味と関心",
          items: [
            {
              title: "音楽",
              description: "私はほとんど常に音楽を聴いています",
              color: "青",
            },
            {
              title: "ゲーム",
              description:
                "私はゲームが本当に好きで、特に戦略やRPGゲームが好きです。",
              color: "紫",
            },
            {
              title: "ウォッチング",
              description: "映画、シリーズ、アニメーションを見るのが好きです。",
              color: "ピンク",
            },
            {
              title: "プログラミング",
              description:
                "私は日常のタスクを改善するプロジェクトについて考えることがよくあります。",
              color: "アンバー",
            },
          ],
        },
      },
      portfolio: {
        loading: "リポジトリを読み込んでいます...",
        tokenError:
          "GitHubトークンが見つかりません。トークンを.envファイルに追加してください。",
        title: "私のGitHubプロジェクト",
        description: "これがGitHubからの公開リポジトリです",
        filtersTitle: "言語でフィルタリング",
        clearFilters: "フィルタをクリア",
        noResults: "選択された言語でリポジトリが見つかりませんでした。",
      },
      career: {
        profissional: [
          {
            title: "ジュニアプロセスアナリスト",
            company: "Guima Conseco",
            period: "2024 - 現在",
            description: "Guima Conseco",
          },
          {
            title: "コンピュータ技術者",
            company: "RMTS インフォメティカ",
            period: "2024 - 2024",
            description: "RMTS インフォメティカ",
          },
          {
            title: "トレイニー",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "ジュニアフルスタック開発者",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "ジュニアフルスタック開発者",
          },
        ],
        studies: [
          {
            degree: "コンピュータ工学",
            school: "Faculdade Impacta de Tecnologia",
            type: "学士号",
            period: "2021 - 2024",
            description: "コンピュータ工学",
          },
          {
            degree: "管理技術者",
            school: "ETEC Parque da Juventude",
            type: "技術的な学位",
            period: "2017 - 2019",
            description: "管理技術者",
          },
        ],
        certifications: [
          {
            name: "AWS認定デベロッパー",
            issuer: "Amazon Web Services",
            year: "2022",
          },
          {
            name: "プロフェッショナルスクラムマスター I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "Reactアドバンスド認定",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "連絡先",
        description:
          "質問がある場合や一緒に働きたい場合は、お気軽にご連絡ください！",
        locationTitle: "場所",
        location: "サンパウロ - SP",
        phoneTitle: "電話番号",
        phone: "+55 (11) 99448-5761",
        emailTitle: "メール",
        email: "lucasgola@outlook.com",
        forms: {
          name: "名前",
          email: "メール",
          message: "メッセージ",
          success: "メッセージが正常に送信されました！",
          failed:
            "メッセージの送信に失敗しました。もう一度やり直してください。",
        },
      },
      footer: {
        contact: "連絡先",
        email: "lucasgola@outlook.com",
        media: "ソーシャルメディア",
        links: {
          title: "クイックリンク",
          portfolio: "ポートフォリオ",
          about: "約",
          contact: "連絡先",
        },
        rights: "2025年 ルーカス ゴラ ダ シルバ。すべての権利を保有。",
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
        activities: "Ce que je fais",
        services: {
          frontend: {
            title: "Développement Frontend",
            description: "Créer de belles interfaces utilisateurs réactives",
          },
          backend: {
            title: "Développement Backend",
            description: "Construire des applications côté serveur robustes",
          },
          design: {
            title: "Conception UI/UX",
            description: "Créer des expériences utilisateurs intuitives",
          },
        },
      },
      about: {
        title: "À propos de moi",
        description:
          "Je m'appelle Lucas Gola da Silva, un développeur Full Stack dédié avec un flair pour le développement front-end et back-end. J'adore plonger dans de nouvelles aventures technologiques. Mon objectif est de créer des expériences utilisateurs sans faille grâce à des applications modernes et réactives construites avec des technologies de pointe.\nJe suis extrêmement concentré et engagé dans mon travail, cherchant toujours à atteindre mes objectifs avec détermination. J'ai une approche avant-gardiste, cherchant constamment à améliorer l'efficacité et les résultats par des méthodes innovantes. Mes compétences organisationnelles me permettent d'optimiser mon temps efficacement.\nJ'excelle dans les environnements d'équipe, valorisant les opinions diverses et les discussions ouvertes. Je crois fermement que « deux têtes valent mieux qu'une » et je travaille bien avec les autres pour obtenir les meilleurs résultats. J'accepte toutes les perspectives et je reste ouvert aux nouvelles idées.",
        hobbies: {
          title: "Loisirs et intérêts",
          items: [
            {
              title: "Musique",
              description: "J'écoute presque toujours de la musique",
              color: "bleu",
            },
            {
              title: "Jeux",
              description:
                "J'aime vraiment jouer à des jeux, en particulier les jeux de stratégie et les RPG.",
              color: "violet",
            },
            {
              title: "Regarder",
              description:
                "J'aime regarder des films, des séries et des animations.",
              color: "rose",
            },
            {
              title: "Programmation",
              description:
                "Je me trouve souvent en train de penser à des projets pour améliorer mes tâches quotidiennes.",
              color: "ambre",
            },
          ],
        },
      },
      portfolio: {
        loading: "Chargement des dépôts...",
        tokenError:
          "Jeton GitHub introuvable. Veuillez ajouter votre jeton dans le fichier .env.",
        title: "Mes projets GitHub",
        description: "Voici mes dépôts publics de GitHub",
        filtersTitle: "Filtrer par langue",
        clearFilters: "Effacer les filtres",
        noResults: "Aucun dépôt trouvé avec les langues sélectionnées.",
      },
      career: {
        profissional: [
          {
            title: "Analyste de processus junior",
            company: "Guima Conseco",
            period: "2024 - Présent",
            description: "Guima Conseco",
          },
          {
            title: "Technicien en informatique",
            company: "RMTS Informática",
            period: "2024 - 2024",
            description: "RMTS Informática",
          },
          {
            title: "Stagiaire",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "Développeur Full Stack junior",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "Développeur Full Stack junior",
          },
        ],
        studies: [
          {
            degree: "Génie informatique",
            school: "Faculdade Impacta de Tecnologia",
            type: "Licence",
            period: "2021 - 2024",
            description: "Génie informatique",
          },
          {
            degree: "Technicien en administration",
            school: "ETEC Parque da Juventude",
            type: "Diplôme technique",
            period: "2017 - 2019",
            description: "Technicien en administration",
          },
        ],
        certifications: [
          {
            name: "Développeur certifié AWS",
            issuer: "Amazon Web Services",
            year: "2022",
          },
          {
            name: "Professional Scrum Master I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "Certification avancée React",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "Entrer en contact",
        description:
          "Vous avez une question ou voulez travailler ensemble ? N'hésitez pas à me contacter !",
        locationTitle: "Localisation",
        location: "São Paulo - SP",
        phoneTitle: "Téléphone",
        phone: "+55 (11) 99448-5761",
        emailTitle: "E-mail",
        email: "lucasgola@outlook.com",
        forms: {
          name: "Nom",
          email: "E-mail",
          message: "Message",
          success: "Message envoyé avec succès !",
          failed: "Échec de l'envoi du message. Veuillez réessayer.",
        },
      },
      footer: {
        contact: "Contact",
        email: "lucasgola@outlook.com",
        media: "Médias sociaux",
        links: {
          title: "Liens rapides",
          portfolio: "Portfolio",
          about: "À propos",
          contact: "Contact",
        },
        rights: "2025 Lucas Gola da Silva. Tous droits réservés.",
      },
    },
  },
  kr: {
    translation: {
      nav: {
        portfolio: "포트폴리오",
        home: "홈",
        about: "소개",
        career: "경력",
        contact: "연락처",
      },
      home: {
        greeting: "안녕하세요, 저는 루카스입니다",
        role: "풀스택 개발자 | UI/UX 디자이너",
        viewWork: "내 작업 보기",
        activities: "내가 하는 일",
        services: {
          frontend: {
            title: "프론트엔드 개발",
            description: "아름답고 반응형 사용자 인터페이스 만들기",
          },
          backend: {
            title: "백엔드 개발",
            description: "견고한 서버사이드 애플리케이션 구축",
          },
          design: {
            title: "UI/UX 디자인",
            description: "직관적인 사용자 경험 설계",
          },
        },
      },
      about: {
        title: "내 소개",
        description:
          "저는 루카스 골라 다 실바입니다. 프론트엔드와 백엔드 개발 모두에 재능 있는 헌신적인 풀스택 개발자입니다. 새로운 기술적 모험에 뛰어드는 것을 좋아합니다. 저의 목표는 최신 기술로 구축된 현대적이고 반응형인 애플리케이션을 통해 매끄러운 사용자 경험을 창출하는 것입니다.\n저는 제 일에 극도로 집중하고 헌신하며 항상 결단력 있게 목표를 달성하려고 노력합니다. 효율성과 결과를 개선하기 위해 새로운 방법을 끊임없이 모색하는 전진적인 접근 방식을 가지고 있습니다. 제 조직적 기술 덕분에 시간을 효과적으로 활용할 수 있습니다.\n팀 환경에서 뛰어나며 다양한 의견과 열린 토론을 소중히 여깁니다. 저는 “두 머리가 한 머리보다 낫다”는 것을 확고히 믿으며, 최고의 결과를 얻기 위해 다른 사람들과 잘 협력합니다. 모든 관점을 수용하고 새로운 아이디어에 개방된 마음을 유지합니다.",
        hobbies: {
          title: "취미 및 관심사",
          items: [
            {
              title: "음악",
              description: "저는 거의 항상 음악을 듣습니다",
              color: "파란색",
            },
            {
              title: "게임",
              description:
                "저는 게임을 정말 좋아하며, 특히 전략 및 RPG 게임을 좋아합니다.",
              color: "보라색",
            },
            {
              title: "시청",
              description: "영화, 시리즈 및 애니메이션을 보는 것을 좋아합니다.",
              color: "핑크색",
            },
            {
              title: "프로그래밍",
              description:
                "저는 자주 일상 업무를 개선할 프로젝트에 대해 생각합니다.",
              color: "호박색",
            },
          ],
        },
      },
      portfolio: {
        loading: "저장소 로드 중...",
        tokenError:
          "GitHub 토큰을 찾을 수 없습니다. .env 파일에 토큰을 추가해주세요.",
        title: "내 GitHub 프로젝트",
        description: "다음은 내 GitHub의 공개 저장소입니다",
        filtersTitle: "언어별 필터",
        clearFilters: "필터 지우기",
        noResults: "선택한 언어로 저장소를 찾을 수 없습니다.",
      },
      career: {
        profissional: [
          {
            title: "주니어 프로세스 분석가",
            company: "Guima Conseco",
            period: "2024 - 현재",
            description: "Guima Conseco",
          },
          {
            title: "컴퓨터 기술자",
            company: "RMTS 인포매티카",
            period: "2024 - 2024",
            description: "RMTS 인포매티카",
          },
          {
            title: "수습 직원",
            company: "VIVO",
            period: "2022 - 2023",
            description: "VIVO",
          },
          {
            title: "주니어 풀스택 개발자",
            company: "Go Ahead",
            period: "2021 - 2022",
            description: "주니어 풀스택 개발자",
          },
        ],
        studies: [
          {
            degree: "컴퓨터 공학",
            school: "Faculdade Impacta de Tecnologia",
            type: "학사 학위",
            period: "2021 - 2024",
            description: "컴퓨터 공학",
          },
          {
            degree: "행정 기술자",
            school: "ETEC Parque da Juventude",
            type: "기술 학위",
            period: "2017 - 2019",
            description: "행정 기술자",
          },
        ],
        certifications: [
          {
            name: "AWS 인증 개발자",
            issuer: "Amazon Web Services",
            year: "2022",
          },
          {
            name: "Professional Scrum Master I",
            issuer: "Scrum.org",
            year: "2021",
          },
          {
            name: "React 고급 인증",
            issuer: "Meta",
            year: "2020",
          },
        ],
      },
      contact: {
        title: "문의하기",
        description:
          "질문이 있으신가요, 혹은 함께 일하고 싶으신가요? 언제든지 연락주세요!",
        locationTitle: "위치",
        location: "상파울루 - SP",
        phoneTitle: "전화",
        phone: "+55 (11) 99448-5761",
        emailTitle: "이메일",
        email: "lucasgola@outlook.com",
        forms: {
          name: "이름",
          email: "이메일",
          message: "메시지",
          success: "메시지가 성공적으로 전송되었습니다!",
          failed: "메시지 전송에 실패했습니다. 다시 시도해주세요.",
        },
      },
      footer: {
        contact: "연락처",
        email: "lucasgola@outlook.com",
        media: "소셜 미디어",
        links: {
          title: "빠른 링크",
          portfolio: "포트폴리오",
          about: "소개",
          contact: "연락처",
        },
        rights: "2025 Lucas Gola da Silva. 모든 권리 보유.",
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
