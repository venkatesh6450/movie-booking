import { lazy } from 'react'

export const routes = {
  login: {
    path: "/",
    component: lazy(() => import('../Components/Login')),
    exact: true,
  },
  movies: {
    path: "/movies",
    component: lazy(() => import('../Components')),
    exact: true,
  },
  movie: {
    path: "/movie/:movieName",
    component: lazy(() => import('../Components/BookTicket')),
    exact: true,
  },
  term: {
    path: "/terms-conditions",
    component: lazy(() => import('../Components/Terms')),
    exact: true,
  },
  payment: {
    path: "/payment",
    component: lazy(() => import('../Components/Payment')),
    exact: true,
  },
  home: {
    path: "/home",
    component: lazy(() => import('../Components/LandingPage')),
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)