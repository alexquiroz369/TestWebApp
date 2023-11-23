// ** Type import
import { useEffect, useState } from 'react';
import { VerticalNavItemsType } from 'src/@core/layouts/types';
import axios, { AxiosResponse } from 'axios';

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface MateriaAttributes {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Materia {
  id: number;
  attributes: MateriaAttributes;
}

interface CursoAttributes {
  id: number;
  title: string;
  section: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  materias: {
    data: Materia[];
  };
  cursos_uni: {
    data: any; // Ajusta este tipo según la estructura real de datos para cursos_uni
  };
}

interface Curso {
  id: number;
  attributes: CursoAttributes;
}

interface ApiResponse {
  data: Curso[];
  meta: {
    pagination: Pagination;
  };
}

const navigation = (): VerticalNavItemsType => {
  const [cursos, setCursos] = useState<Curso[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get('http://3.83.228.77/api/cursos?populate=*');
        const dataFromApi = response.data.data;
        setCursos(dataFromApi);
        console.log(dataFromApi);
        console.log('hola');
        

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // return cursos?.map((curso) => {
  //   if (curso.attributes.section === 'cursos regulares') {
  //     return {
  //       title: 'Cursos Regulares',
  //       icon: 'mdi:home-outline',
  //       badgeContent: 'new',
  //       children: [
  //         {
  //           title: curso.attributes.title,
  //           path: `/dashboards/${curso.id}`,
  //         },
  //       ],
  //     }
  //   }
  //   if (curso.attributes.section === 'pre universitarios') {
  //     return {
  //         title: 'Pre universitarios',
  //         icon: 'mdi:home-outline',
  //         children: [
  //           {
  //             title: curso.attributes.title,
  //             path: `/dashboards/${curso.id}`,
  //           },
  //         ],
  //       }
  //   }
  // },
  // );
  return [
    {
      title: 'Menu',
      icon: 'mdi:home-outline',
      //badgeContent: 'new',
      children: [
        {
          title: 'Inicio',
          path: '/dashboards/crm'
        },
        {
          title: 'Quienes Somos',
          path: '/dashboards/analytics'
        },
      ]
    },
    {
      sectionTitle: 'Cursos Regulares'
    },
    {
      title: 'Sexto de secundaria',
      icon: 'mdi:ruler',
      children: [
        {
          title: 'Matematicas',
          path: '/courses/5'
        },
        {
          title: 'Literatura',
          path: '/courses/2'
        },
        {
          title: 'Fisica',
          path: '/courses/3'
        },
        {
          title: 'Quimica',
          path: '/courses/4'
        }
      ]
    },
    {
      title: 'Quinto de secundaria',
      icon: 'mdi:ruler',
      children: [
        {
          title: 'Matematicas',
          path: '/courses/8'
        },
        {
          title: 'Literatura',
          path: '/courses/9'
        },
        {
          title: 'Fisica',
          path: '/courses/10'
        },
        {
          title: 'Quimica',
          path: '/courses/11'
        }
      ]
    },
    {
      title: 'Tercero de secundaria',
      icon: 'mdi:ruler',
      children: [
        {
          title: 'Matematicas',
          path: '/courses/12'
        },
        {
          title: 'Literatura',
          path: '/courses/13'
        },
        {
          title: 'Fisica',
          path: '/courses/14'
        },
        {
          title: 'Quimica',
          path: '/courses/15'
        }
      ]
    },
    {
      sectionTitle: 'Cursos Preuniversitarios'
    },
    {
      title: 'UATF',
      icon: 'mdi:school',
      children: [
        {
          title: 'Ingenieria de sistemas',
          icon: 'mdi:math-integral-box',
          children: [
            {
              title: 'Programacion',
              path: '/courses/16'
            },
            {
              title: 'Calculo',
              path: '/courses/17'
            },
            {
              title: 'Estadistica',
              path: '/courses/18'
            },
            {
              title: 'Fisica',
              path: '/courses/19'
            }
          ]
        },
        {
          title: 'Medicina',
          icon: 'mdi:math-integral-box',
          children: [
            {
              title: 'Anatomia',
              path: '/courses/20'
            },
            {
              title: 'Biologia',
              path: '/courses/21'
            },
            {
              title: 'Estadistica',
              path: '/courses/22'
            }
          ]
        },
        {
          title: 'Administracion de empresas',
          icon: 'mdi:math-integral-box',
          children: [
            {
              title: 'Matematicas',
              path: '/courses/23'
            },
            {
              title: 'Literatura',
              path: '/courses/24'
            },
            {
              title: 'Calculo',
              path: '/courses/25'
            },
            {
              title: 'Contabilidad',
              path: '/courses/26'
            }
          ]
        },
      ]
    },
    {
      sectionTitle: 'Simulacros'
    },
    {
      title: 'UATF.',
      icon: 'mdi:list-status',
      children: [
        {
          title: 'Ingenieria de sistemas',
          icon: 'mdi:math-integral-box',
          children: [
            {
              title: 'Programacion',
              path: '/courses/27'
            },
            {
              title: 'Calculo',
              path: '/courses/28'
            },
            {
              title: 'Estadistica',
              path: '/courses/29'
            },
            {
              title: 'Fisica',
              path: '/courses/30'
            }
          ]
        },
        {
          title: 'Medicina',
          icon: 'mdi:math-integral-box',
          children: [
            {
              title: 'Anatomia',
              path: '/courses/31'
            },
            {
              title: 'Biologia',
              path: '/courses/32'
            },
            {
              title: 'Estadistica',
              path: '/courses/33'
            }
          ]
        },
        {
          title: 'Administracion de empresas',
          icon: 'mdi:math-integral-box',
          children: [
            {
              title: 'Matematicas',
              path: '/courses/34'
            },
            {
              title: 'Literatura',
              path: '/courses/35'
            },
            {
              title: 'Calculo',
              path: '/courses/36'
            },
            {
              title: 'Contabilidad',
              path: '/courses/37'
            }
          ]
        },
        
      ]
    },
    {
      path: 'createcourses',
      action: 'read',
      subject: 'acl-page',
      icon: 'mdi:home-outline',
      title: 'Crear Nuevo Curso'
    },
    {
      path: '/forms/form-layouts',
      action: 'read',
      subject: 'acl-page',
      icon: 'mdi:file-document-outline',
      title: 'Actualizar un Curso'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      icon: 'mdi:account-outline',
      title: 'Ver Usuarios'
    },

  ]
}

export default navigation
