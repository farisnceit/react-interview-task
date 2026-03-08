import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import '../index.css'

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2 w-full justify-center bg-linear-to-r from-cyan-100 to-blue-100">
      <Link to="/" className="[&.active]:text-red-500">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:text-red-500">
        About
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })