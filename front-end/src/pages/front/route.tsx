import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/Navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/front')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <NavBar />
      <div className="container mb-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
