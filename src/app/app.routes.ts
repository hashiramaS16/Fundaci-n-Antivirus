import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "inicio",
        title: "Inicio",
        loadComponent: () => import("./Pages/Inicio/inicio.component").then((m) => m.InicioComponent)
    },
    {
        path: "fundacion",
        title: "Fundacion",
        loadComponent: () => import("./Pages/Fundación/fundacion.component").then((m) => m.FundacionComponent)
    },
    {
        path: "contactenos",
        title: "Contactenos",
        loadComponent: () => import("./Pages/Contáctenos/contactenos.component").then((m) => m.ContactenosComponent)
    },
    {
        path: "noticias",
        title: "Noticias",
        loadComponent: () => import("./Pages/Noticias/noticias.component").then((m) => m.NoticiasComponent)
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
        path: "butt",
        title: "Servicios",
        loadComponent: () => import("./Pages/Servicios/servicios.component").then((m) => m.ServiciosComponent)
    }
];
    
