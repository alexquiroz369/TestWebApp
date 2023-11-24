import { Course } from "./Course";
export const courses: Course[]= [
  {
    "id": "2",
    "title": "Literatura",
    "category": "Sexto de Secundaria",
    "description": "Aprende Literatura",
    "image": "/images/banners/banner-1.jpg",
    "rating": 3,
    "pdFile": "https://www.africau.edu/images/default/sample.pdf",
    "instructors": ["María Pérez", "Pedro García"],
    "duration": "2 horas",
    "content": [
      {
        "title": "Módulo 1: Introducción",
        "description": "En este módulo, aprenderás.",
      },
      {
        "title": "Módulo 2: Derivadas",
        "description": "En este módulo, aprenderás.",
      },
      {
        "title": "Módulo 3: Derivadas Dobles",
        "description": "En este módulo, aprenderás.",
      },
    ],
    "sections": [
      {
        "title": "Introducción",
        "videos": [
          {
            "id": 1,
            "title": "Introducción a la Literatura",
            "description": "Este video te enseñará los conceptos básicos de la Literatura.",
            "url": "https://www.youtube.com/watch?v=BiBndOouFlU&list=PLUTo9-5-PxijmGtBLuvJPVWFw0QpgrFZv",
          },
        ],
      },
      {
        "title": "Géneros literarios",
        "videos": [
          {
            "id": 2,
            "title": "Los géneros literarios",
            "description": "Este video te enseñará los diferentes géneros literarios.",
            "url": "https://www.youtube.com/watch?v=GarB-p5b7xU&list=PLUTo9-5-PxijmGtBLuvJPVWFw0QpgrFZv&index=14",
          },
        ],
      },
    ]
    },
    {
      id: "8",
      title: "Geografía",
      category: "Quinto de Secundaria",
      description: "Aprende Geografía",
      image: "/images/banners/banner-8.jpg",
      rating: 4,
      duration: "6 horas",
      pdFile: "https://www.africau.edu/images/default/sample.pdf",
      instructors: ["Juan José Pérez", "Pedro López"],
      content: [
        {
          title: "Módulo 1: La geografía física",
          description: "En este módulo, aprenderás sobre la geografía física.",
        },
        {
          title: "Módulo 2: La geografía humana",
          description: "En este módulo, aprenderás sobre la geografía humana.",
        },
        {
          title: "Módulo 3: La geografía económica",
          description: "En este módulo, aprenderás sobre la geografía económica.",
        },
      ],
      sections: [
        {
          title: "La geografía física",
          videos: [
            {
              id: 1,
              title: "Los tipos de relieve",
              description: "Este video te enseñará sobre los tipos de relieve.",
              url: "https://www.youtube.com/watch?v=N15zV-g1Xt0",
            },
          ],
        },
        {
          title: "La geografía humana",
          videos: [
            {
              id: 2,
              title: "Los tipos de población",
              description: "Este video te enseñará sobre los tipos de población.",
              url: "https://www.youtube.com/watch?v=10jSpf9PyME",
            },
          ],
        },
        {
          title: "La geografía económica",
          videos: [
            {
              id: 3,
              title: "Los tipos de actividades económicas",
              description: "Este video te enseñará sobre los tipos de actividades económicas.",
              url: "https://www.youtube.com/watch?v=hdutT61NaLE",
            },
          ],
        },
      ],
    },
 {
      id: "4",
      title: "Matemáticas",
      category: "Sexto de Secundaria",
      description: "Aprende Matemáticas",
      image: "/images/banners/banner-4.jpg",
      rating: 4,
      duration: "2 horas y 15 minutos",
      pdFile: "https://www.africau.edu/images/default/sample.pdf",
      instructors: ["Juan Pérez", "Pedro López"],
      content: [
        {
          title: "Módulo 1: Números",
          description: "En este módulo, aprenderás sobre los números.",
        },
        {
          title: "Módulo 2: Álgebra",
          description: "En este módulo, aprenderás sobre el álgebra.",
        },
        {
          title: "Módulo 3: Geometría",
          description: "En este módulo, aprenderás sobre la geometría.",
        },
      ],
      sections: [
        {
          title: "Números",
          videos: [
            {
              id: 1,
              title: "Los números",
              description: "Este video te enseñará sobre los diferentes tipos de números.",
              url: "https://www.youtube.com/watch?v=FKkDGow6Fpw&list=PL9SnRnlzoyX1-FFtFcUupLSdnTRvs8B5K",
            },
          ],
        },
        {
          title: "Álgebra",
          videos: [
            {
              id: 2,
              title: "Ecuaciones",
              description: "Este video te enseñará sobre las ecuaciones.",
              url: "https://www.youtube.com/watch?v=P61RkhoDM6A&list=PL9SnRnlzoyX1-FFtFcUupLSdnTRvs8B5K&index=2",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      title: "Ciencias Naturales",
      category: "Quinto de Secundaria",
      description: "Aprende Ciencias Naturales",
      image: "/images/banners/banner-5.jpg",
      rating: 4,
      duration: "3 horas",
      pdFile: "https://www.africau.edu/images/default/sample.pdf",
      instructors: ["María Pérez", "Pedro López"],
      content: [
        {
          title: "Módulo 1: La materia",
          description: "En este módulo, aprenderás sobre la materia.",
        },
        {
          title: "Módulo 2: La energía",
          description: "En este módulo, aprenderás sobre la energía.",
        },
        {
          title: "Módulo 3: La vida",
          description: "En este módulo, aprenderás sobre la vida.",
        },
      ],
      sections: [
        {
          title: "La materia",
          videos: [
            {
              id: 1,
              title: "La estructura de la materia",
              description: "Este video te enseñará sobre la estructura de la materia.",
              url: "https://www.youtube.com/watch?v=rTW8RArWizc&list=PLof1wzs2RVVsnre2cnOLZw5bQKzMt4TU6",
            },
          ],
        },
        {
          title: "La energía",
          videos: [
            {
              id: 2,
              title: "Los tipos de energía",
              description: "Este video te enseñará sobre los tipos de energía.",
              url: "https://www.youtube.com/watch?v=K5bQDNBnX6Q&list=PLof1wzs2RVVsnre2cnOLZw5bQKzMt4TU6&index=2",
            },
          ],
        },
        {
          title: "La vida",
          videos: [
            {
              id: 3,
              title: "Los seres vivos",
              description: "Este video te enseñará sobre los seres vivos.",
              url: "https://www.youtube.com/watch?v=icf1txIlmD4&list=PLof1wzs2RVVsnre2cnOLZw5bQKzMt4TU6&index=3",
            },
          ],
        },
      ],
    },
    {
      id: "6",
      title: "Lenguaje y Literatura",
      category: "Quinto de Secundaria",
      description: "Aprende Lenguaje y Literatura",
      image: "/images/banners/banner-6.jpg",
      rating: 4,
      duration: "4 horas",
      pdFile: "https://www.africau.edu/images/default/sample.pdf",
      instructors: ["Juana Pérez", "Pedro López"],
      content: [
        {
          title: "Módulo 1: La comunicación",
          description: "En este módulo, aprenderás sobre la comunicación.",
        },
        {
          title: "Módulo 2: La lengua",
          description: "En este módulo, aprenderás sobre la lengua.",
        },
        {
          title: "Módulo 3: La literatura",
          description: "En este módulo, aprenderás sobre la literatura.",
        },
      ],
      sections: [
        {
          title: "La comunicación",
          videos: [
            {
              id: 1,
              title: "Los elementos de la comunicación",
              description: "Este video te enseñará sobre los elementos de la comunicación.",
              url: "https://www.youtube.com/watch?v=8SZVBcYmmpg&list=PLUu6BcKWduDwUXXSnuLA83s_UAu7vFybo",
            },
          ],
        },
        {
          title: "La lengua",
          videos: [
            {
              id: 2,
              title: "Los niveles de la lengua",
              description: "Este video te enseñará sobre los niveles de la lengua.",
              url: "https://www.youtube.com/watch?v=edeEmzeSeZ0&list=PLUu6BcKWduDwUXXSnuLA83s_UAu7vFybo&index=2",
            },
          ],
        },
        {
          title: "La literatura",
          videos: [
            {
              id: 3,
              title: "Los géneros literarios",
              description: "Este video te enseñará sobre los géneros literarios.",
              url: "https://www.youtube.com/watch?v=WLquQwSAZR8&list=PLUu6BcKWduDwUXXSnuLA83s_UAu7vFybo&index=3",
            },
          ],
        },
      ],
    },
    {
      id: "7",
      title: "Historia",
      category: "Quinto de Secundaria",
      description: "Aprende Historia",
      image: "/images/banners/banner-7.jpg",
      rating: 4,
      duration: "5 horas",
      pdFile: "https://www.africau.edu/images/default/sample.pdf",
      instructors: ["Juan Carlos Pérez", "Pedro López"],
      content: [
        {
          title: "Módulo 1: La historia antigua",
          description: "En este módulo, aprenderás sobre la historia antigua.",
        },
        {
          title: "Módulo 2: La historia medieval",
          description: "En este módulo, aprenderás sobre la historia medieval.",
        },
        {
          title: "Módulo 3: La historia moderna",
          description: "En este módulo, aprenderás sobre la historia moderna.",
        },
      ],
      sections: [
        {
          title: "La historia antigua",
          videos: [
            {
              id: 1,
              title: "La historia de Egipto",
              description: "Este video te enseñará sobre la historia de Egipto.",
              url: "https://res.cloudinary.com/dw5wd0zkt/video/upload/v1699679815/wqvtrskflc739p2z6do5.mp4",
            },
          ],
        },
        {
          title: "La historia medieval",
          videos: [
            {
              id: 2,
              title: "La historia de la Edad Media",
              description: "Este video te enseñará sobre la historia de la Edad Media.",
              url: "https://res.cloudinary.com/dw5wd0zkt/video/upload/v1699683869/ITA_-_How_could_this_happen_to_banana_Joe_zg31ju.mp5",
            },
          ],
        },
        {
          title: "La historia moderna",
          videos: [
            {
              id: 3,
              title: "La historia de la Revolución Industrial",
              description: "Este video te enseñará sobre la historia de la Revolución Industrial.",
              url: "https://res.cloudinary.com/dw5wd0zkt/video/upload/v1699687923/video-1640025600-x4667_8768_hd.mp4",
            },
          ],
        },
      ],
    }
];