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
        loadComponent: () => import("./Pages/Que - Hacemos/que-hacemos.component").then((m) => m.QueHacemosComponent)
    },
    {
        path: "servicios",
        title: "Servicios",
        loadComponent: () => import("./Pages/Servicios/servicios.component").then((m) => m.ServiciosComponent)
    },
    {
        path:"oportunidades",
        title:"Oportunidades",
        loadComponent: () => import("./Pages/Oportunidades/oportunidades.component").then((m) => m.OportunidadesComponent)
    }
];
