import { createLazyFileRoute } from '@tanstack/react-router'
import { NavBar } from '@/components/Navbar'
import { Activities } from '@/components/Activities'
import { Learn } from '@/components/Learn'
import { Tip } from '@/components/Tip'
import { Footer } from '@/components/Footer'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <NavBar />
      <div className="lg:container px-3 mb-60 grid lg:grid-cols-[1fr_auto] items-start gap-6">
        <Activities />
        <div className="lg:w-[350px] grid gap-6">
          <Learn className="lg:order-2" />
          <Tip className="lg:order-1" />
        </div>
      </div>
      <Footer />
    </>
  )
}
