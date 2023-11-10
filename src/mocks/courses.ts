import { Course } from "./Course";
export const courses: Course[]= [
  {
    id: "2",
    title: "Curso de HTML y CSS",
    category: "Diseño web",
    description: "Aprende a crear páginas web con HTML y CSS.",
    image: "/images/banners/banner-1.jpg",
    instructors: ["María Pérez", "Pedro García"],
    content: [
      {
        title: "Módulo 1: Introducción a HTML",
        description: "En este módulo, aprenderás los conceptos básicos de HTML, como etiquetas, atributos y estructura de documentos.",
      },
      {
        title: "Módulo 2: CSS básico",
        description: "En este módulo, aprenderás los conceptos básicos de CSS, como tipos de propiedades, valores y selectores.",
      },
      {
        title: "Módulo 3: CSS avanzado",
        description: "En este módulo, aprenderás sobre temas avanzados de CSS, como posicionamiento, animaciones y transiciones.",
      },
    ],
    duration: "15 horas",
  },
  {
    id: "3",
    title: "Curso de React",
    category: "JavaScript",
    description: "Aprende a crear interfaces de usuario interactivas con React.",
    image: "/images/banners/banner-2.jpg",
    instructors: ["José Hernández", "Laura López"],
    content: [
      {
        title: "Módulo 1: Introducción a React",
        description: "En este módulo, aprenderás los conceptos básicos de React, como componentes, estados y eventos.",
      },
      {
        title: "Módulo 2: Componentes avanzados",
        description: "En este módulo, aprenderás sobre temas avanzados de componentes React, como composición, herencia y props.",
      },
      {
        title: "Módulo 3: Estado y flujo de datos",
        description: "En este módulo, aprenderás sobre el estado de React y cómo utilizarlo para crear flujos de datos complejos.",
      },
    ],
    duration: "20 horas",
  },
  {
    id: "4",
    title: "Curso de HTML y CSS",
    category: "Diseño web",
    description: "Aprende a crear páginas web con HTML y CSS.",
    image: "/images/banners/banner-4.jpg",
    instructors: ["Luis Rodríguez", "Ana Martínez"],
    content: [
      {
        title: "Módulo 1: Introducción a HTML",
        description: "En este módulo, aprenderás los conceptos básicos de HTML, como etiquetas, atributos y estructura de documentos.",
      },
      {
        title: "Módulo 2: CSS básico",
        description: "En este módulo, aprenderás los conceptos básicos de CSS, como tipos de propiedades, valores y selectores.",
      },
      {
        title: "Módulo 3: CSS avanzado",
        description: "En este módulo, aprenderás sobre temas avanzados de CSS, como posicionamiento, animaciones y transiciones.",
      },
    ],
    duration: "15 horas",
  },
  {
    id: "5",
    title: "Curso de Python",
    category: "Programación",
    description: "Aprende a programar en Python, un lenguaje de programación versátil y popular.",
    image: "/images/banners/banner-5.jpg",
    instructors: ["Pedro García", "María Pérez"],
    content: [
      {
        title: "Módulo 1: Introducción a Python",
        description: "En este módulo, aprenderás los conceptos básicos de Python, como variables, tipos de datos, operadores y control de flujo.",
      },
      {
        title: "Módulo 2: Programación orientada a objetos",
        description: "En este módulo, aprenderás sobre la programación orientada a objetos, una de las principales paradigmas de la programación en Python.",
      },
      {
        title: "Módulo 3: Programación web con Python",
        description: "En este módulo, aprenderás a crear aplicaciones web con Python utilizando frameworks como",
      },
    ],
    duration: "15 horas",
  }
];