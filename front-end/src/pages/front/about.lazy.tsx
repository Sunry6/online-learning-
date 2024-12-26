import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/front/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/front/about"!</div>
}
