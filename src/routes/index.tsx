import { createRootRoute, createRoute,  Outlet } from '@tanstack/react-router'

const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <h1>Home</h1>,
})

