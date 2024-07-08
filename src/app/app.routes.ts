import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "inicio",
        title: "Inicio",
        loadComponent: () => import("./Pages/Inicio/inicio.component").then((m) => m.InicioComponent),
    },
    {
        path: "fundacion",
        title: "Fundacion",
        loadComponent: () => import("./Pages/Fundación/fundacion.component").then((m) => m.FundacionComponent)
    },

    {
        path: "que-hacemos",
        title: "Que-Hacemos",
        loadComponent: () => import("./Pages/Que - Hacemos/que-hacemos.component").then((m) => m.QueHacemosComponent),
        children: [
            {
                path: "analitica-datos",
                title: "Analitica-datos",
                loadComponent: () => import("./Pages/Que - Hacemos/Pages/Analisis de Datos/analisis-de-datos.component").then((m) => m.AnalisisDeDatosComponent),
            },
            {
                path: "apoyo-emocional",
                title: "Apoyo-Emocional",
                loadComponent: () => import("./Pages/Que - Hacemos/Pages/Apoyo Emocional/apoyo-emocional.component").then((m) => m.ApoyoEmocionalComponent),
            }, {
                path: "comunicaciones",
                title: "Comunicaciones",
                loadComponent: () => import("./Pages/Que - Hacemos/Pages/Comunicaciones/comunicaciones.component").then((m) => m.ComunicacionesComponent),
            },


        ]
    },
    {
        path: "servicios",
        title: "Servicios",
        loadComponent: () => import("./Pages/Servicios/servicios.component").then((m) => m.ServiciosComponent),
        children: [
            {
                path: "estudiantes",
                title: "Estudiantes",
                loadComponent: () => import("./Pages/Servicios/Pages/Estudiantes/estudiantes.component").then((m) => m.EstudiantesComponent),
                children: [
                    {
                        path: "tutorias-mentorias",
                        title: "Tutorias-Mentorias",
                        loadComponent: () => import("./Pages/Servicios/Pages/Estudiantes/pages/tutoriasmentorias/tutoriasmentorias.component").then((m) => m.TutoriasmentoriasComponent),
                    },
                    {
                        path: "nivelate",
                        title: "nivelate",
                        loadComponent: () => import("./Pages/Servicios/Pages/Estudiantes/pages/nivelate/nivelate.component").then((m) => m.NivelateComponent),
                    },
                    {
                        path: "grupo-de-estudio",
                        title: "Grupos-de-Estudio",
                        loadComponent: () => import("./Pages/Servicios/Pages/Estudiantes/pages/grupos-de-estudios/grupos-de-estudios.component").then((m) => m.GruposDeEstudiosComponent),
                    },
                    {
                        path: "acompañamiento-orientacion",
                        title: "Acompañamiento-orientacion",
                        loadComponent: () => import("./Pages/Servicios/Pages/Estudiantes/pages/acompanamientos-orientacion/acompanamientos-orientacion.component").then((m) => m.AcompanamientosOrientacionComponent),
                    },
                ]
            },

            {
                path: "consulturias",
                title: "Consultorias",
                loadComponent: () => import("./Pages/Servicios/Pages/Consultorias y Proyectos/consulturias-y-proyectos.component").then((m) => m.ConsulturiasYProyectosComponent),
            },

        ]
    },

    {
        path: "oportunidades",
        title: "Oportunidades",
        loadComponent: () => import("./Pages/Oportunidades/oportunidades.component").then((m) => m.OportunidadesComponent),
        children: [
            {
                path: "contactenos",
                title: "contactenos",
                loadComponent: () => import("./Pages/Oportunidades/Pages/Contáctenos/contactenos.component").then((m) => m.ContactenosComponent),
            },
            {
                path: "noticias",
                title: "Noticias",
                loadComponent: () => import("./Pages/Oportunidades/Pages/Noticias/noticias.component").then((m) => m.NoticiasComponent),
            },
        ]
    }
];
    
